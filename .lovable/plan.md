# Reposicionamento Logiin — Foco em Câmeras de Segurança (CFTV) em Manaus

Reestruturar conteúdo, SEO e hierarquia da Home para posicionar a Logiin como especialista em instalação de câmeras em Manaus, mantendo a identidade visual atual (cores, fontes, componentes, gradientes).

## 1. SEO técnico (`index.html` + Home)

- Trocar `<title>` para: *Instalação de Câmeras de Segurança em Manaus | Orçamento Rápido | Logiin*
- Meta description conforme briefing.
- Open Graph e Twitter atualizados (mesmo título/descrição), `og:type=website`, `og:locale=pt_BR`.
- Adicionar JSON-LD no `index.html`:
  - `LocalBusiness` + `SecuritySystemInstaller` (mesmo nó com `@type` array), com `name`, `areaServed: Manaus`, `telephone`, `url`, `sameAs` (WhatsApp), `priceRange`.
  - `FAQPage` com as 5 perguntas do briefing.
- Instalar `react-helmet-async` NÃO é necessário — Home = rota principal, SEO fica no `index.html`.
- Garantir 1 único `<h1>` por página (Home passa a ter H1 novo do hero).

## 2. Nova Home — ordem das seções

```text
HeroCFTV (H1)
BeneficiosCFTV (6 itens)
PacotesCameras (Residências / Empresas / Condomínios)
Autoridade (institucional)
Marcas (Intelbras, Hikvision, Control iD, PPA, JFL)
Depoimentos (estático, pronto p/ Google futuramente)
SolucoesComplementares (accordion atual condensado)
FAQ (accordion com 5 perguntas)
CTAFinal (WhatsApp)
BlogPreview (mantido)
```

### Seções novas / alteradas

- **HeroCFTV**: substitui o `HeroCarousel` atual na Home. H1 = *Instalação de Câmeras de Segurança em Manaus com Qualidade e Garantia*. Subtítulo do briefing. Dois CTAs: "Solicitar Orçamento" (WhatsApp) + "Conhecer Nossos Projetos" (âncora `#pacotes`). Reaproveita imagens hero atuais como background com o mesmo tratamento visual (gradiente escuro).
- **BeneficiosCFTV**: 6 cards com ícones Lucide (ShieldCheck, Award, Smartphone, BadgeCheck, Zap, Wrench). Tamanhos iguais.
- **PacotesCameras**: 3 cards (Residencial / Empresarial / Condomínio) com bullets do que inclui e CTA WhatsApp por card. Altura padronizada.
- **Autoridade**: bloco 2 colunas — imagem (reuso de foto existente) + texto sobre experiência, cabeamento organizado, suporte, garantia.
- **Marcas**: strip com nomes em texto estilizado (sem logos oficiais p/ evitar parceria). Disclaimer sutil "tecnologias que utilizamos".
- **Depoimentos**: 3 cards estáticos com nome, bairro (Manaus), estrela, texto curto. Estrutura pronta pra plugar reviews reais depois.
- **SolucoesComplementares**: mantém `SolutionsAccordion` atual, mas rebatiza a seção como "Soluções complementares" e reduz destaque visual (títulos menores) para reforçar CFTV como principal.
- **FAQ**: `Accordion` shadcn com as 5 perguntas do briefing. Respostas curtas otimizadas para SEO local (Manaus, prazos, garantia, acesso via app, funcionamento offline).
- **CTAFinal**: banner gradiente com botão WhatsApp grande.

## 3. Ajustes de conteúdo em outras páginas

- **Solucoes.tsx**: adicionar `<h1>` claro já existe. Reordenar `solutions` para CFTV vir primeiro. Nenhuma outra alteração.
- **Navbar / Footer**: manter. Sem mudanças de rota.

## 4. Acessibilidade & performance

- `alt` descritivos em todas as imagens novas (ex.: *Câmera de segurança IP instalada em fachada residencial em Manaus*).
- Hierarquia: 1x H1 (hero), H2 por seção, H3 nos cards.
- Botões com `aria-label` quando só ícone.
- Reaproveitar imagens já otimizadas; nenhum asset novo pesado.
- Links WhatsApp com `rel="noopener"` e `target="_blank"`.

## 5. Arquivos afetados

- `index.html` — título, descrição, OG, JSON-LD.
- `src/pages/Home.tsx` — reescrever ordem e conteúdo.
- `src/components/home/HeroCFTV.tsx` — novo.
- `src/components/home/BeneficiosCFTV.tsx` — novo.
- `src/components/home/PacotesCameras.tsx` — novo.
- `src/components/home/Autoridade.tsx` — novo.
- `src/components/home/Marcas.tsx` — novo.
- `src/components/home/Depoimentos.tsx` — novo.
- `src/components/home/FAQ.tsx` — novo.
- `src/data/solutions.ts` — reordenar (CFTV primeiro).

## 6. Fora do escopo

- Integração real com Google Reviews (estrutura pronta, plugar depois).
- Logos oficiais das marcas (usar apenas texto para não sugerir parceria).
- Mudanças na identidade visual (cores, fontes, componentes shadcn permanecem).

Aprovar para eu implementar tudo em uma única passada.
