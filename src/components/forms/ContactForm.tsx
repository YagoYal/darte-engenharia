import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Loader2, Send } from 'lucide-react'
import { contactSchema, type ContactSchema } from './contact.schema'
import { cn } from '@/lib/utils'

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactSchema) => {
    try {
      /* Formspree — substituir SEU_ID pelo ID real */
      const res = await fetch('https://formspree.io/f/SEU_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Falha no envio')
      toast.success('Mensagem enviada! Entraremos em contato em breve.')
      reset()
    } catch {
      toast.error('Erro ao enviar. Tente pelo WhatsApp.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <Field label="Nome *" error={errors.name?.message}>
        <input
          {...register('name')}
          placeholder="Seu nome"
          className={inputCls(!!errors.name)}
        />
      </Field>

      <Field label="E-mail *" error={errors.email?.message}>
        <input
          {...register('email')}
          type="email"
          placeholder="seu@email.com"
          className={inputCls(!!errors.email)}
        />
      </Field>

      <Field label="Telefone" error={errors.phone?.message}>
        <input
          {...register('phone')}
          type="tel"
          placeholder="(27) 99999-9999"
          className={inputCls(!!errors.phone)}
        />
      </Field>

      <Field label="Mensagem *" error={errors.message?.message}>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Descreva sua necessidade..."
          className={cn(inputCls(!!errors.message), 'resize-none')}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-navy mt-2 justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting
          ? <><Loader2 className="w-4 h-4 animate-spin" /> Enviando…</>
          : <><Send className="w-4 h-4" /> Enviar Mensagem</>
        }
      </button>
    </form>
  )
}

function inputCls(hasError: boolean) {
  return cn(
    'w-full px-4 py-3 bg-white border rounded-[6px] font-body text-[0.9rem] text-[#2C2C2C]',
    'placeholder:text-muted/60 outline-none transition-colors duration-200',
    hasError
      ? 'border-red-400 focus:border-red-500'
      : 'border-border focus:border-navy'
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[0.75rem] font-medium text-[#2C2C2C]/80">{label}</label>
      {children}
      {error && <span className="text-[0.72rem] text-red-500">{error}</span>}
    </div>
  )
}
