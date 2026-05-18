import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer } from '@/animations/variants'
import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export function StaggerGrid({ children, className }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
