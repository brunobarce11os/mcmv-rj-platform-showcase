# Testes e validação

## Validação obrigatória

Antes de considerar qualquer tarefa concluída, executar, na raiz do repositório, nesta ordem:

```sh
npm run format
npm run lint
npm run typecheck
npm run test
npm run build
```

Todos os comandos devem terminar com sucesso. `format` altera arquivos; revisar o diff resultante. Se houver falha, corrigir a causa e repetir as verificações afetadas. Reportar qualquer impedimento e não declarar a tarefa concluída enquanto houver validação pendente. Registrar os resultados na entrega ou PR. O CI deve validar a alteração antes do merge; a execução local continua obrigatória.

## Estratégia de testes

O repositório usa Vitest e atualmente possui um teste smoke em ambiente Node. Novas regras de negócio devem ter testes de comportamento, incluindo casos relevantes de sucesso, erro e validação de inputs. Priorizar funções e casos de uso testáveis, separados da interface.

Substituir integrações por providers locais ou doubles nos testes. Testes não devem depender de serviços externos, banco de produção, webhooks de produção ou credenciais privadas. Quando forem necessários testes de persistência, usar ambiente local isolado e dados fictícios.

Mudanças visuais também exigem revisão manual da interface. Alterações de documentação exigem revisão de conteúdo, links e consistência entre os documentos, além dos cinco comandos obrigatórios.

A revisão final deve seguir o [fluxo Git](git-workflow.md) e as [regras de segurança](security.md).
