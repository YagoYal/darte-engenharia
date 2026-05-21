# Contexto DARTE - Retomada Rapida

## Estado Atual

SPA React/Vite da DARTE Engenharia em `darte-app`, publicada via GitHub/Vercel. A marca visivel foi simplificada para "D'Arte Engenharia". Navbar desktop nao tem botao de WhatsApp; menu mobile mantem o botao.

## Feito Recentemente (2026-05-21)

- Galeria expandida implementada em `Experience.tsx`:
  - Cards da secao Experiencia agora abrem modal de galeria ao ser clicados.
  - Modal: cabecalho sticky navy, imagem principal 16:9 com crossfade, strip de thumbnails, CTA para WhatsApp.
  - Fecha com botao X, Esc ou clique no backdrop.
  - Responsivo: near-fullscreen mobile, modal centrado no desktop.
  - Acessibilidade: role="dialog", aria-modal, aria-label, aria-pressed nas miniaturas.
- Imagens de galeria por projeto ja estavam nas pastas `sabor-da-terra/`, `cobertura-praia-costa/`, `area-lazer/`.
- `npx.cmd tsc -b` passou; `npm.cmd run build` passou.

## Anteriores

- Footer mobile corrigido: "suporte tecnico para" nao fica colado.
- Texto de "Vistoria de Imoveis" atualizado conforme referencia visual do cliente.
- Imagens da secao Experiencia organizadas em `src/assets/images/experiencia/`.
- Commits enviados para `origin/main`: `e75f344`, `97c8f40`, `23eb99f`, `7106829`, `0d1bd1e`.

## Proximos Pontos

- Converter PNGs da galeria para WebP (cobertura e area-lazer tem ~1.8-2.2 MB cada — urgente).
- Configurar Formspree real e variaveis `VITE_GA_ID` / `VITE_CLARITY_ID` na Vercel.
