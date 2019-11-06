// 1 - Selecione todos os registros.
$db.alunas.find()

// 2 - Selecione todos os registros e deixe com uma melhor apresentação.
$db.alunas.find().pretty()

// 3 - Selecione todos os registros em que o nome seja igual a 'Aya'.
$db.alunas.find("nome": "Aya").pretty()

// 4 - Selecione todos os registros em que a aluna nasceu em SP.
$db.alunas.find("nasceuEmSp": true).pretty()

// 5 - Selecione todos os registros em que contenha título do livro igual a "Java - Web Developers"
$db.alunas.find({"livros.titulo":"Java - Web Developers"}).pretty()

// 6 - Selecione todos os registros em que a aula tenha o livro "Clean Code" e o nome "Helena"
$db.alunas.find({$and:[{"livros.titulo":"Clean Code", "nome":"Helena"}]}).pretty()

// 7 - Selecione todos os registros em que a aluna tenha nascido em SP e tenha o livro Cangaceiro Javascript
$db.alunas.find({$and:[{"livros.titulo":"Cangaceiro JavaScript", "nasceuEmSp":"true"}]}).pretty()

// 8 - Selecione todos os registros em que a aluna contenha o livro Java - Web Developers e Clean Code. Primeiro : realize o exercicio com o operador ou e posteriormente com o operador in.
db.alunas.find({$or:[{"livros.titulo":"Cangaceiro JavaScript", "livros.titulo":"Clean Code"}]}).pretty()
db.alunas.find({"livros.titulo":{$in:["Cangaceiro JavaScript","Clean Code"]}}).pretty()

// 9 - Pegue o exercício acima e inclua também onde a aluna pode ter nascido em sp.
$db.alunas.find({$and:[{"livros.titulo":"Cangaceiro JavaScript"},{"livros.titulo":"Clean Code"},{"nasceuEmSp":"true"}]}).pretty()

// 10 - Utilizando os dois operadores juntos. $or e $in. Procure todas as alunas que tenham nascido em SP ou os livros "MySQL" e "MongoDB"
$db.alunas.find({$or:[{"nasceuEmSp":"true"}, {$in:[{"livros.titulo":"Harry Potter"}, {"livros.titulo":"Clean Code"}]} ] }).pretty()



    
    
    // COMO FAZER PARA JUNTAR MÉTODOS $IN $OR $AND E TRAZER VALORES IGUAL AO EXEMPLO DA CAROL??

//   11 - Trazer aluna que nasceu em SP e que tenha lido o livro Clean Code: 
    db.alunas.find({ $and: [{"nasceuEmSp" : "true" }, {"livros":{$in:[{"titulo":"Clean Code", "leu":"true"}]}}]}).pretty()
