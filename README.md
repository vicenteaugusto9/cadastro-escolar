# API de Cadastro Escolar

Este é um projeto de uma API RESTful para gerenciamento de alunos e professores de uma escola. A aplicação foi desenvolvida como parte da disciplina "Oficina II", utilizando Node.js, Express, PostgreSQL e o ORM Prisma, seguindo a arquitetura MVC (Model-View-Controller).

## ✨ Funcionalidades

-   ✔️ Cadastrar, listar, atualizar e deletar **Alunos**.
-   ✔️ Cadastrar, listar, atualizar e deletar **Professores**.
-   ✔️ Validação de e-mail único para evitar registros duplicados.
-   ✔️ Tratamento de erros para IDs não encontrados.

## 🛠️ Tecnologias Utilizadas

-   **Backend:** Node.js
-   **Framework:** Express.js
-   **Banco de Dados:** PostgreSQL
-   **ORM:** Prisma
-   **Gerenciamento de Ambiente:** Dotenv
-   **Auto-reload:** Nodemon

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
-   [Node.js](https://nodejs.org/en/) (v16 ou superior)
-   [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
-   [PostgreSQL](https://www.postgresql.org/)
-   Um cliente de API como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/)

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação localmente:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**
    -   Crie uma cópia do arquivo `.env.example` e renomeie para `.env`.
    -   Abra o arquivo `.env` e configure a sua `DATABASE_URL` do PostgreSQL:
    ```env
    DATABASE_URL="postgresql://SEU_USUARIO:SUA_SENHA@localhost:5432/SEU_BANCO_DE_DADOS?schema=public"
    ```

5.  **Execute as migrações do banco de dados:**
    *Este comando irá criar as tabelas `Aluno` e `Professor` no seu banco de dados.*
    ```bash
    npx prisma migrate dev
    ```

6.  **Inicie o servidor:**
    ```bash
    npm run dev
    ```

7.  O servidor estará rodando no endereço `http://localhost:3003` (ou a porta
