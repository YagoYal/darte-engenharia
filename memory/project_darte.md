---
name: project-darte
description: Projeto DARTE Engenharia - stack, design tokens, secoes e pendencias (estado 2026-05-20)
metadata:
  type: project
---

Site vitrine para a DARTE Engenharia (cliente de Junia/Ju).

**Why:** Site profissional de apresentacao da empresa para captar clientes via WhatsApp.
**How to apply:** Priorizar elegancia, performance mobile e conversao para WhatsApp. Sem backend.

## Stack

- React 19 + Vite 8 + TypeScript
- TailwindCSS v3 (nao usar v4)
- Framer Motion + Lenis (smooth scroll)
- Lucide React + SVG custom para icones de marca

## Design Tokens

| Token | Valor |
|---|---|
| Navy principal | `#08386F` |
| Navy hover | `#0D52A0` |
| Navy rodape | `#04346D` |
| Gold | `#C89B45` |
| Cream | `#FCF7F3` |
| Fonte titulos | Cormorant Garamond |
| Fonte corpo/menu | Montserrat |

## Secoes

1. Hero (`#inicio`)
2. Servicos (`#servicos`) - 6 cards expansives com Framer Motion
3. Experiencia (`#experiencia`) - 3 fotos de projetos reais
4. Footer (`#contato`) - logo | CTA | contatos

## Servicos

Vistoria de Imoveis; Acompanhamento de Obras e Reformas; Inspecao Predial; Consultoria para Obras e Reformas; Orcamento de Obra; Regularizacao de Imoveis.

## Fotos de Experiencia

Cada projeto tem uma imagem capa + 2 de galeria importadas estaticamente em `Experience.tsx`.

| Pasta | Capa | Galeria 2 | Galeria 3 |
|---|---|---|---|
| `experiencia/` | `exp-sabor-da-terra.jpg` | `sabor-da-terra/exp-sabor-da-terra-BJ2cqtKJ2.jpg` | `sabor-da-terra/gemini-2.5-flash-image_Um_angulo_de_cima-0.jpg` |
| `experiencia/` | `exp-cobertura-praia-costa.jpg` | `cobertura-praia-costa/c2bc912b-...png` | `cobertura-praia-costa/db97f41b-...png` |
| `experiencia/` | `exp-area-lazer.jpg` | `area-lazer/47efa51c-...png` | `area-lazer/cd6d6404-...png` |

Os PNGs das pastas de galeria sao grandes (~1.8-2.2 MB) e devem ser convertidos para WebP.

## Contato Real

- Tel: (27) 99796-7523
- Email: contato@darteeng.com.br
- Instagram: @darte.engenharia

## Ajustes Recentes

- Navbar desktop sem botao de WhatsApp; botao permanece no menu mobile.
- Marca visivel atualizada para "D'Arte Engenharia" em navbar, hero e footer.
- Footer mobile corrigido para nao juntar "tecnico" e "para".
- Texto do servico "Vistoria de Imoveis" alinhado a referencia visual enviada.
- Imagens da secao Experiencia movidas para `src/assets/images/experiencia/`.
- Pasta raiz `ProjetoJu/Experiencia` removida apos copia para assets internos.
- Validacoes recentes: `npx.cmd tsc -b` e `npm.cmd run build` passaram.
- Checagem mobile headless em 390px e 320px nao encontrou overflow horizontal.

## Galeria de Experiencia — Detalhes Tecnicos

- Modal com backdrop, wrapper de posicionamento (div) + painel animado (motion.div).
- Zoom 100%–300% com botoes overlay; drag/pan via constraints manuais.
- `dragConstraints = { left: -maxX, right: maxX, top: -maxY, bottom: maxY }`
  onde `maxX = containerW * (zoom-1) / 2`. Nao usar dragConstraints={ref} pois
  mede tamanho CSS sem scale, resultando em limite zero.
- Container medido por getBoundingClientRect imediatamente + setTimeout 480ms.
- Imagens em WebP; script de conversao em `scripts/convert-gallery-webp.mjs`.

## Pendencias

- Formspree: substituir `SEU_ID` em `ContactForm.tsx`.
- Env vars reais na Vercel: `VITE_GA_ID`, `VITE_CLARITY_ID`.
- Migrar repo/Vercel pessoal para conta/org profissional apos aprovacao do cliente.
