# Padrões de código

Estas regras são compartilhadas por humanos, Codex e Claude Code.

- Manter TypeScript em modo strict; não desabilitar verificações para contornar erros.
- Evitar `any`. Para valores desconhecidos, usar `unknown` e refinar o tipo antes do uso.
- Validar inputs externos nas fronteiras da aplicação: formulários, requisições, variáveis de ambiente, arquivos e respostas de integrações. Tipos TypeScript não substituem validação em runtime.
- Manter regras de negócio em funções ou casos de uso separados dos componentes React.
- Dar a cada componente uma responsabilidade clara e contratos de props explícitos.
- Preferir funções pequenas e testáveis, com efeitos colaterais isolados.
- Desacoplar integrações externas por contratos e providers/adapters, conforme a [arquitetura planejada](architecture.md).
- Não deixar código de infraestrutura, SDKs ou detalhes de persistência contaminarem a lógica de domínio.
- Não adicionar dependência sem justificar a necessidade, considerar alternativas existentes e registrar a justificativa na tarefa ou PR.
- Usar comentários para explicar decisões, motivos e restrições; não narrar código óbvio.
- Escrever código e identificadores preferencialmente em inglês. Textos de interface podem ser em português.
- Seguir a formatação do Prettier e as regras do ESLint existentes.
- Revisar os arquivos existentes antes de alterar a arquitetura e manter as regras técnicas em `docs/`, evitando cópias divergentes em arquivos de agentes.

Toda entrega deve seguir a [validação obrigatória](testing.md), o [fluxo Git](git-workflow.md) e as [regras de segurança](security.md).
