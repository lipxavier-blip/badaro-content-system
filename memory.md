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
- Páginas ainda não analisadas: Método, Cases/Projetos, Trabalhe Conosco (e páginas internas de cada serviço)

### Março 2026 — Setup inicial
- Content System criado com 7 módulos a partir do Manual de Marca Simplificado e da apresentação de posicionamento da Badaró
- Interface web em `index.html` com identidade visual aplicada (Figtree, Neo Pink #FF1596, Magenta #5F0033, Black #000000)
- Skill `auto-tone-examples` ativa — roda automaticamente a cada conteúdo criado
- Skill `monthly-review` criada — roda mensalmente a pedido do usuário
- Frequência de atualização: mensal
- O que mais evolui: padrões de conteúdo (`6-content-patterns.md`)
- Único responsável pela alimentação: Felipe Xavier
