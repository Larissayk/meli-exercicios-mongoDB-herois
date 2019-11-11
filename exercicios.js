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

//   11 - Trazer aluna que nasceu em SP e que tenha lido o livro Clean Code: 
    db.alunas.find({ $and: [{"nasceuEmSp" : "true" }, {"livros":{$in:[{"titulo":"Clean Code", "leu":"true"}]}}]}).pretty()

//-----------------------------------------------------------------------------------------------------------------
//Exercícios Inclusão

//1- Crie 5 novos registros de alunas

db.alunas.insertMany([
    {
    nome: "Lúcia",
  dateOfBirth: "11/12/1956",
  nasceuEmSp: "true",
  id: "21",
  livros: [
    {
      titulo: "MongoDB",
      leu: "true"
    },
    {
      titulo: "Design",
      leu: "true"
    }
  ]
    },
    {
        nome: "Zélia",
  dateOfBirth: "03/01/1990",
  nasceuEmSp: "true",
  id: "22",
  livros: [
    {
      titulo: "C#",
      leu: "true"
    },
    {
      titulo: "MySQL",
      leu: "false"
    }
  ]
    },
    {
        nome: "Neide",
        dateOfBirth: "30/05/2000",
        nasceuEmSp: "true",
        id: "23",
        livros: [
          {
            titulo: "MySQL",
            leu: "true"
          },
          {
            titulo: "JavaScript",
            leu: "false"
          }
        ]
    },
    {
        nome: "Iris",
        dateOfBirth: "19/12/1999",
        nasceuEmSp: "false",
        id: "24",
        livros: [
          {
            titulo: "HTML",
            leu: "false"
          },
          {
            titulo: "CSS",
            leu: "true"
          }
        ]
      },
      {
        nome: "Anita",
        dateOfBirth: "11/02/1981",
        nasceuEmSp: "false",
        id: "25",
        livros: [
          {
            titulo: "Java",
            leu: "true"
          },
          {
            titulo: "Mongo DB",
            leu: "false"
          }
        ]
      }
  ])

//---------------------------------------------------------------------------------------------------------------
Exercícios

//1.	Atualize os registros criados no exercício anterior, com os filtros abaixo (não se esqueça de buscar pelo _id):

try {
  db.inspectors.updateMany(
     { "id" : { $gt : 20 }},
     { $set: { "nasceuEmSp" : false } },
  )
}

//---------------------------------------------------------------------------------------

try {
  db.alunas.updateMany(
     {  "id" : { $gt : "20" } },
     { $set: { "nasceuEmSp" : false } },
  );
} catch (e) {
  print(e);
}

//--------------------------------------------------------------------------------------
try {
  db.alunas.updateMany(
    { "nome": { $in: [ "Iris", "Neide","Zélia","Lúcia","Katarina" ] } } ,
     { $set: { "nasceuEmSp" : false } },
  );
} catch (e) {
  print(e);
}

//----------------------------------------------------------------------------------

db.alunas.updateMany(
  { "nome": { $in: [ "Iris", "Neide","Zélia","Lúcia","Katarina" ] } } ,
   { $set: { "nasceuEmSp" : false } },
)

//-------------------------------------------------------------------------------------------
//MARIDO LUMA

//RODAR PRIMEIRO CODIGO:

db.alunas.updateMany({"nasceuEmSp":"true"},{$set : {"nasceuEmSp" : "false", "trocou" : "true"}})

///RODAR SEGUNDO CODIGO:

db.alunas.updateMany({"nasceuEmSp" : "false", "trocou": {$exists:"false"}}, {$set:{"nasceuEmSp":"true","trocou":"true"}})

//--------------------------------------------------------------------------------------------------------

//Atualize a data de nascimento de 2 alunas.
db.alunas.updateMany(
  { "nome": { $in: [ "Larissa", "Joana" ] } } ,
   { $set: { "dateOfBirth" : "23/08/1993" } },
)



//Deixe todos os registros criados acima que estiverem como true para false, e vice-versa.
db.alunas.updateMany(
  { "nome": { $in: [ "Iris", "Neide","Zélia","Lúcia","Katarina" ] } } ,
   { $set: { "nasceuEmSp" : true } },
)

//Inclua pelo menos 3 livros que elas tenham lido.
db.alunas.updateMany(
  { "nome": { $in: [ "Iris", "Neide","Zélia","Lúcia","Katarina" ] } } ,
   { $push: { "livros":{ $each: [ {"titulo":"Livro Teste1", "leu":true},
   {"titulo":"Livro Teste2", "leu":true},
   {"titulo":"Livro Teste3", "leu":true}] }}}
)


//2. Exclua 5 itens dada uma determinada condição:

//Por ordenação de inserção, os dois primeiros que foram inseridos.

db.alunas.deleteMany(
  { "id": { $in: [ "20", "21" ] } },
)


//Por ordem alfabética, os dois primeiros.
db.alunas.find().sort({ "nome": 1 }).limit(2);
db.alunas.deleteMany(
  { "id": { $in: [ "15", "6" ] } },
)


//Por ordem de data de nascimento decrescente, a primeira data.
db.alunas.find().sort({ "dateOfBirth": 1 }).limit(1);
db.alunas.deleteMany(
  { "id": { $in: [ "24" ] } },
)

