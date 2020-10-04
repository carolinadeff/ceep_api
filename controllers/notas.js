const crudNotas = require("../infraestrutura/crudNotas");

module.exports = (app) => {
  app
    .route("/notas")
    .get((req, res) => {
      crudNotas.lista(res);
    })

    .post((req, res) => {
      const novaNota = req.body;
      crudNotas.adiciona(novaNota, res);
    });

  app
    .route("/notas/:id")
    .put((req, res) => {
      const id = req.params.id;
      const notaAtualizada = req.body;
      crudNotas.atualiza(notaAtualizada, id, res);
    })

    .delete((req, res) => {
      const id = req.params.id;
      crudNotas.deleta(id, res);
    });
};
