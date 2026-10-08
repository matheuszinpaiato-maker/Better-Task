drop database if exists better_task;
create database better_task;
use better_task;

CREATE TABLE tarefa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR (100),
    descricao TEXT,
    data_criacao DATETIME,
    data_entrega DATETIME,
    status ENUM ('pendente','concluida')
); 
CREATE TABLE aluno (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (100),
    email VARCHAR (100),
    senha VARCHAR (15),
    id_nota INT,
    id_tarefa INT
);
CREATE TABLE professor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (100),
    email VARCHAR (100),
    senha VARCHAR (15),
    id_nota INT,
    postar_nota VARCHAR (20),
    id_tarefa INT,
    postar_tarefa VARCHAR (20)
);