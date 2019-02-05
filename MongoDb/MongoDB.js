https://github.com/aurasphere/mongodb-university-classes
M001 - MONGODB BASICS
MONGO-SHELL
mongo "mongodb+srv://cluster0-lzt49.mongodb.net/test" --username Rodolfowski

PARA CARREGAR UM ARQUIVO QUE CONTENHA UM DB NO ATLAS,ABRA O ATLAS NA PASTA ONDE SE ENCONTRA O MESMO E USE O COMANDO load("NomeDoArquivo.js")

---MONGODB QUERY---

show dbs (Mostra DB's)

use nome_do_banco //CRIA MAS TAMBÉM SELECIONA PARA USAR MAS SÓ EXISTE NO MOMENTO QUE EU CRIO UMA NOVA COLEÇÃO (ITEM DENTRO DO BANCO DE DADOS)

show collections //MOSTRA TODAS AS COLEÇÕES NO DB

db.produtos.insert({"productName":"Red Car","price":12.59,"sellPrice":5.00}) //INSERE ITEM PARA A COLEÇÃO PRODUTOS

db.produtos.insertOne({"productName":""}) //INSERIR 1 PRODUTO APENAS

db.produtos.insertmany([{},{}],{"ordered":false}) //CASO ITENS TENHAM O MESMO ID ELE VAI DESCONSIDERAR NO CASO DE DEFINIR _id PERSONALIZADO E CONTINUARA A INSERIR ELEMENTOS NA COLEÇÃO E ENTÃO AVISARÁ QUE HOUVE REPITIÇÃO

db.movies.find("genres":"action,adventure"),{title:1,_id:0} //MOSTRA SOMENTE O TITULO DOS ELEMENTOS NA COLEÇÃO QUE TENHAM GENERO ACTION ADVENTURE E NÃO MOSTRA I _ID PORQUE '1' É MOSTRAR E '0' É NAO MOSTRAR ISSO SE CHAMA CONDIÇÕES DE PROJEÇÃO

db.movies.find({"genres.0":"Action"}) //MOSTRA TODOS OS ELEMENTOS QUE TEM POR GENERO O PRIMEIRO ELEMENTO ACTION COMO GENERO

db.produtos.find().pretty() //MOSTRA BONITO PRODUTOS

db.produtos.findOne()

db.movieDetails.find({"awards.wins": 2, "awards.nominations": 2}).count()

db.produtos.update({"productName":"Red Car"}.{$set:{"price":3.59}})  //Define novo PRICE para Todos os productName Red Car

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

db.movieDetails.find({runtime: {$gt: 90}}) //MAIOR QUE 90

db.movieDetails.find({runtime: {$gt: 90}}, {_id: 0, title: 1, runtime: 1}) //MAIOR QUE 90 E MOSTRA TITLE E RUNTIME

db.movieDetails.find({runtime: {$gt: 90, $lt: 120}}, {_id: 0, title: 1, runtime: 1}) //MAIOR QUE 90 ,MENOR QUE 120

db.movieDetails.find({runtime: {$gte: 90, $lte: 120}}, {_id: 0, title: 1, runtime: 1})

db.movieDetails.find({runtime: {$gte: 180}, "tomato.meter": 100}, {_id: 0, title: 1, runtime: 1})  //MAIOR IGUAL

db.movieDetails.find({rated: {$ne: "UNRATED"}}, {_id: 0, title: 1, rated: 1})  //NÃO IGUAL

db.movieDetails.find({rated: {$in: ["G", "PG"]}}, {_id: 0, title: 1, rated: 1})  //INSIDE ARRAY

db.movieDetails.find({rated: {$in: ["G", "PG", "PG-13"]}}, {_id: 0, title: 1, rated: 1}).pretty()

db.movieDetails.find({rated: {$in: ["R", "PG-13"]}}, {_id: 0, title: 1, rated: 1}).pretty()

---MONGODB ELEMENT OPERATORS---

db.moviesDetails.find({mpaaRating: {$exists: true}})

db.moviesDetails.find({mpaaRating: {$exists: false}})

db.movieDetails.find({mpaaRating: null {$exists: true}}) //AQUI É NECESSÁRIO CASO EXISTA O CAMPO E ESTEJA ASSIM "" ,NÃO SERÁ CONSIDERADO COMO NULL DESTA FORMA

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


M121 -AGGREGATION
PRIMEIRO ESTADO DE UM PIPELINE --->>$MATCH 
db.solarSystem.aggregate([{$match:{}}])  // PODE SER USADO O MATCH QUANTAS VEZES QUISER,NÃO PODE SER USANDO COM $WHERE E USA A MESMA SINTAXE DO FIND()
var pipeline = [    { $match :	    { $and : [	  { "imdb.rating" : { $gte : 7 }}, 	{ "genres" :    { $nin :[ "Crime", "Horror" ]}		},	{ "rated" : 	{ $in : [ "PG", "G" ]}	},	{ "languages" :		{ $all : [ "English", "Japanese" ]}		}		]}	} ];

db.movies.aggregate(pipeline).itcount()
load('validade.js')
validate(pipeline)

M121 - MONGODB AGGREGATION
$match - PRIMEIRO ESTÁGIO DO PIPELINE ,Server somente para 'combinar' resultados de pesquisa
db.solarSystem.aggregate([{ $match: {type: {$ne:"Star"} } } ]).pretty()

$project- SEGUNDO ESTÁGIO DO PIPELINE,Server para projectar com um filtro dados de uma pesquisa,sem falar que podemos associar novos nomes a valores como na segunda linha
db.solarSystem.aggregate([{$project:{_id:0,name:1,"gravity.value":1}}])
db.solarSystem.aggregate([{$project:{_id:0,name:1,surfaceGravity:"gravity.value"}}])
db.solarSystem.aggregate([{$project:{_id:0,name:1,myWeight:{$multiply[{$divide:["$gravity.value",9.8] },86]}}}]) //CALCULA MEU PESO EM OUTROS PLANETAS

$addFields -É uma propriedade que juntamente a terceira linha do project pode adicionar novos campos para a criação e atribuição de novos valores,junto com $Project ele permite a projeção especifica pra ver o que vocês está fazendo.
db.solarSystem.aggregate([{$project:{_id:0,name:1,gravity:1,mass:1}},{$addField:{gravity:"gravity.value",mass:"mass.value"}])

$group - Usado quantas vezes quiser no pipeline este elemento compara e mostra o que for confirmado e oferecido de condição para ele.o $sort é a ordem,o $cond é devido ao array.

db.solarSystem.aggregate([{$group:{_id:{numDirectors:{$cond:{[{$isArray:"$directors"},{$size:"$directors"},0]}},numFilms:{$sum:1},averageMetacritic:{$avg:"$metacritic"}} }$sort:{"_id.numDirectors:-1"} }])

$unwind - Reescreve o filme varias vezes + cada genero separa o array de generos e reescreve o filme ,ex ação aventura comédia(nome do filme - comedia,nome do filme-acao etc...)
db.movies.aggregate([{{$match:{"imdb.rating":{$gt:0},year:{gte:2010,$lte:2015},runtime:{$gte:90}}},{$unwind:"$genres"},{$group:{_id:"$_id.year",genre:{$first:"$_id.genre"}},average_rating:{$first:"$average_rating"}},{$sort:"_id.year":-1,average_rating:-1}    }}])

$lookup - Consistem em LeftOuterJoin /é igual ao do MYSQL
$lookup:{
from:<coleção a ser juntada>,         //Coleção
localField:<Campo de entrada dos documentos>,
foreingField:<Campo dos documentos em from para juntar com o ocalField>,
as:<Nome para a saida do array>
}

db.air_alliances.aggregate([{$lookup:{from:"air_airlines",localField:"airlines",foreingField:"name",as:"airlines"}}]).pretty()



