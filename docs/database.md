# Banco de dados local

A persistência usa PostgreSQL 16 via Docker e Prisma 6, mantendo a conexão
`env("DATABASE_URL")` no schema. Apenas `prisma` (CLI de desenvolvimento) e
`@prisma/client` (cliente) foram adicionados. O seed TypeScript usa a remoção
nativa de tipos do Node.js 22.13+, sem executor adicional.

Copie `.env.example` para `.env` e preserve a conexão pública de desenvolvimento:

```dotenv
DATABASE_URL="postgresql://showcase:showcase@localhost:5432/mcmv_showcase"
```

Na raiz do projeto:

```sh
docker compose up -d
docker compose ps
npm run db:generate
npm run db:migrate -- --name init
npm run db:seed
npm run db:studio
```

Aguarde `postgres` ficar `healthy` antes da migration. A migration inicial foi
gerada pelo Prisma a partir do schema público deste repositório. Em checkouts
seguintes, `npm run db:migrate` aplica as migrations existentes; informe um nome
apenas ao criar uma nova alteração. Prisma 6 também pode executar o seed após
criar o banco com migrate dev e após reset.

O seed usa IDs estáveis com prefixo `demo-` e upserts em uma transação: reexecutar
restaura os valores dos registros demonstrativos sem duplicá-los nem apagar
outros registros. A configuração `demo.notice` é identificada por chave única.
O seed recusa URLs fora do banco local `mcmv_showcase`, porta 5432. Todas as
operações de banco devem usar exclusivamente este ambiente local.

São 83 registros: 4 usuários, 3 construtoras, 8 imóveis, 8 imagens locais,
8 tipologias, 15 leads, 15 interesses, 4 notas, 4 simulações, 4 agendamentos,
3 filas, 6 participantes e 1 configuração. DistributionLog fica vazio: não há
algoritmo de distribuição. Simulações contêm somente valores fixos fictícios,
sem cálculo financeiro. Os agendamentos têm datas fixas em janeiro de 2030.

Para apagar **todos os dados do banco local** e reaplicar migrations e seed:

```sh
npm run db:reset
```

O Prisma pede confirmação para esse reset destrutivo. Não use o comando em
outro banco. `docker compose down` preserva o volume `postgres_data`.

Prisma Studio permite consultar os registros localmente. Todos os dados são
fictícios, com emails `example.com`, telefones de DDD inválido `00` e imagens
ilustrativas locais. Não há CPF, autenticação ou integrações externas.
Nenhuma migration, dado, credencial ou regra financeira do produto privado é
utilizada. A interface permanece independente do banco nesta etapa.
