create database pdv;

create table
    usuarios (
        id serial primary key,
        nome varchar (50) not null,
        email text unique not null,
        senha text not null
    );

create table
    categorias (
        id serial primary key,
        descricao text
    );

insert into
    categorias (descricao)
values ('Informática'), ('Celulares'), ('Beleza e Perfumaria'), ('Mercado'), ('Livros e Papelaria'), ('Moda'), ('Bebê'), ('Games');

create table
    produtos (
        id serial primary key,
        descricao varchar(100) not null,
        quantidade_estoque integer not null,
        valor integer not null,
        categoria_id integer not null references categorias(id)
    );

create table
    clientes (
        id serial primary key,
        nome varchar(50) not null,
        email text unique not null,
        cpf char(11) unique not null,
        cep char(8) not null,
        rua varchar(50) not null,
        numero varchar(20) not null,
        bairro varchar(50) not null,
        cidade varchar(50) not null,
        estado varchar(2) not null
    );