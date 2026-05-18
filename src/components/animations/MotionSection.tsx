import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp } from '@/animations/variants'
import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
}

export function MotionSection({ children, className, delay = 0, once = true }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-10% 0px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
