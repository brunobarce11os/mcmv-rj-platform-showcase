# Segurança do showcase

O MCMV RJ Platform Showcase é público, sanitizado e demonstrativo. Todos os dados do showcase devem ser fictícios, incluindo fixtures, seeds, exemplos, testes, logs e capturas de tela. Não usar dados reais de clientes, mesmo parcialmente mascarados.

## Nunca

- Copiar `.env` do produto privado.
- Inserir secrets no Git.
- Usar banco de produção.
- Usar webhooks de produção.
- Inserir dados de clientes.
- Inserir CPF, telefone ou email real de clientes.
- Inserir credenciais da aplicação real.
- Copiar tokens ou API keys.
- Copiar URLs administrativas privadas.

Configurações locais devem ser independentes da aplicação privada. Exemplos de configuração devem conter apenas placeholders sem valor de autenticação. Não incluir secrets em código, documentação, testes, logs ou diffs compartilhados. Serviços externos são opcionais e devem seguir os limites descritos na [arquitetura planejada](architecture.md).

Validar inputs externos antes do uso e manter credenciais opcionais de integração no lado servidor, fora do Git e da interface pública. Revisar alterações e arquivos novos antes de qualquer commit manual.

## Relato de problemas

Ao encontrar possível exposição ou vulnerabilidade, interromper o uso do material afetado e comunicar o proprietário por um canal privado acordado. Não publicar credenciais, dados pessoais ou detalhes sensíveis em issues e PRs públicos. Se uma credencial tiver sido exposta, o proprietário deve revogá-la ou rotacioná-la e avaliar a remoção do material e do histórico; apagar apenas o arquivo não invalida a credencial.

Consulte a política pública em [SECURITY.md](../SECURITY.md).
