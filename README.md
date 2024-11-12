
# formsAPI

O projeto formsAPI foi criado para superar as limitações da plataforma de formulários usada no ambiente de trabalho. Ele fornece um sistema flexível para o registro de aulas de professores e sessões de estudo de alunos nos laboratórios da instituição. Durante o desenvolvimento, a arquitetura do projeto foi orientada por princípios SOLID e práticas de orientação a objetos para maximizar a organização e eficiência do código.

No entanto, uma lição aprendida foi a necessidade de equilibrar a modularização. A divisão excessiva de classes resultou em classes com muitas funções de métodos, uma abordagem que será melhorada em projetos futuros. Abaixo, estão as principais bibliotecas utilizadas e detalhes sobre a estrutura do projeto.


# Tecnologias utilizadas

- TypeScript: para tipagem e maior segurança do código.
```
     npm add typescript -D
     npm add express npm install @types/express
     npm tsc
     npx tsc --init
```

- Express: para gerenciar rotas e controlar requisições

```
  npm add express
  npm install @types/express
```

- Sequelize e Sequelize-Typescript: como ORM para conexão com o banco de dados MySQL e manipulação de dados.

```
npm install sequelize sequelize-typescript mysql2 dotenv

```
- JWT (JSON Web Token): para autenticação e autorização de usuários.
- Bcrypt: para hashing de senhas e segurança dos dados de login.

# Estrutura do projeto
A estrutura de pastas do projeto foi projetada para manter uma organização clara e facilitar a manutenção e escalabilidade. Algumas das principais pastas e arquivos incluem:

- /controllers: Define a lógica de controle para cada rota, processando requisições e preparando dados para respostas.
- /models: Contém as definições de modelos do Sequelize para interação com o banco de dados.
- /routes: Configura as rotas da API, ligando endpoints aos respectivos controladores.

# Principais Funcionalidades
- Registro de aulas e sessões: APIS para registrar as aulas dos professores e sessões de estudo dos alunos nos laboratórios
- Autenticação com JWT: Sistema de autenticação segura usando token JWT, garantindo que apenas usuários autorizados possam acessas certas rotas
- Criptograia de senhas com Bcrypt: Todas as senhas são armazenadas de forma segura no banco de dados utilizando hashing

# Lições Aprendidas
Ao longo do desenvolvimento, foi necessário equilibrar a modularização do código. A divisão excessiva resultou em classes com muitas funções de métodos, o que comprometeu um pouco a organização. Em projetos futuros, será importante alcançar uma melhor harmonia entre a modularidade e a simplicidade.