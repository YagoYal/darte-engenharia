# DARTE Engenharia Civil — Landing Page

## Visão Geral
SPA vitrine para a DARTE Engenharia Civil. Site estático sem backend, sem frameworks JS pesados. Prioridade total em performance, animações suaves e identidade visual premium.

## Stack Técnica
- **HTML5** semântico com acessibilidade (ARIA, roles)
- **CSS3** com custom properties, Grid, Flexbox
- **GSAP 3** + ScrollTrigger (animações orchestradas por scroll)
- **Lenis** (smooth scroll inércia)
- **Splitting.js** (animações de texto caractere a caractere)
- Sem bundler — arquivos servidos diretamente (pode ser hospedado em qualquer CDN/GitHub Pages)

## Paleta de Cores
```
--navy:       #1B3A6B   /* azul principal, ligeiramente mais quente */
--navy-light: #2E5299   /* estados hover */
--gold:       #B8935A   /* acento bronze-ouro */
--gold-light: #D4AF7A   /* variante clara */
--cream:      #F2EDE6   /* fundo off-white quente */
--sand:       #E8DFD3   /* fundo alternativo seções */
--charcoal:   #2A2A2A   /* texto principal */
--muted:      #7A7A7A   /* texto secundário */
--white:      #FDFBF8   /* branco quente */
```

## Tipografia
- **Títulos**: Cormorant Garamond (elegante, arquitetural)
- **Corpo**: Inter (neutro, legível)
- **Labels/Caps**: Inter 500, letter-spacing amplo

## Estrutura de Arquivos
```
ProjetoJu/
├── CLAUDE.md
├── .claude/
│   ├── agents/
│   │   ├── design-system.md       # Guardião da identidade visual
│   │   ├── component-builder.md   # Constrói novos blocos HTML/CSS
│   │   ├── animation-specialist.md# Orquestra animações GSAP
│   │   └── qa-auditor.md          # Auditoria de qualidade e acessibilidade
│   └── commands/
│       ├── build-section.md       # /build-section <nome>
│       ├── add-animation.md       # /add-animation <seletor> <tipo>
│       └── test-responsive.md     # /test-responsive
├── src/
│   ├── index.html
│   ├── css/
│   │   ├── main.css               # Estilos base + layout
│   │   ├── animations.css         # Keyframes e classes de animação
│   │   └── components.css         # Componentes reutilizáveis
│   └── js/
│       ├── main.js                # Bootstrap + scroll + misc
│       └── animations.js          # GSAP timelines e ScrollTrigger
└── pages/
    ├── services-test.html         # Teste isolado do bloco Serviços
    └── components-test.html       # Sandbox de componentes
```

## Convenções
- Nomes de classe BEM: `.block__element--modifier`
- CSS custom properties para todos os valores de design token
- Animações GSAP sempre com `will-change` gerenciado e `clearProps` no final
- Imagens: lazy loading nativo (`loading="lazy"`) + dimensões explícitas
- WhatsApp link: `https://wa.me/5527999999999`

## Comandos Úteis
```bash
# Servir localmente (Python)
python -m http.server 3000 --directory src

# Servir localmente (Node)
npx serve src
```

## Agentes Disponíveis
Ver `.claude/agents/` para agentes especializados invocáveis via `/agent <nome>`.
