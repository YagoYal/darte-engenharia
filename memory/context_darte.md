# Contexto DARTE - Retomada Rapida

## Estado Atual

SPA React/Vite da DARTE Engenharia em `darte-app`, publicada via GitHub/Vercel. A marca visivel foi simplificada para "D'Arte Engenharia". Navbar desktop nao tem botao de WhatsApp; menu mobile mantem o botao.

## Feito Recentemente (2026-05-21)

- Galeria expandida implementada e polida em `Experience.tsx`:
  - Cards da secao Experiencia abrem modal (AnimatePresence) ao clicar.
  - Modal: cabecalho sticky navy, imagem principal 16:9, thumbnails, CTA WhatsApp.
  - Fecha com X, Esc ou clique no backdrop. Body scroll bloqueado quando aberto.
  - Responsivo: near-fullscreen mobile, modal centrado (min(860px,92vw)) desktop.
  - Bug fix: wrapper div separa posicionamento CSS do motion.div (transforms conflitavam).
  - Bug fix: max-h[78vh] + imagem com maxHeight min(484px,44vh) para distancia do topo.
  - Bug fix mobile: area navy abaixo do modal — wrapper flex-col + motion.div flex-1.
  - Zoom 100%–300% (steps 50%) com botoes - / % / + sobrepostos na imagem.
  - Drag/pan: constraints manuais baseados em containerSize * (zoom-1) / 2.
    Corrige bug do dragConstraints={ref} que via tamanho CSS sem scale.
  - dragElastic=0, dragMomentum=false: para exatamente na borda sem ultrapassar.
  - Medicao do container: imediata + confirmacao em 480ms apos animacao de entrada.
- Todas as imagens da galeria convertidas para WebP: 15.33 MB → 1.16 MB (-92%).
- PNGs/JPGs originais da galeria removidos localmente.
- `scripts/convert-gallery-webp.mjs` disponivel para futuras conversoes.

## Proximos Pontos

- Configurar Formspree real e variaveis `VITE_GA_ID` / `VITE_CLARITY_ID` na Vercel.
- Migrar repo/Vercel da conta pessoal para conta profissional apos aprovacao do cliente.
