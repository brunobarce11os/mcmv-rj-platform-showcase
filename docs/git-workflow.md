# Fluxo Git

O fluxo de promoção de alterações é:

```text
main
↑
develop
↑
feature/*
```

- Nunca desenvolver diretamente em `main`.
- Nunca desenvolver diretamente em `develop`.
- Todo desenvolvimento começa em uma branch `feature/*`, criada a partir de `develop`.
- Uma branch `feature/*` abre PR para `develop`.
- `develop` abre PR para `main`.
- Antes de qualquer commit, revisar `git diff`, incluindo o conteúdo dos novos arquivos, e conferir se a alteração contém apenas o escopo autorizado e dados fictícios.
- Commits são responsabilidade exclusiva do proprietário, após revisão manual.
- Nenhum agente de IA pode realizar commit, executar push ou realizar merge, independentemente da ferramenta utilizada.
- Agentes de IA também não devem executar `git add`, rebase ou tag. Podem inspecionar status e diffs, editar arquivos e executar validações.

Antes de considerar uma tarefa concluída, executar todos os comandos da [validação obrigatória](testing.md). Falhas devem ser corrigidas ou reportadas como pendências; uma validação incompleta não equivale a uma tarefa concluída.

O fluxo de contribuição completo está em [CONTRIBUTING.md](../CONTRIBUTING.md). A revisão manual e o CI precedem o merge realizado pelo responsável humano.
