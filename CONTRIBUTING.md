# Como contribuir

As regras de engenharia compartilhadas ficam em `docs/`: [arquitetura](docs/architecture.md), [padrões de código](docs/coding-standards.md), [fluxo Git](docs/git-workflow.md), [segurança](docs/security.md) e [testes](docs/testing.md). Leia os documentos relevantes e revise a implementação existente antes de alterar a arquitetura.

## Fluxo de contribuição

```text
issue/tarefa
→ feature branch
→ implementação
→ testes
→ revisão manual
→ commit manual
→ PR
→ CI
→ merge
```

1. Defina o objetivo e os critérios de aceitação em uma issue ou tarefa, usando apenas informações públicas e dados fictícios.
2. Comece em uma branch `feature/*` a partir de `develop`. Nunca desenvolva diretamente em `develop` ou `main`.
3. Implemente a alteração seguindo as regras de `docs/` e atualize a documentação quando necessário.
4. Execute toda a [validação obrigatória](docs/testing.md): `npm run format`, `npm run lint`, `npm run typecheck`, `npm run test` e `npm run build`.
5. Faça a revisão manual do comportamento, dos arquivos novos e de `git diff`, verificando escopo, segurança e ausência de informações privadas.
6. O proprietário realiza o commit manual, após revisar `git diff`. Nenhum agente de IA pode realizar commit, push ou merge, nem executar `git add`, rebase ou tag.
7. O responsável humano publica a branch e abre PR de `feature/*` para `develop`, descrevendo a mudança, a justificativa e os resultados da validação.
8. Aguarde o CI e a revisão; corrija falhas antes do merge.
9. O responsável humano realiza o merge após aprovação e CI bem-sucedido. Para promover a versão, abra PR de `develop` para `main`, com revisão e CI antes do merge.

Não copie configurações, credenciais, dados ou documentos da aplicação privada. Consulte também [SECURITY.md](SECURITY.md).
