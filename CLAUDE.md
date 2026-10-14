# MCMV RJ Platform Showcase

Showcase público, sanitizado e demonstrativo. Claude Code segue a mesma fonte de regras de humanos e Codex:

- [Arquitetura planejada](docs/architecture.md)
- [Padrões de código](docs/coding-standards.md)
- [Fluxo Git](docs/git-workflow.md)
- [Segurança](docs/security.md)
- [Testes e validação](docs/testing.md)

Leia os documentos relevantes e revise os arquivos existentes antes de alterações arquiteturais. Desenvolva em `feature/*`.

Antes de concluir, execute: `npm run format`, `npm run lint`, `npm run typecheck`, `npm run test` e `npm run build`.

Agentes de IA não podem realizar commit, push ou merge, nem executar `git add`, rebase ou tag. Commits são exclusivos do proprietário, após revisão de `git diff`.
