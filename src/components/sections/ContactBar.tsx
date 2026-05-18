import { Phone, Mail, MapPin } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, fadeUp } from '@/animations/variants'
import { CONTACT } from '@/data/services'

const items = [
  { Icon: Phone, label: 'Atendimento', value: CONTACT.phone, href: CONTACT.phoneHref },
  { Icon: Mail,  label: 'E-mail',      value: CONTACT.email,  href: `mailto:${CONTACT.email}` },
  { Icon: MapPin, label: 'Atendimento', value: CONTACT.region, href: undefined },
]

export function ContactBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      id="contato"
      className="bg-white border-t border-b border-border py-6"
      aria-label="Informações de contato"
      ref={ref}
    >
      <div className="container-app">
        <motion.div
          className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center sm:justify-around gap-5 sm:gap-6"
          variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}
        >
          {items.map(({ Icon, label, value, href }) => {
            const Inner = (
              <>
                <Icon className="w-5 h-5 text-navy flex-shrink-0" aria-hidden />
                <div>
                  <span className="block text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-muted mb-[0.15rem]">
                    {label}
                  </span>
                  <span className="block text-[0.82rem] text-[#2C2C2C]">{value}</span>
                </div>
              </>
            )
            return (
              <motion.div key={value} variants={fadeUp}>
                {href ? (
                  <a href={href} className="flex items-center gap-3 group hover:[&_span:last-child]:text-navy transition-colors">
                    {Inner}
                  </a>
                ) : (
                  <div className="flex items-center gap-3">{Inner}</div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
