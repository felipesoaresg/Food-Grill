 /* 						MODELO LÓGICO TEXTUAL

		cliente ( idCliente, nomeCliente, mesa) ;

		produtos (idProduto, nomeProduto, descricao, preco, estoque, categoria, img);

		pedido (idPedido, valor, data, quantProdutos, idCliente,  idProduto, nomeProduto,

		idCliente referencia Clientes (idCliente),

		idProduto referencia Produtos(idProduto),

		nomeProduto referencia Produtos(nomeProduto)

		 );

*/

DROP DATABASE IF EXISTS Lanchonete;
CREATE DATABASE Lanchonete;
USE Lanchonete;

CREATE TABLE Clientes ( 
	idCliente INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
	nomeCliente VARCHAR (40) NOT NULL, 
	mesa INT (2) 
);


 CREATE TABLE Produtos (
	 idProduto INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
	 nomeProduto VARCHAR (40) NOT NULL, 
	 descricao VARCHAR (150) , 
	 preco NUMERIC (5,2) NOT NULL, 
	 estoque INT (6),
	 categoria VARCHAR (10) NOT NULL,
	 img VARCHAR (200)
 );

CREATE TABLE Pedidos (
	idPedido INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	quantProdutos INT (4),
	valorTotal NUMERIC (8,2), 
	pagamento VARCHAR (15),
	idProdutoPed INT,
	idClientePed INT,
	
	CONSTRAINT fk_idPedido FOREIGN KEY (idProdutoPed) REFERENCES Produtos(idProduto),
	CONSTRAINT fk_idCliente FOREIGN KEY (idClientePed) REFERENCES Clientes(idCliente)

);



DESCRIBE Clientes;
DESCRIBE Produtos;
DESCRIBE Pedidos;

