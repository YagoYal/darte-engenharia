import { motion } from 'framer-motion'
import { fadeUp } from '@/animations/variants'

interface Props {
  icon: React.ReactNode
  title: string
  description: string
  href?: string
}

export function ServiceCard({ icon, title, description, href = '#contato' }: Props) {
  return (
    <motion.article
      variants={fadeUp}
      className="group bg-white relative overflow-hidden flex flex-col gap-[0.65rem] p-[2.1rem_1.9rem_1.85rem] cursor-default
                 transition-colors duration-350 ease-out-expo hover:bg-[#FAF7F2]"
    >
      {/* Linha dourada no hover */}
      <span
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gold origin-left scale-x-0
                   transition-transform duration-[600ms] ease-out-expo group-hover:scale-x-100"
        aria-hidden
      />

      {/* Shimmer */}
      <span
        className="absolute inset-0 bg-[linear-gradient(105deg,transparent_38%,rgba(255,255,255,.32)_50%,transparent_62%)]
                   -translate-x-full transition-transform duration-500 ease-out-expo group-hover:translate-x-full"
        aria-hidden
      />

      {/* Ícone */}
      <div
        className="w-[46px] h-[46px] text-navy flex-shrink-0 transition-transform duration-[320ms] ease-spring group-hover:-translate-y-1"
        aria-hidden
      >
        {icon}
      </div>

      {/* Título */}
      <h3 className="font-display text-[1.08rem] font-medium text-navy leading-[1.3] mt-1">
        {title}
      </h3>

      {/* Descrição */}
      <p className="text-[0.8rem] text-muted leading-[1.75] flex-1">
        {description}
      </p>

      {/* Seta */}
      <a
        href={href}
        className="inline-flex items-center text-[0.88rem] text-navy mt-1 group/arrow
                   transition-colors duration-200 hover:text-gold-dark"
        aria-label={`Saiba mais sobre ${title}`}
      >
        <span className="transition-[letter-spacing] duration-300 ease-out-expo group-hover/arrow:tracking-[0.06em]">
          →
        </span>
      </a>
    </motion.article>
  )
}
