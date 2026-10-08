INSERT INTO aluno ( nome, email, senha, id_nota, id_tarefa) VALUES 
('Matheus Paiato', 'matheus@gmail.com', 'sesi01', 1, 1),
('Nicolas Lira', 'nicolas@gmail.com', 'sesi02', 2, 2),
('Maycon Lima', 'maycon@gmail.com', 'sesi03', 3, 3),
('Davi Oliveira', 'davi@gmail.com', 'sesi04', 4, 4),
('Giuseppe Vieira', 'giuseppe@gmail.com', 'sesi05', 5, 5);

INSERT INTO professor ( nome, email, senha, id_nota, postar_nota, id_tarefa, postar_tarefa) VALUES
('Professor Rafael', 'roberto@email.com', 'prof123', 1, 'Sim', 1, 'Sim'),
('Professora Eliana', 'ana.prof@email.com', 'prof456', 2, 'Sim', 2, 'Sim');

INSERT INTO tarefa ( id, titulo, descricao, data_criacao, data_entrega, status) VALUES
('Lista de Matemática', 'Exercícios de Álgebra', '2026-10-01', '2026-10-10', 'concluida'),
('Quiz de História', 'Falar sobre a Revolução Industrial', '2026-10-02', '2026-10-11', 'pendente'),
('Trabalho de Ciências', 'Pesquisa sobre ecossistemas', '2026-10-03', '2026-10-12', 'pendente'),
('Folinha de Física', 'Leis de Newton', '2026-10-04', '2026-10-13', 'concluida'),
('Site do SENAI', 'Criar tela de login', '2026-10-05', '2026-10-14', 'pendente');

SELECT * FROM aluno;
SELECT * FROM professor;
SELECT * FROM tarefa;