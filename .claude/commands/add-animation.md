---
name: add-animation
description: Adiciona uma animação GSAP a um seletor CSS existente. Uso: /add-animation <seletor> <tipo>
---

# Skill: /add-animation

## Uso
```
/add-animation <seletor> <tipo>
```

### Tipos disponíveis
| Tipo | Efeito |
|------|--------|
| `fade-up` | Entrada de baixo com fade (padrão) |
| `fade-in` | Fade simples sem movimento |
| `slide-left` | Entrada da direita |
| `slide-right` | Entrada da esquerda |
| `scale-in` | Escala de 0.85 a 1 |
| `text-reveal` | Reveal palavra a palavra (requer Splitting.js) |
| `line-draw` | Linha cresce da esquerda (para elementos de borda) |
| `parallax` | Parallax suave ao scroll |
| `stagger-grid` | Cards entram em cascata |
| `counter` | Anima números de 0 ao valor final |

## O que este comando faz
1. Lê o arquivo `src/js/animations.js`
2. Verifica se o seletor existe em `src/index.html`
3. Adiciona o bloco GSAP correto em `animations.js`
4. Adiciona `data-animate` attribute no HTML se necessário
5. Não duplica animações já existentes

## Exemplos
```
/add-animation .hero__title text-reveal
/add-animation .service-card stagger-grid
/add-animation .stats__number counter
/add-animation .cta-section__image parallax
```
