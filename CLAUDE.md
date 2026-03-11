# badaro-content-system

Sistema de conteúdo da Badaró — regras verbais, identidade, mensagem, tom e governança editorial.

## Como usar este sistema

Antes de criar qualquer conteúdo para a Badaró, consulte:

1. `1-foundations.md` — princípios que orientam toda criação
2. `2-verbal-identity.md` — propósito, posicionamento, personalidade e anti-voz
3. `3-messaging-framework.md` — mensagem central, pilares e narrativas
4. `4-voice-and-tone.md` — tom por contexto, exemplos antes/depois
5. `5-editorial-style-guide.md` — regras editoriais, glossário, padrões de escrita
6. `6-content-patterns.md` — estruturas reutilizáveis por formato
7. `7-content-governance.md` — fluxo de criação, revisão e aprovação

## Estrutura do Projeto

```
badaro-content-system/
├── CLAUDE.md                    # Este arquivo
├── memory.md                    # Memória persistente do projeto
├── 1-foundations.md             # Princípios de conteúdo e experiência
├── 2-verbal-identity.md         # Identidade verbal da marca
├── 3-messaging-framework.md     # Mensagens, pilares e narrativas
├── 4-voice-and-tone.md          # Voz, tom e exemplos
├── 5-editorial-style-guide.md   # Guia editorial técnico
├── 6-content-patterns.md        # Padrões e estruturas de conteúdo
├── 7-content-governance.md      # Governança e fluxo editorial
└── skills/
    ├── tone-checker.md          # Verificação de tom
    └── learn.md                 # Registro de aprendizados
```

## Instruções para o Claude

- Sempre consultar `2-verbal-identity.md` para verificar a anti-voz antes de entregar qualquer texto
- Usar os padrões de `6-content-patterns.md` como ponto de partida para qualquer formato
- Registrar aprendizados relevantes em `skills/learn.md`
- Atualizar `memory.md` com decisões de projeto e contexto acumulado

## Skill automática — Tom

**Toda vez que um conteúdo for criado ou revisado, execute `skills/auto-tone-examples.md` automaticamente.**

Isso inclui: posts, artigos, headlines, copies de site, propostas, newsletters ou qualquer outro texto produzido para a Badaró.

Não é necessário que o usuário solicite — a análise de tom é parte obrigatória de qualquer entrega.
