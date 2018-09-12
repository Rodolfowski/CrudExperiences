MONGO-SHELL
mongo "mongodb+srv://cluster0-lzt49.mongodb.net/test" --username Rodolfowski

---MONGODB QUERY---

show dbs (Mostra DB's)

use nome_do_banco //CRIA MAS TAMBÉM SELECIONA PARA USAR MAS SÓ EXISTE NO MOMENTO QUE EU CRIO UMA NOVA COLEÇÃO (ITEM DENTRO DO BANCO DE DADOS)

show collections //MOSTRA TODAS AS COLEÇÕES NO DB

db.produtos.insert({"productName":"Red Car","price":12.59,"sellPrice":5.00})

db.movies.find({"genres.0":"Action"}) //MOSTRA TODOS OS ELEMENTOS QUE TEM POR GENERO O PRIMEIRO ELEMENTO ACTION COMO GENERO

db.produtos.insertOne({"productName":""}) //INSERIR 1 PRODUTO APENAS

db.produtos.insertmany([{},{}],{"ordered":false}) //CASO ITENS TENHAM O MESMO ID ELE VAI DESCONSIDERAR NO CASO DE DEFINIR _id PERSONALIZADO E CONTINUARA A INSERIR ELEMENTOS NA COLEÇÃO E ENTÃO AVISARÁ QUE HOUVE REPITIÇÃO

db.produtos.find().pretty() //MOSTRA BONITO PRODUTOS

db.movies.find("genres":"action,adventure"),{title:1,_id:0} //MOSTRA SOMENTE O TITULO DOS ELEMENTOS NA COLEÇÃO QUE TENHAM GENERO ACTION ADVENTURE E NÃO MOSTRA I _ID PORQUE '1' É MOSTRAR E '0' É NAO MOSTRAR ISSO SE CHAMA CONDIÇÕES DE PROJEÇÃO

db.produtos.findOne()

db.movieDetails.find({"awards.wins": 2, "awards.nominations": 2}).count()

db.produtos.update({"productName":"Red Car"}.{$set:{"price":3.59}})

db.produtos.remove({"productName":"Pink Car"}) //REMOVE TODOS OS productName QUE SEJAM PINK CAR 

db.produtos.remove({"productName":"Pink Car"}.{justOne:true}) //REMOVE SOMENTE 1 O PRIMEIRO QUE ENCONTRAR

db.movieDetails.updateOne({  //UPDATE 1 COM INSERÇÃO DE POSTER NO PRIMEIRO ITEM QUE TENHA TITLE = RAMBO3 SE NÃO EXISTIR CRIA

title:"RAMBO3"
},{
$set:{
poster:"http://dwadadasd.br"
}
})

---MONGODB COMPARISONS---

db.movieDetails.find({runtime: {$gt: 90}})

db.movieDetails.find({runtime: {$gt: 90}}, {_id: 0, title: 1, runtime: 1})

db.movieDetails.find({runtime: {$gt: 90, $lt: 120}}, {_id: 0, title: 1, runtime: 1})

db.movieDetails.find({runtime: {$gte: 90, $lte: 120}}, {_id: 0, title: 1, runtime: 1})

db.movieDetails.find({runtime: {$gte: 180}, "tomato.meter": 100}, {_id: 0, title: 1, runtime: 1})

db.movieDetails.find({rated: {$ne: "UNRATED"}}, {_id: 0, title: 1, rated: 1})

db.movieDetails.find({rated: {$in: ["G", "PG"]}}, {_id: 0, title: 1, rated: 1})

db.movieDetails.find({rated: {$in: ["G", "PG", "PG-13"]}}, {_id: 0, title: 1, rated: 1}).pretty()

db.movieDetails.find({rated: {$in: ["R", "PG-13"]}}, {_id: 0, title: 1, rated: 1}).pretty()

---MONGODB ELEMENT OPERATORS---

db.moviesDetails.find({mpaaRating: {$exists: true}})

db.moviesDetails.find({mpaaRating: {$exists: false}})

db.movieDetails.find({mpaaRating: null {$exists: true}}) //AQUI NECESSÁRIO CASO EXISTA O CAMPO E ESTEJA ASSIM "" ,NÃO SERÁ CONSIDERADO COMO NULL

db.movieDetails.find({})

db.movies.find({viewerRating: {$type: "int"}}).pretty()

db.movies.find({viewerRating: {$type: "double"}}).pretty()

---MONGODB LOGICAL OPERATORS---

db.movieDetails.find({$or: [{"tomato.meter": {$gt: 95}},                               
                            {"metacritic": {$gt: 88}}]},
                     {_id: 0, title: 1, "tomato.meter": 1, "metacritic": 1})

db.movieDetails.find({$and: [{"tomato.meter": {$gt: 95}},                               
                            {"metacritic": {$gt: 88}}]},
                     {_id: 0, title: 1, "tomato.meter": 1, "metacritic": 1})

db.movieDetails.find({"tomato.meter": {$gt: 95},                               
                      "metacritic": {$gt: 88}},
                     {_id: 0, title: 1, "tomato.meter": 1, "metacritic": 1})

db.movieDetails.find({$and: [{"metacritic": {$ne: null}},
                             {"metacritic": {$exists: true}}]},
                          {_id: 0, title: 1, "metacritic": 1})

db.movieDetails.find({$and: [{"metacritic": null},
                             {"metacritic": {$exists: true}}]},
                     {_id: 0, title: 1, "metacritic": 1})

---MONGODB ALL OPERATOR---

db.movieDetails.find({genres: {$all: ["Comedy", "Crime", "Drama"]}}, 
                     {_id: 0, title: 1, genres: 1}).pretty()
                
---MONGODB SIZE OPERATOR---

db.movieDetails.find({countries: {$size: 1}}).pretty()

---MONGODB ELEMMATCH OPERATOR---

boxOffice: [ { "country": "USA", "revenue": 228.4 },
             { "country": "Australia", "revenue": 19.6 },
             { "country": "UK", "revenue": 33.9 },
             { "country": "Germany", "revenue": 16.2 },
             { "country": "France", "revenue": 19.8 } ]

db.movieDetails.find({"boxOffice.country": "Germany", "boxOffice.revenue": {$gt: 17}})

db.movieDetails.find({"boxOffice.country": "Germany", "boxOffice.revenue": {$gt: 228}})

use video
martian = db.movieDetails.findOne({title: "The Martian"})
martian
delete martian._id;
martian
martian.boxOffice = [
    {"country": "USA", "revenue": 228.4},
    {"country": "Australia", "revenue": 19.6},
    {"country": "UK", "revenue": 33.9},
    {"country": "Germany", "revenue": 16.2},
    {"country": "France", "revenue": 19.8}
]
db.movieDetails.insertOne(martian);

db.movieDetails.find({boxOffice: {$elemMatch: {"country": "Germany", "revenue": {$gt: 17}}}})

db.movieDetails.find({boxOffice: {$elemMatch: {"country": "Germany", "revenue": {$gt: 16}}}})

