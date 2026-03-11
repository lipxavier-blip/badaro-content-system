# Skill: Monthly Review

## Quando executar
Uma vez por mês, quando o usuário pedir "rodar a revisão mensal" ou similar.

## O que fazer

Execute os passos abaixo em ordem. Ao final, apresente um resumo para aprovação antes de salvar qualquer alteração.

---

### Passo 1 — Revisar padrões de conteúdo (`6-content-patterns.md`)

Pergunte ao usuário:
- Algum formato novo foi usado no último mês que ainda não está documentado?
- Algum padrão existente foi adaptado na prática? Como ficou?
- Algum formato deixou de funcionar bem?

Com base nas respostas, proponha:
- Novos padrões a adicionar
- Ajustes em padrões existentes
- Padrões a remover ou arquivar

---

### Passo 2 — Revisar exemplos de tom (`4-voice-and-tone.md`)

Pergunte ao usuário:
- Algum texto criado no último mês ficou particularmente bom — com a voz certa?
- Algum texto precisou de muita correção de tom? Qual era o problema?

Com base nas respostas, proponha:
- Novos exemplos antes/depois para adicionar
- Canais ou contextos ainda sem exemplo que deveriam ter

---

### Passo 3 — Revisar glossário e anti-voz (`5-editorial-style-guide.md`)

Pergunte ao usuário:
- Alguma palavra ou expressão apareceu com frequência e estava errada?
- Algum termo novo passou a ser usado pela Badaró que precisa ser registrado?

Com base nas respostas, proponha:
- Novos itens no glossário
- Novas entradas na lista de buzzwords a evitar

---

### Passo 4 — Verificar se o posicionamento evoluiu (`2-verbal-identity.md`)

Pergunte ao usuário:
- Houve alguma mudança de direção na marca, no discurso ou nos serviços?
- Alguma narrativa do messaging framework foi reformulada internamente?

Se sim, proponha as atualizações necessárias.

---

### Passo 5 — Atualizar `memory.md`

Registre:
- Data da revisão
- O que foi atualizado e por quê
- Decisões tomadas que orientam revisões futuras

---

### Passo 6 — Resumo para aprovação

Antes de salvar qualquer alteração, apresente ao usuário:

```
REVISÃO MENSAL — [mês/ano]

O que vai mudar:
- [arquivo]: [descrição da mudança]
- [arquivo]: [descrição da mudança]

O que não mudou e por quê:
- [item]: [razão]

Aprovar e salvar? (sim / ajustar antes)
```

Só salve e commite após aprovação explícita.

---

## Commit padrão após revisão

```
Monthly review — [mês ano]

- [resumo das mudanças em bullets]

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```
