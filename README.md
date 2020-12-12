<p align="center">
  <a>
    <a href="https://pretitudes-project-reprograma.herokuapp.com/"><img alt="Deploy on Heroku" src="https://img.shields.io/badge/deploy-heroku.com-blueviolet">
    <a href="https://www.mongodb.com/cloud/atlas"><img alt="Database MongoDB" src="https://img.shields.io/badge/database-mongodb.com-green">
    <a href="https://nodejs.org/pt-br/"><img alt="Node version" src="https://img.shields.io/badge/node-v12.18.3-blue">
    <img alt="GitHub Repo Size" src="https://img.shields.io/github/repo-size/priscilaestevao/pretitudes-project-reprograma">
    <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/priscilaestevao/pretitudes-project-reprograma">
    <img alt="GitHub License" src="https://img.shields.io/github/license/priscilaestevao/pretitudes-project-reprograma?logo=mit">
  </a>
</p>

<h1 align="center">
  <img src="public/images/pretitudes.png" alt="três pessoas negras segurando uma faixa com o nome Pretitudes" width="500">
<p align="center">Pretitudes - Ocupação preta na política<p>
</h1>

> Banco de dados de candidaturas negras que concorreram a eleição municipal 2020 na Região Metropolitana do Recife (PE).

> Status: **Concluído** :heavy_check_mark:

## **Sumário**

