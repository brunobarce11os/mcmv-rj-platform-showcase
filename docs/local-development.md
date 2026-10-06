# Desenvolvimento local

O ambiente local usa Next.js e PostgreSQL em Docker, sem exigir contratação de
serviços externos. Ainda não há Prisma, modelos de banco ou integração da aplicação
com o PostgreSQL. As variáveis de provedores reservam a configuração futura;
os provedores ainda não estão implementados.

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

A `DATABASE_URL` do exemplo foi reservada conforme a configuração planejada e
não é consumida nesta etapa. Ela não inclui a senha; quando houver integração
com o banco, a conexão autenticada deverá usar
`postgresql://showcase:showcase@localhost:5432/mcmv_showcase`.

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
