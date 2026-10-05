# MCMV RJ Platform Showcase

Fundação técnica pública, sanitizada e demonstrativa de uma aplicação Next.js.
Esta etapa não contém funcionalidades do produto privado, Prisma ou integrações externas.

## Desenvolvimento

Use Node.js 22 LTS (22.13 ou superior) e npm.

```sh
npm ci
npm run dev
```

Acesse http://localhost:3000.

## Comandos

- `npm run build`: gera o build de produção.
- `npm run start`: inicia o build de produção.
- `npm run lint`: executa o ESLint.
- `npm run typecheck`: executa `tsc --noEmit` em modo strict.
- `npm run test`: executa o teste smoke do Vitest.
- `npm run test:watch`: executa o Vitest em modo watch.
- `npm run format`: formata os arquivos com Prettier.
- `npm run format:check`: verifica a formatação.

O App Router usa `app/` na raiz. O alias `@/*` aponta para a raiz do projeto.
Tailwind CSS 4 usa o plugin PostCSS. O teste smoke usa o ambiente Node.
