import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter ao menos 2 caracteres'),
  email: z
    .string()
    .email('E-mail inválido'),
  phone: z
    .string()
    .optional(),
  message: z
    .string()
    .min(10, 'Mensagem deve ter ao menos 10 caracteres'),
})

export type ContactSchema = z.infer<typeof contactSchema>
