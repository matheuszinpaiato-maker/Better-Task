const db = require('../db');

const listar = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM tarefa');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const criar = async (req, res) => {
  const { titulo, descricao, data_criacao, data_entrega, status } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO tarefa (titulo, descricao, data_criacao, data_entrega, status) VALUES (?, ?, ?, ?, ?)',
      [titulo, descricao, data_criacao, data_entrega, status]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const atualizar = async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, data_criacao, data_entrega, status } = req.body;
  try {
    await db.query(
      'UPDATE tarefa SET titulo = ?, descricao = ?, data_criacao = ?, data_entrega = ?, status = ? WHERE id = ?',
      [titulo, descricao, data_criacao, data_entrega, status, id]
    );
    res.json({ mensagem: 'Atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const deletar = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM tarefa WHERE id = ?', [id]);
    res.json({ mensagem: 'Removido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

module.exports = { listar, criar, atualizar, deletar };