---
name: build-section
description: Constrói uma nova seção HTML/CSS para o site DARTE. Uso: /build-section <nome-da-secao>
---

# Skill: /build-section

## Uso
```
/build-section <nome>
```
Exemplos:
- `/build-section testimonials`
- `/build-section faq`
- `/build-section portfolio`

## O que este comando faz
1. Lê o design system em `.claude/agents/design-system.md`
2. Usa o component-builder para estruturar HTML semântico
3. Escreve o CSS seguindo os tokens do projeto
4. Adiciona atributos `data-animate` para hooks GSAP
5. Insere a seção em `src/index.html` no local correto
6. Adiciona os estilos em `src/css/components.css`
7. Executa checklist do qa-auditor antes de entregar

## Template Base
Todo build-section começa com este template e adapta conforme o conteúdo:

```html
<section class="[nome]" id="[nome]" aria-labelledby="[nome]-title">
  <div class="container">
    <header class="section-header" data-animate="fade-up">
      <span class="label-tag">[LABEL EM CAPS]</span>
      <h2 class="section-title" id="[nome]-title" data-split="words">
        Título da Seção
      </h2>
    </header>
    <!-- Conteúdo específico da seção -->
  </div>
</section>
```

```css
/* ── [NOME DA SEÇÃO] ─────────────────────── */
.[nome] {
  padding: var(--space-16) 0;
  background: var(--cream); /* ou --sand para alternância */
}

.[nome] .section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--space-8);
}
```
