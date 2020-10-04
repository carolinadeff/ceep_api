# ceep_api
API para a aplicação ceep consumir

ceep é um bloco de nota sem react que recebe categorias e notas divididas em categorias, porém a aplicação não possui persistência de dados,
então criei essa api rest, que armazena e fornece os dados de categorias e notas para a aplicação.
A arquitetura é simples, com servidor e middlewares no arquivo server e um diretório com os controllers, que consomem as cruds. Utilizei o banco de dados
Postgres, express para servidor e roteamento, consign para incluir as rotas na minha instância do express e o módulo de pg para interagir com postgres.

Adaptei a aplicação para rodar no meu ambiente, e automaticamente no ambiente do Heroku, pois a API será hospedada lá. Para isso, a string de acesso ao db 
é selecionada conforme o valor da variável de ambiente NODE_ENV. Para fazer isso me guiei por esse tutorial da dev Tania Rascia:
https://www.taniarascia.com/node-express-postgresql-heroku/
