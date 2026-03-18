# Memory — badaro-content-system

Contexto acumulado do projeto ao longo do tempo.

## Decisões de Projeto

- "Engenharia" substituído por "tecnologia" em todas as ocorrências — alinhamento ao glossário da marca
- Título da seção de big numbers na página Sobre: opções sugeridas ("Em números", "Experiência que se mede", "O que 12 anos constroem") — a confirmar com Felipe
- Números da seção big numbers (Sobre) são fictícios — substituir pelos valores reais antes de publicar

## Padrões Identificados

- **Template replicado:** subheadline "Experiência, design e engenharia para o futuro dos produtos e serviços" estava sendo usado nas páginas Sobre, Clientes e Serviços — corrigido nas três, verificar se há outras ocorrências
- **Estrutura de negação:** padrão "X não é Y, é Z" identificado como marcador de linguagem de IA — evitar em todo conteúdo
- **"Futuro":** palavra recorrente no conteúdo original, sistematicamente substituída por ser clichê no setor de inovação
- **Voz passiva:** recorrente nos textos originais ("é conduzido", "é estruturado") — corrigir para voz ativa
- **"Ajudar/ajudamos":** verbo que ativa humildade excessiva (anti-voz) — substituir por "orientar", "estruturar", "conectar"

## Histórico de Contexto

### Março 2026 — Análise de conteúdo do site
- Páginas analisadas e documentadas: Home, Tipos de Serviços, Sobre, Clientes, Serviços, Contato (parcial)
- Arquivos em `content/`: home.md, tipos-de-servicos.md, sobre.md, clientes.md, servicos.md, contato.md
- Contato: Hero, Seção de Especialistas e Seção de Formulário revisados. Campos do formulário pendentes (aguardando definição do time comercial)
- Trabalhe Conosco: página completa revisada — Hero, Apresentação, Depoimentos, Diversidade, Nosso Propósito, Trabalhar Aqui, Pilares, Perfis, O que você encontra aqui, Encerramento
- Páginas internas de serviço revisadas: CX, UX, TX, BX, EX — arquivos em content/cx.md, ux.md, tx.md, bx.md, ex.md
- AI Experience: conteúdo pendente (não estava pronto no momento da revisão)
- Páginas ainda não analisadas: Método, Cases/Projetos

### Março 2026 — Apresentação Institucional
- Apresentação revisada com base no Content System — arquivo: `content/apresentacao-institucional.md`
- Referência original: `Apresentação Institucional Badaró 2026_SemCases.pptx.pdf` (22 slides)
- Principais correções: "futuro" banido, "engenharia" → "tecnologia", superlativos removidos, erro de frase no slide 12 (CX) corrigido, encerramento revisado
- Slides de labels de serviço (11, 13, 15, 17, 19, 21) e de logos (5) mantidos sem alteração

### Março 2026 — Tese do Posicionamento + Apresentação para CEO
- Tese do posicionamento criada: `content/tese-posicionamento.md` — ~900 palavras, prosa argumentativa, 6 seções
- Apresentação para CEO e lideranças criada: `content/apresentacao-posicionamento-ceo.md` — 15 slides, objetivo: aprovação do posicionamento
- Âncora central da comunicação: "Emoção não é intuição. É dado."
- ⚠️ Números (200+ projetos, 80+ organizações, 15+ setores) ainda precisam de validação com dados reais antes de publicar qualquer material
- Decisão: o termo "AI" em "AI Emotion-driven Experience" posiciona no contexto de mercado atual, não promete ferramentas específicas — explicação incluída no slide 6 da apresentação

### Março 2026 — Setup inicial
- Content System criado com 7 módulos a partir do Manual de Marca Simplificado e da apresentação de posicionamento da Badaró
- Interface web em `index.html` com identidade visual aplicada (Figtree, Neo Pink #FF1596, Magenta #5F0033, Black #000000)
- Skill `auto-tone-examples` ativa — roda automaticamente a cada conteúdo criado
- Skill `monthly-review` criada — roda mensalmente a pedido do usuário
- Frequência de atualização: mensal
- O que mais evolui: padrões de conteúdo (`6-content-patterns.md`)
- Único responsável pela alimentação: Felipe Xavier
