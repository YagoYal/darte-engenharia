import { scrollTo } from '@/hooks/useLenis'

function IgIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}
import logoImg from '@/assets/images/a7962e9d-75c5-4131-9087-7d1a78e0ec6f.jpg'

const LINKS = ['Início','Serviços','Sobre','Contato']
const HREFS = ['#inicio','#servicos','#sobre','#contato']

export function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollTo(href)
  }

  return (
    <footer className="bg-navy-dark pt-14 pb-5 text-white/70">
      <div className="container-app">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-14 pb-10 border-b border-white/[0.08] mb-5">

          {/* Brand */}
          <div>
            <a href="#inicio" onClick={e => handleNav(e, '#inicio')} className="inline-flex items-center gap-[0.65rem] mb-3">
              <img src={logoImg} alt="" width={34} height={34} className="rounded-[5px] opacity-85 object-contain" aria-hidden />
              <div>
                <span className="block font-display text-[1.1rem] font-semibold tracking-[0.12em] uppercase text-white">DARTE</span>
                <span className="block text-[0.52rem] tracking-[0.18em] uppercase text-white/40">Engenharia</span>
              </div>
            </a>
            <p className="text-[0.78rem] text-white/45 leading-[1.75] max-w-[260px] mb-5">
              Engenharia com técnica, controle e propósito. Soluções técnicas para imóveis e obras com segurança, organização e responsabilidade.
            </p>
            <div className="flex gap-[0.6rem]">
              <a
                href="https://instagram.com/darteengenharia"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram DARTE"
                className="w-9 h-9 border border-white/15 rounded-md flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-colors duration-300"
              >
                <IgIcon size={16} />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <nav aria-label="Links rápidos">
            <p className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/35 mb-4">Links Rápidos</p>
            <ul className="flex flex-col gap-[0.45rem]" role="list">
              {LINKS.map((label, i) => (
                <li key={label}>
                  <a
                    href={HREFS[i]}
                    onClick={e => handleNav(e, HREFS[i])}
                    className="text-[0.8rem] text-white/55 hover:text-gold-light transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Instagram */}
          <nav aria-label="Instagram">
            <p className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/35 mb-4">Instagram</p>
            <a
              href="https://instagram.com/darteengenharia"
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram DARTE"
              className="inline-block text-white/50 hover:text-gold transition-colors duration-200"
            >
              <IgIcon size={28} />
            </a>
          </nav>
        </div>

        <p className="text-center text-[0.65rem] text-white/25 tracking-[0.04em]">
          © 2024 DARTE Engenharia Civil. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
