const { pool } = require('./conexao');

function lista(res){
    pool.query('SELECT * FROM categorias', (erros, resultados) => {
        if (erros) {
          res.json({status: erros, mensagem: 'Falha na solicitação.'});
        }
        res.json(resultados.rows)
      });
}

function adiciona(categoria, res){
    pool.query('INSERT INTO categorias (categoria) VALUES ($1)', [categoria], (erros) => {
        if (erros) {
          res.json({status: erros, mensagem: 'Falha na solicitação.'});
        }
        res.status(200).json({status: 'sucesso!', mensagem: `Categoria ${categoria} adicionada com sucesso`});
      })
}

function atualiza(categoria, id, res){
    pool.query('UPDATE categorias SET categoria=$1 WHERE id=$2', [categoria, id], (erros) => {
        if (erros) {
          res.json({status: erros, mensagem: 'Falha na solicitação.'});
        }
        res.status(200).json({status: 'sucesso!', mensagem: `Categoria ${categoria} atualizada com sucesso`});
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
  atualiza,
  deleta
}