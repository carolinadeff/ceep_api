const { pool } = require('./conexao');


function lista(res){
    pool.query(`SELECT * FROM notas`, (erros, resultados) => {
        if (erros) {
          res.json({status: erros, mensagem: 'Falha na solicitação.'});
        }
        res.status(200).json(resultados.rows);
      });
}

function adiciona(nota, res){
    const {categoria, titulo, texto } = nota
    pool.query('INSERT INTO notas (categoria, titulo, texto) VALUES ($1, $2, $3)', [categoria, titulo, texto], (erros) => {
        if (erros) {
          res.json({status: erros, mensagem: 'Falha na solicitação.'});
        }
        res.status(200).json({status: 'sucesso!', mensagem: `nota ${titulo} adicionada com sucesso`});
      })
}

function atualiza(nota, id, res){
    const {categoria, titulo, texto } = nota
    pool.query('UPDATE notas SET categoria=$1, titulo=$2, texto=$3 WHERE id=$4', [categoria, titulo, texto, id], (erros) => {
        if (erros) {
          res.json({status: erros, mensagem: 'Falha na solicitação.'});
        }
        res.status(200).json({status: 'sucesso!', mensagem: `Nota ${titulo} atualizada com sucesso`});
      })

}

function deleta(id, res){
    pool.query('DELETE FROM notas WHERE id=$1', [id], (erros) => {
        if (erros) {
            res.json({status: erros, mensagem: 'Falha na solicitação.'});
          }
          res.status(200).json({status: 'sucesso!', mensagem: `Nota apagada com sucesso`});
    })

}

module.exports = {
  lista,
  adiciona,
  atualiza,
  deleta
}