const crudCategorias = require("../infraestrutura/crudCategorias");

module.exports = (app) => {
  app
    .route("/categorias")
    .get((req, res) => {
      crudCategorias.lista(res);
    })

    .post((req, res) => {
      const { categoria } = req.body;
      crudCategorias.adiciona(categoria, res);
    });

  app
    .route("/categorias/:id")
    .put((req, res) => {
      const id = req.params.id;
      const { categoria } = req.body;
      crudCategorias.atualiza(categoria, id, res);
    })

    .delete((req, res) => {
      const id = req.params.id;
      crudCategorias.deleta(id, res);
    });
};

