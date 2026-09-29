DROP DATABASE IF EXISTS bettertask;
CREATE DATABASE bettertask;
USE bettertask;

CREATE TABLE aluno (
    id INT PRIMARY KEY,
    nome VARCHAR (100),
    email VARCHAR (100),
    senha VARCHAR (30),
    id_nota INT,
    id_tarefa INT
);

CREATE TABLE professor (
    id INT PRIMARY KEY,
    nome VARCHAR (100),
    email varchar (100),
    senha VARCHAR (30),
    id_nota INT,
    postar_nota VARCHAR (30),
    id_tarefa INT,
    postar_tarefa VARCHAR (30)
);

CREATE TABLE tarefa (
    id INT PRIMARY KEY,
    titulo VARCHAR (100),
    descricao TEXT,
    data_criacao DATETIME,
    data_entrega DATETIME,
    status ENUM ('pendente','concluida')
);