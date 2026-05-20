import { SEO } from '@/seo/SEO'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Experience } from '@/components/sections/Experience'

export default function Home() {
  return (
    <>
      <SEO
        title="Início"
        description="DARTE Engenharia Civil — Vistorias, laudos técnicos e acompanhamento de obras em Vitória e região. Engenharia com técnica, controle e propósito."
      />

      <main id="main">
        <Hero />
        <Services />
        <Experience />
      </main>
    </>
  )
}
