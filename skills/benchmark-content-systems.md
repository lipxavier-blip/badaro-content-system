# Skill: Benchmark de Content Systems

Analisa content systems de referência do mercado e identifica melhores práticas aplicáveis ao sistema da Badaró.

## Quando executar

Quando o usuário pedir "rodar benchmark", "analisar sistemas de conteúdo", "benchmark de content systems" ou similar.

Recomendado: uma vez por semestre, ou antes de expansões relevantes do sistema.

---

## Sistemas de referência

Pesquisar e analisar os seguintes sistemas, acessando a documentação pública mais recente:

| Sistema | Organização | Por que é referência |
|---|---|---|
| Voice & Tone | Mailchimp | Pioneiro no conceito de tom por contexto emocional |
| Content Design | GOV.UK | Referência em clareza, acessibilidade e linguagem funcional |
| Writing Style Guide | Microsoft | Abrangente em regras editoriais e terminologia técnica |
| Design Language | Atlassian | Forte em integração entre UX writing e identidade verbal |
| Content Guidelines | Spotify | Referência em voz de marca consistente em múltiplos canais |
| Writing Guidelines | Apple HIG | Precisão e economia de linguagem em contextos digitais |
| Content Design | Intercom | Forte em UX writing, onboarding e microcopy |
| Writing Principles | Duolingo | Referência em personalidade de marca e tom conversacional |

Pesquisar também qualquer sistema relevante que tenha surgido nos últimos 12 meses.

---

## Critérios de análise

Para cada sistema consultado, avaliar os seguintes critérios:

### 1. Estrutura e organização
- Como o sistema está organizado (por módulos, por canal, por tipo de conteúdo)?
- Há uma hierarquia clara entre princípios, regras e exemplos?
- Como o sistema lida com a relação entre identidade de marca e guia editorial?

### 2. Documentação de voz e tom
- Como definem a voz da marca (atributos, arquétipos, metáforas)?
- Como documentam a variação de tom por contexto?
- Há exemplos antes/depois? Como estão estruturados?
- Como lidam com anti-voz (o que nunca fazer)?

### 3. Regras editoriais
- Quais categorias de regras cobrem (pontuação, capitalização, números, siglas)?
- Como tratam buzzwords e jargão?
- Há seção de acessibilidade e linguagem inclusiva?
- Como tratam internacionalização ou adaptação cultural?

### 4. Padrões de conteúdo
- Há estruturas reutilizáveis por formato (headlines, CTAs, mensagens de erro)?
- Como documentam padrões para diferentes canais?
- Há orientações sobre comprimento e densidade de texto?

### 5. Governança
- Quem é responsável pelo sistema?
- Como é o processo de atualização?
- Há versionamento ou histórico de mudanças?
- Como comunicam mudanças para o time?

### 6. Usabilidade do sistema
- O sistema é fácil de consultar no momento de criação?
- Há recursos interativos (buscas, filtros, exemplos ao vivo)?
- Existe integração com ferramentas de criação (Figma, Notion, etc.)?

---

## Comparação com o sistema da Badaró

Após pesquisar os sistemas de referência, comparar cada critério com o que o sistema da Badaró já tem.

Usar a seguinte escala para cada critério:

- **Completo** — o sistema da Badaró cobre bem esse aspecto
- **Parcial** — há algo, mas pode ser expandido ou melhorado
- **Ausente** — não existe no sistema atual

Registrar os gaps encontrados com exemplos concretos do que está faltando.

---

## Output esperado

Ao final da análise, apresentar ao usuário:

### 1. Resumo executivo
Três a cinco insights principais — o que os sistemas de referência fazem que a Badaró ainda não faz.

### 2. Tabela de gaps
Por critério, o que está completo, parcial ou ausente no sistema atual.

### 3. Recomendações priorizadas

Organizar por impacto e esforço:

**Alta prioridade (impacto alto, esforço baixo)**
- O que pode ser adicionado rapidamente com alto retorno

**Média prioridade (impacto alto, esforço médio)**
- O que vale o investimento mas exige mais trabalho

**Baixa prioridade (nice to have)**
- O que é interessante mas não urgente para o estágio atual da Badaró

### 4. Proposta de próximos passos
Para cada recomendação de alta prioridade: qual módulo atualizar, o que adicionar, e como ficaria na prática.

---

## Regras de execução

- Apresentar o resumo executivo e as recomendações para aprovação **antes** de propor qualquer alteração nos módulos
- Não alterar nenhum arquivo do sistema sem aprovação explícita do usuário
- Registrar em `memory.md` a data do benchmark, os sistemas consultados e os principais achados
- Se algum sistema de referência não estiver acessível no momento da execução, documentar e seguir com os disponíveis

---

## Commit padrão após aplicação das recomendações

```
Benchmark de content systems — [mês ano]

Sistemas analisados: [lista]
Melhorias aplicadas:
- [módulo]: [descrição da mudança]

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```
