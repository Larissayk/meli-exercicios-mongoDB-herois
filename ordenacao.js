//Traz os registros em ordem descrescente baseado no ID
db.orders
  .find()
  .sort({ amount: -1 })
  .pretty();

//Traz os registros em ordem crescente baseado no nome
db.orders
  .find()
  .sort({ nome: 1 })
  .pretty();

// inserir Nova aluna:  
db.alunas.insert({
  nome: "Katarina",
  dateOfBirth: "01/08/1994",
  nasceuEmSp: "false",
  id: "20",
  livros: [
    {
      titulo: "Livro teste",
      leu: "false"
    },
    {
      titulo: "Livro teste",
      leu: "false"
    }
  ]
});

// Contar quantos registros
db.aluna.count()

//inserir mais de um objeto (alunas)
db.posts.insertMany([
    {
      title: 'Post Two',
      body: 'Body of post two',
      category: 'Technology',
      date: Date()
    },
    {
      title: 'Post Three',
      body: 'Body of post three',
      category: 'News',
      date: Date()
    },
    {
      title: 'Post Four',
      body: 'Body of post three',
      category: 'Entertainment',
      date: Date()
    }
  ])

  //atualizar uma propriedade de certa aluna
  db.alunas.update({ nome: 'Iris' },
  {
    $set: {
      dateOfBirth: '01/01/2001'
    }
  })


 // inserir uma chave a mais
 db.alunas.update({"nome":'Lúcia'}, {$push:{"livros":{"titulo":"Harry Potter", "leu": "true"}}}) 

 //tb existe updateMany -> caso queira fazer a edição de mais uma aluna de mesmo nome ou ID

 //Apagar um objeto Aluna
 db.alunas.remove({ nome: 'Anita' })

 //Apagar uma chave de uma aluna
 db.alunas.update({"nome":'Lúcia'}, {$unset:{"livros":{"titulo":"Harry Potter", "leu": "true"}}}) 
db.alunas.update({"nome":'Iris'}, {$unset:{"livros":{"titulo":"CSS"}}})
db.alunas.update({"nome" : "Felipa "}, {$unset: {"nasceuEmSp" : "false"}})