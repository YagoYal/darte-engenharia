---
name: test-responsive
description: Gera um relatório de responsividade verificando CSS e HTML do projeto DARTE nos breakpoints definidos.
---

# Skill: /test-responsive

## O que faz
Analisa `src/index.html`, `src/css/main.css`, `src/css/components.css` e `src/css/animations.css` para verificar:

1. **Breakpoints cobertos**: mobile (< 640px), tablet (640–1024px), desktop (> 1024px)
2. **Grid collapse**: verifica se `.services__grid`, `.footer__grid`, etc. adaptam corretamente
3. **Tipografia fluida**: `clamp()` ou media queries para tamanhos de fonte
4. **Imagens responsivas**: `max-width: 100%`, `object-fit`, `aspect-ratio`
5. **Navegação mobile**: presença de menu hambúrguer ou equivalente
6. **Touch targets**: botões e links ≥ 44px de altura em mobile
7. **Overflow**: nenhum elemento causa scroll horizontal

## Output
Relatório no formato:
```
BREAKPOINT: 375px (Mobile)
  ✓ Grid: serviços colapsa para 1 coluna
  ✓ Fonte hero: clamp(2.5rem, 8vw, 5.5rem) ajusta corretamente
  ✗ PROBLEMA: .nav__links visível em mobile (menu hambúrguer não implementado)
  
BREAKPOINT: 768px (Tablet)
  ✓ Grid: serviços em 2 colunas
  ...
```
