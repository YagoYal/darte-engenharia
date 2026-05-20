# Roadmap — DARTE Engenharia Civil

## Concluído

- [x] Estrutura SPA com React 19 + Vite 8 + TypeScript
- [x] TailwindCSS v3 com design tokens (navy, gold, cream, sand)
- [x] Tipografia: Cormorant Garamond (títulos/logo) + Inter (corpo/menu)
- [x] Seção Hero — split layout desktop (gradiente horizontal) + layout mobile separado (imagem nítida acima, texto cream abaixo)
- [x] Seção Serviços — 6 cards com expansão in-place animada (Framer Motion `layout`)
- [x] Ícones SVG fiéis ao sprite original para cada serviço
- [x] Seção CTA com imagem responsiva
- [x] Barra de contato (telefone, e-mail, região)
- [x] Navbar com smooth scroll (Lenis), menu mobile animado e active-link automático
- [x] Footer com links, Instagram (SVG custom) e copyright
- [x] Formulário de contato com React Hook Form + Zod + Sonner (toast)
- [x] SEO completo: meta tags, OpenGraph, Twitter Cards, sitemap.xml, robots.txt
- [x] Smooth scroll global (Lenis) + cursor personalizado + barra de progresso de scroll
- [x] Analytics: Google Analytics 4 + Microsoft Clarity (via env vars)
- [x] Animações de entrada com Framer Motion (heroTitle, fadeUp, staggerContainer, lineGrow)
- [x] Security headers + SPA rewrite + asset caching no `vercel.json`
- [x] Deploy automático na Vercel via GitHub Actions
- [x] Content Security Policy (CSP) — permite apenas origens autorizadas (GA4, Clarity, Fonts, Formspree)
- [x] HSTS — `Strict-Transport-Security` com preload (2 anos)
- [x] Honeypot anti-spam no formulário de contato (`_gotcha`)
- [x] Documentação: `roadmap.md`, `log.md`, `DARTE_Projeto.docx`
- [x] Imagens webp responsivas com `srcset` — hero (768/1280/1920w) e cta; ganho de até 90% no peso mobile

---

## Próximos passos (nível acima)

### 1. Formulário funcional com Formspree
Criar conta em formspree.io, criar um form e substituir `SEU_ID` em `ContactForm.tsx` pelo ID gerado. Testar envio end-to-end. Zero backend necessário.

### 2. Galeria de projetos / portfólio
Nova seção `#projetos` com grid de imagens reais de obras realizadas pela DARTE. Lightbox nativo (sem biblioteca extra) ao clicar em cada foto. Aumenta tempo de sessão e credibilidade perante o cliente final.

