//EXEMPLOS

// Procura nomes que começam com "a", independente se é maiúsculo ou minúsculo pq eu usei a opção "i"
db.alunas.find({nome:{$regex:/^a/i}}).pretty()
db.alunas.find({nome:{$regex:/^A/i}}).pretty()

//procura todos os nomes que contenham "e" no nome
db.alunas.find({"nome":/e/}).pretty()

//procura todos os nomes que contenham "E" no nome
db.alunas.find({"nome":/E/}).pretty()

// Quando eu uso o "$" depois da letra ele traz o nome que contenha "a" no final
db.alunas.find({nome:{$regex:/A$/i}}).pretty()

//Não precisa colocar $regex para indicar que é um regex

//-----------------------------------------------------------------------------------

//EXERCÍCIOS

//1- Selecione todos os registros em que os livros contenham em qualquer parte a palavra "clean"
db.alunas.find({"livros.titulo":/Clean/}).pretty()

//2- Selecione todos os registros em que os livros terminem com a letra "s"
db.alunas.find({"livros.titulo":/s$/i}).pretty()

//3-Selecione todos os registros em que todos terminem com a letra "t"
db.alunas.find({"livros.titulo":/t$/i}).pretty()

//4-Selecione todos os nomes das alunas terminem com a letra "k" ou "o"
db.alunas.find({$or:[{"nome":/k$/i}, {"nome":/o$/i}]}).pretty()
db.alunas.find({"nome":{$in:[/k$/i, /o$/i]}}).pretty()

//5- Selelcione todos os registros em que os nomes comecem com a letra "a"
db.alunas.find({"nome":/^a/i}).pretty()

//6- Selecione todos os registros e que nomes comecem com a letra "a" ou "h"
db.alunas.find({$or:[{"nome":/^a/i}, {"nome":/^h/i}]}).pretty()
db.alunas.find({"nome":{$in:[/^a/i, /^h/i]}}).pretty()