- [Apresentação](#apresentação)
- [Contextualização](#contextualização)
- [Fonte dos dados](#fonte-dos-dados)
- [Funcionalidades](#funcionalidades)
- [Tecnologias, dependências e bibliotecas](#tecnologias-dependências-e-bibliotecas)
- [Instruções para instalação e contribuições no projeto](#instruções-para-instalação-e-contribuições-no-projeto)
- [Features e rotas](#features-e-rotas)
- [Referências](#referências)

## **Apresentação**

O "Pretitudes" é o projeto de conclusão do bootcamp de Back-end da [{reprograma}](https://reprograma.com.br/), em parceria com o [projeto MINAs do Porto Digital](https://www.portodigital.org/capital-humano/iniciativas-para-a-diversidade/mulheres-em-inovacao-negocios-e-artes-minas). Essa é uma API que tem por objetivo reunir informações sobre as candidaturas negras comprometidas com a pauta antirracista na Região Metropolitana do Recife.

A ideia é que ela possa ser aproveitada por um programa de formação política e qualificação, quem sabe até de investimento, potencializando o movimento negro no próximo pleito eleitoral em 2024.

## **Contextualização**

<img src="public/images/voto-em-negra.jpeg" alt="mulher com um adesivo colado na mão escrito voto em negra" width ="250" align="right" padding="150"/>

A ausência de representação negra nos parlamentos é um problema há muito denunciado pelos movimentos negros brasileiros. Se no Brasil mais de 56% das pessoas se declaram negras, os dados de composição racial nas casas legislativas espalhadas pelo país demonstram o tamanho do abismo. Segundo dados do TSE, negros somam 24,4% dos deputados federais e 28,9% dos deputados estaduais eleitos em 2018 e, dos vereadores eleitos em 2016, somam 42,1% de pretos e pardos. (Fonte: Votos Antirarcistas, 2020)

## **Fonte dos dados**

Essa aplicação é desenvolvida em parceria com o [#VotosAntirracistas](https://votosantirracistas2020.com.br/), uma plataforma on-line que reúne e apresenta candidaturas negras comprometidas politicamente com as pautas históricas dos movimentos negros do Brasil, explicitadas no [Manifesto Enquanto Houver Racismo Não Haverá Democracia](https://comracismonaohademocracia.org.br/), na [Carta de Princípios e Agenda da Coalizão Negra por Direitos](https://coalizaonegrapordireitos.org.br/sobre/), na [Agenda Marielle Franco](https://www.agendamarielle.com/) e na [Carta da Convergência Negra em defesa da vida, do emprego e da participação negra na política](https://www.abpn.org.br/post/carta-resultante-da-plen%C3%A1ria-nacional-da-converg%C3%AAncia-negra).

Também é usado como complemento de dados o site do [Tribunal Superior Eleitoral - TSE](https://divulgacandcontas.tse.jus.br/divulga/#/).

## **Funcionalidades**

- [X] Login de pessoa administradora da API (cadastro, atualização e remoção de administradores)
- [X] Cadastro de candidaturas negras
- [X] Lista de todas as candidaturas negras cadastradas
- [X] Lista de todos os movimentos sociais das candidaturas negras cadastradas
- [X] Lista de candidaturas negras por cidade da Região Metropolitana do Recife
- [X] Lista de candidaturas negras eleitas em 2020
- [X] Atualização de cadastro de candidaturas
- [X] Remoção de candidaturas que não façam parte de movimentos sociais

## **Tecnologias, bibliotecas e dependências**

<p align="left">
  <a>
    <a href="https://git-scm.com/"><img alt="Git version" src="https://img.shields.io/badge/Git/GitHub-yellow">
    <a href="https://nodejs.org/pt-br/"><img alt="Node version" src="https://img.shields.io/badge/NodeJS-yellow">
    <a href="https://www.mongodb.com/cloud/atlas"><img alt="Node version" src="https://img.shields.io/badge/MongoDB%20Atlas-yellow">
    <a href="https://herokuapp.com/"><img alt="Deploy on Heroku" src="https://img.shields.io/badge/Heroku-yellow">
    <br/>
    <a href="https://www.npmjs.com/"><img alt="npm version" src="https://img.shields.io/badge/npm-6.14.6-yellow">
    <a href="https://expressjs.com/pt-br/"><img alt="Express version" src="https://img.shields.io/badge/express-4.17.1-yellow">
    <a href="https://mongoosejs.com/"><img alt="Mongoose version" src="https://img.shields.io/badge/mongoose-5.10.17-yellow">
    <a href="https://www.npmjs.com/package/dotenv-safe"><img alt="Dotenv-safe version" src="https://img.shields.io/badge/dotenv-8.2.0-yellow">
    <a href="https://www.npmjs.com/package/bcryptjs"><img alt="Bcrypt version" src="https://img.shields.io/badge/bcrypt-5.0.0-yellow">
    <a href="https://www.npmjs.com/package/jsonwebtoken"><img alt="Jsonwebtoken version" src="https://img.shields.io/badge/jsonwebtoken-8.5.1-yellow">
    <a href="https://www.npmjs.com/package/nodemon"><img alt="Nodemon version" src="https://img.shields.io/badge/nodemon-2.0.6-yellow">
  </a> 
</p>

## **Instruções para instalação e contribuições no projeto**

- Faça um `fork` do projeto através do link (<https://github.com/priscilaestevao/pretitudes-project-reprograma/fork>);

- Copie o código do _fork_ realizado e, no _prompt de comando_ da sua máquina, realize o clone do projeto através do `git clone <link_do_fork_do_repositorio>`;

- Crie uma _branch_ para realizar suas contribuições `git checkout -b feature/<sua_branch>`;

- Instale as dependências necessárias à execução da API através do comando `npm install`;

- No raiz do projeto, renomeie `.env.example` para `.env` e adicione os valores das variáveis `PORT` (porta sugerida `8080`), `MONGODB_URL` (string de conexão com o banco de dados) e `SECRET` (chave RSA). Elas são necessárias para a execução da API em sua máquina

- Para executar a API, utilize o comando `npm start` no seu terminal;

- Após suas contribuições no projeto, realize o _commit_ com o comando `git commit -m 'sua mensagem'`;

- Para subir o projeto no seu GitHub, basta executar o comando `git push origin feature/<sua_branch>`;

- E finalize criando um novo _Pull Request_ com as contribuições para o projeto original.

## **Features e rotas**

Esta API está sendo escutada na `porta 8080` e para que todas as rotas possam ser acessadas localmente é necessário usar `http://localhost:8080/` antes dos endpoints de requisição.

### _Manipulando registros como pessoa usuária_

| Feature | Método | Rota |
|---------|--------|------|
| Lista de todas as candidaturas negras de 2020 | GET | `/candidaturas-negras` |
| Lista de todos os movimentos populares | GET | `/candidaturas-negras/lista-movimentos` |
| Filtro de candidaturas negras por cidade | GET | `/candidaturas-negras/cidade/<nome-da-cidade>` |
| Lista de candidaturas negras eleitas em 2020 | GET | `/candidaturas-negras/eleitas2020` |

### _Manipulando registros como pessoa administradora (requer token de autenticação)_

| Feature | Método | Rota |
|---------|--------|------|
| Login de pessoa administradora | POST | `/admin/login` |
| Cadastro de candidaturas negras | POST | `/candidaturas-negras` |
| Atualização de cadastro de candidaturas por id | PUT | `/candidaturas-negras/:_id` |
| Remoção de candidaturas que não são de movimentos sociais | DELETE | `/candidaturas-negras/participacao?movimentoSocial=unidefined` |
| Cadastro de pessoa administradora | POST | `/admin/` |
| Lista de todas as pessoas administradoras | GET | `/admin` |
| Atualização de cadastro de pessoa administradora por id | PUT | `/admin/:id` |
| Remoção de pessoa administradora por email | DELETE | `/admin?email=<email_da_pessoa_administradora_castrada>` |

## **Referências**

[{reprograma} - Projeto Final](https://github.com/reprograma/on7-porto-s17-s18-projeto-livre)

[Como escrever um README.md sensacional no Github](https://dev.to/reginadiana/como-escrever-um-readme-md-sensacional-no-github-4509#o-que-%C3%A9-o-readme)

[Inspiração: Pokemons API (autoria: @AnnaNee)](https://github.com/AnnaNee/pokemons-api)

[Tribunal Superior Eleitoral](https://www.tse.jus.br/)

[Votos Antirracistas](https://votosantirracistas2020.com.br/)

<hr>

Criado com :black_heart: por **Priscila Estevão** e o apoio das professoras, monitoras, orientação pedagógica e minhas queridas companheiras de turma. Sou só gratidão!

[![Linkedin Badge](https://img.shields.io/badge/-Priscila%20Estevão-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/priestevao/)

