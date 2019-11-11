// Desafio

// Você receberá um arquivo com o formato JSON contendo alguns personagens de quadrinhos e/ou desenhos animados e você deverá realizar as alterações que foram solicitadas abaixo pelo cliente.

// 1.	Selecione todos os registro;
db.herois.find().pretty(); 

// 2.	Selecione apenas o primeiro registro;
db.herois.find().sort({_id:"1"}).limit(1).pretty();

// 3.	Selecione todos os registros em que o nome seja igual a ‘Carla’ ou a quantidade de gatos seja igual a 2;
db.herois.find({$or: [{"nome": "Carla"}, {"quantidadeGatos":2}]}).pretty()

// 4.	Selecione todos os registros em que o local de nascimento seja igual a Nova York e necessariamente que a quantidade de cachorros seja igual a 1;
db.herois.find({$and: [{"local": "Nova York"}, {"quantidadeCachorros":1}]}).pretty()

// 5.	Selecione todos os registros em que a quantidade de gatos seja igual a 4 ou a quantidade de cachorros seja igual a 2;
db.herois.find({$or: [{"quantidadeGatos":4},{"quantidadeCachorros":2}]}).pretty()

// 6.	Selecione todos os registros em que o nome comece com C;
db.herois.find({nome:{$regex:/^C/}}).pretty()

// 7.	Selecione todos os registros em que o nome comece com H;
db.herois.find({nome:{$regex:/^H/}}).pretty()

// 8.	Selecione todos os registros em que o nome termine com a;
db.herois.find({nome:{$regex:/a$/}}).pretty()

// 9.	Selecione todos os registros em que o nome contenha s;
db.herois.find({nome:{$regex:/s/}}).pretty()

// 10.	Selecione todos os registros em que o nome contenha ‘e’ ou ‘o’;
db.herois.find({$or: [{ nome:{$regex:/e/}},{ nome:{$regex:/o/}}]}).pretty()
db.herois.find({$or: [{"nome":{$in:[{$regex:/e/},{$regex:/o/}]}}]}).pretty()


// 11.	Insira 3 novos super-heróis;
db.herois.insertMany([
    {
        "nome": "Herói1",
        "dateOfBirth": "1976-02-18T08:30:00.000Z",
        "local": "Cidade1",
        "usaCapa": true,
        "quantidadeGatos": 8,
        "quantidadeCachorros": 2
    },
    {
        "nome": "Herói2",
        "dateOfBirth": "1995-03-18T08:30:00.000Z",
        "local": "Cidade2",
        "usaCapa": false,
        "quantidadeGatos": 1,
        "quantidadeCachorros": 10
    },
    {
        "nome": "Herói3",
        "dateOfBirth": "1970-03-20T08:30:00.000Z",
        "local": "Cidade3",
        "usaCapa": true,
        "quantidadeGatos": 1,
        "quantidadeCachorros": 5
    }
])

// 12.	Delete 1 super-herói em que o nome seja igual a Capitão América;
db.herois.remove({ nome: 'Capitão América' })

// 13.	Atualize a quantidade de gatos em que o usuário com o registro de nome ‘Thor’ possui. Atualize a quantidade de gatos de ‘5’ para ‘7’;
db.herois.update(
    { "nome" : "Thor"},
    { $set: { "quantidadeGatos" : 7 } },
 )

// 14. Atualize o registro da Mulher Maravilha para capa = true;
db.herois.update(
    { "nome" : "Mulher Maravilha"},
    { $set: { "capa" : true } },
 )


// 15.	Selecione todos os registros que foram trabalhados e exporte para um arquivo JSON.
