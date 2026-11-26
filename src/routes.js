const express = require('express');
const router = express.Router();
const tarefaController = require('./controllers/tarefa');
const alunoController = require('./controllers/aluno');
const professorController = require('./controllers/professor');

router.get('/tarefa', tarefaController.listar);
router.post('/tarefa', tarefaController.criar);
router.put('/tarefa/:id', tarefaController.atualizar);
router.delete('/tarefa/:id', tarefaController.deletar);

router.post('/login-aluno', alunoController.login);
router.get('/aluno', alunoController.listar);
router.post('/aluno', alunoController.criar);
router.put('/aluno/:id', alunoController.atualizar);
router.delete('/aluno/:id', alunoController.deletar);

router.post('/login-professor', professorController.login);
router.get('/professor', professorController.listar);
router.post('/professor', professorController.criar);
router.put('/professor/:id', professorController.atualizar);
router.delete('/professor/:id', professorController.deletar);

module.exports = router;