const { pool } = require('./conexao');

function lista(res){
    pool.query('SELECT * FROM categorias', (erros, resultados) => {
        if (erros) {
          res.json({status: erros, mensagem: 'Falha na solicitação.'});
        }
        res.status(200).json(resultados.rows)
      });
}

function adiciona(categoria, res){
    pool.query('INSERT INTO categorias (categoria) VALUES ($1)', [categoria], (erros, resultados) => {
        if (erros) {
          res.json({status: erros, mensagem: 'Falha na solicitação.'});
        }
        res.status(200).json({status: 'sucesso!', mensagem: `Categoria ${titulo} adicionada com sucesso`});
      })
}

function deleta(id, res){
    pool.query('DELETE FROM categorias WHERE id=$1', [id], (erros) => {
        if (erros) {
            res.json({status: erros, mensagem: 'Falha na solicitação.'});
          }
          res.status(200).json({status: 'sucesso!', mensagem: `Categoria apagada com sucesso`});
    })

}

module.exports = {
  lista,
  adiciona,
  deleta
}