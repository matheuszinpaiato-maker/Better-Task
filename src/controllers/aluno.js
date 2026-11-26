const db = require('../db');

const login = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: 'Preencha email e senha.' });
  }

  try {
    const [rows] = await db.query(
      'SELECT id, nome, email FROM aluno WHERE email = ? AND senha = ?',
      [email, senha]
    );

    if (rows.length === 0) {
      return res.status(401).json({ erro: 'Email ou senha incorretos.' });
    }

    res.redirect('http://127.0.0.1:5500/client/inicioALUNO.html');
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const criar = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: 'Preencha nome, email e senha.' });
  }

  if (senha.length > 15) {
    return res.status(400).json({ erro: 'A senha pode ter no máximo 15 caracteres.' });
  }

  try {
    const [existe] = await db.query('SELECT id FROM aluno WHERE email = ?', [email]);
    if (existe.length > 0) {
      return res.status(409).json({ erro: 'Este email já está cadastrado.' });
    }

    await db.query(
      'INSERT INTO aluno (nome, email, senha, id_nota, id_tarefa) VALUES (?, ?, ?, NULL, NULL)',
      [nome, email, senha]
    );

    res.redirect('http://127.0.0.1:5500/client/login-aluno.html');
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const listar = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM aluno');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};


const atualizar = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha, id_nota, id_tarefa } = req.body;
  try {
    await db.query(
      'UPDATE aluno SET nome = ?, email = ?, senha = ?, id_nota = ?, id_tarefa = ? WHERE id = ?',
      [nome, email, senha, id_nota, id_tarefa, id]
    );
    res.json({ mensagem: 'Atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const deletar = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM aluno WHERE id = ?', [id]);
    res.json({ mensagem: 'Removido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

module.exports = { listar, criar, atualizar, deletar, login };
