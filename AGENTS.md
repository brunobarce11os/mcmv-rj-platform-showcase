# MCMV RJ Platform Showcase

Showcase público, sanitizado e demonstrativo. A fonte principal de regras de engenharia para humanos e agentes está em `docs/`:

- [Arquitetura planejada](docs/architecture.md)
- [Padrões de código](docs/coding-standards.md)
- [Fluxo Git](docs/git-workflow.md)
- [Segurança](docs/security.md)
- [Testes e validação](docs/testing.md)

Leia os documentos relevantes e revise os arquivos existentes antes de alterações arquiteturais. Desenvolva em `feature/*`, conforme o fluxo compartilhado.

Antes de concluir, execute: `npm run format`, `npm run lint`, `npm run typecheck`, `npm run test` e `npm run build`.

Agentes de IA não podem realizar commit, push ou merge, nem executar `git add`, rebase ou tag. Commits são exclusivos do proprietário, que deve revisar `git diff` antes de cada commit.
