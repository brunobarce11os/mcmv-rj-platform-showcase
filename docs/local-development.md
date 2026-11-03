# Desenvolvimento local

O ambiente local usa Next.js e PostgreSQL em Docker, sem exigir contratação de
serviços externos. A persistência usa Prisma e um schema público reduzido; a interface ainda não consulta o banco. As variáveis de provedores reservam a configuração futura; os provedores ainda não estão implementados.

## 1. Requisitos

- Node.js 22 LTS (22.13 ou superior) e npm.
- Docker com Docker Compose v2 (por exemplo, Docker Desktop com containers Linux).
- Docker em execução e portas locais 3000 e 5432 disponíveis.

Execute os comandos a partir da raiz do repositório.

## 2. Instalar dependências

```sh
npm install
```

## 3. Configurar o ambiente

Copie `.env.example` para `.env`. No Linux ou macOS:

```sh
cp .env.example .env
```

No PowerShell:

```powershell
Copy-Item .env.example .env
```

O arquivo `.env` é ignorado pelo Git. As credenciais públicas do PostgreSQL são
exclusivas deste ambiente de desenvolvimento: banco `mcmv_showcase`, usuário
`showcase` e senha `showcase`.

A `DATABASE_URL` usa a conexão local `postgresql://showcase:showcase@localhost:5432/mcmv_showcase`, consumida pelo Prisma.

`JWT_SECRET` é um valor de exemplo para desenvolvimento. `NEXT_PUBLIC_APP_URL`
aponta para `http://localhost:3000`. Os provedores planejados usam `console`
(email, mensagens e automação) e `local` (armazenamento).

## 4. Iniciar PostgreSQL

```sh
docker compose up -d
docker compose ps
```

Aguarde o serviço `postgres` indicar `healthy`. O banco fica disponível em
`localhost:5432`. Na primeira execução, o Docker precisa baixar a imagem
`postgres:16-alpine`. Os dados ficam no volume persistente `postgres_data`.

Após o banco ficar saudável, execute:

```sh
npm run db:generate
npm run db:migrate
npm run db:seed
```

Veja [Banco de dados local](database.md) para seed, reset e Prisma Studio.

## 5. Iniciar a aplicação

```sh
npm run dev
```

Acesse <http://localhost:3000>. Mantenha esse terminal aberto enquanto usa a
aplicação.

## 6. Parar os serviços

No terminal da aplicação, pressione `Ctrl+C`. Em seguida:

```sh
docker compose down
```

Esse comando remove os containers e a rede do Compose, preservando o volume e
os dados do PostgreSQL para a próxima execução.
