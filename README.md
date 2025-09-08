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
    git clone [https://github.com/vicenteaugusto9/cadastro-escolar.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd cadastro-escolar
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

## Endpoints da API

A seguir, a documentação de todos os endpoints disponíveis.

**Observação:** As requisições de `POST` e `PUT` esperam dados no formato `x-www-form-urlencoded`.

---
### Alunos

| Método HTTP | Endpoint          | Descrição                   | Corpo da Requisição (Exemplo)               |
| :---------- | :---------------- | :-------------------------- | :------------------------------------------ |
| `GET`       | `/api/alunos`     | Lista todos os alunos.      | (Vazio)                                     |
| `POST`      | `/api/alunos`     | Cadastra um novo aluno.     | `nome`, `email`, `idade`                    |
| `PUT`       | `/api/alunos/:id` | Atualiza nome e e-mail.     | `nome`, `email`                             |
| `DELETE`    | `/api/alunos/:id` | Exclui um aluno pelo ID.    | (Vazio)                                     |

---
### Professores

| Método HTTP | Endpoint             | Descrição                      | Corpo da Requisição (Exemplo)                  |
| :---------- | :------------------- | :----------------------------- | :--------------------------------------------- |
| `GET`       | `/api/professores`   | Lista todos os professores.    | (Vazio)                                        |
| `POST`      | `/api/professores`   | Cadastra um novo professor.    | `nome`, `email`, `idade`                       |
| `PUT`       | `/api/professores/:id` | Atualiza nome e e-mail.        | `nome`, `email`                                |
| `DELETE`    | `/api/professores/:id` | Exclui um professor pelo ID.   | (Vazio)                                        |

---

## 👨‍💻 Autor
**[Vicente Augusto]** 👋

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vicenteaugusto/)
