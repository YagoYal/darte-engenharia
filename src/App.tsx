import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { AppRouter } from '@/routes'
import { useLenis } from '@/hooks/useLenis'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useEffect } from 'react'

function ScrollProgressBar() {
  const progress = useScrollProgress()
  return (
    <div
      className="progress-bar"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden
    />
  )
}

function App() {
  useLenis()

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const outer = document.querySelector('.cursor-outer') as HTMLElement | null
    const dot   = document.querySelector('.cursor-dot')   as HTMLElement | null
    if (!outer || !dot) return

    let ox = 0, oy = 0, mx = 0, my = 0
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`
    }
    window.addEventListener('mousemove', onMove)

    let raf: number
    const animate = () => {
      ox = lerp(ox, mx, 0.1); oy = lerp(oy, my, 0.1)
      outer.style.transform = `translate(${ox}px,${oy}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <HelmetProvider>
      <div className="cursor-outer" aria-hidden />
      <div className="cursor-dot"   aria-hidden />
      <ScrollProgressBar />
      <AppRouter />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.875rem' },
        }}
      />
    </HelmetProvider>
  )
}

export default App
