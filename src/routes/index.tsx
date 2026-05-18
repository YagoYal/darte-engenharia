import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const Home = lazy(() => import('@/pages/Home'))

function PageLoader() {
  return (
    <div className="fixed inset-0 bg-navy-dark flex flex-col items-center justify-center gap-6 z-[9999]">
      <div className="w-[110px] h-[1px] bg-gold/20 relative overflow-hidden rounded">
        <div className="absolute inset-0 bg-gold animate-[shimmer_1.2s_ease-in-out_infinite]" />
      </div>
    </div>
  )
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}
