# Arquitetura planejada

Esta é a fonte compartilhada de orientação arquitetural para humanos, Codex e Claude Code no MCMV RJ Platform Showcase. A arquitetura abaixo é planejada, não uma descrição de funcionalidades já implementadas. Hoje o repositório contém a fundação Next.js com App Router, TypeScript strict e um teste smoke; PostgreSQL e providers ainda não estão implementados.

## Stack e limites

- **Next.js**: interface React e pontos de entrada da aplicação.
- **TypeScript**: contratos explícitos e verificação em modo strict.
- **PostgreSQL**: persistência planejada, com instância local e dados fictícios no desenvolvimento.
- **Provider pattern**: contratos para integrações, com implementações intercambiáveis.

A interface chama casos de uso; os casos de uso concentram regras de negócio e dependem de contratos. Providers/adapters implementam esses contratos e isolam detalhes de infraestrutura, SDKs e serviços externos. A lógica de domínio não deve depender de componentes React, credenciais ou bibliotecas de integração.

## Providers planejados

| Capacidade | Implementação local | Implementação externa opcional |
| ---------- | ------------------- | ------------------------------ |
| Email      | Console             | Resend                         |
| Messaging  | Console             | WhatsApp adapter               |
| Storage    | Local               | S3                             |
| Automation | Console             | n8n                            |

Providers Console simulam operações e registram apenas dados fictícios. Storage Local usa armazenamento local. A seleção das implementações deve ocorrer na composição/configuração da aplicação, sem espalhar decisões de infraestrutura pela lógica de domínio.

Serviços externos são opcionais. A aplicação deve funcionar localmente sem Resend, WhatsApp, S3 ou n8n e sem credenciais desses serviços. Quando a persistência for implementada, deve usar PostgreSQL local, nunca o banco de produção. Integrações externas não devem ser requisito para iniciar a aplicação, executar testes ou gerar o build.

## Evolução

Antes de qualquer alteração arquitetural, revisar os arquivos existentes, os scripts e esta documentação. Implementar apenas o necessário para a tarefa, justificar novas dependências e atualizar a documentação compartilhada quando uma decisão mudar. Não copiar arquitetura, configurações ou conteúdo da aplicação privada.

Consulte também [padrões de código](coding-standards.md), [segurança](security.md) e [testes](testing.md).
