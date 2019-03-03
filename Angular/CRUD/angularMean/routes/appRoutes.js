const express = require('express');
const router = express.Router();
const Employed = require('../models/dataSchema');

router.post('/create',(req,res,next)=>{

var newEmployed = new Employed({
nome:req.body.nome,
cargo:req.body.cargo
});
newEmployed.save((err,employed)=>{
if(err){
res.status(500).json({errmsg:err});
}else{
res.status(200).json({msg:'Criado com sucesso!'});}//fim do else
}); // fim da verificação do processo de criação
});//fim router.post
router.get('/read',(req,res,next)=>{
Employed.find({},(err,employees)=>{
if(err){
res.status(500).json({errmsg:err});
}else{
res.status(200).json({msg:employees});

}
});//Fim do employed find
});//Fim do get

router.put('/update',(req,res,next)=>{
Employed.findById(req.body._id,(err,employed)=>{
if(err){
res.status(500).json({errmsg:err});
}else{
employed.nome=req.body.nome;
employed.cargo=req.body.cargo;
employed.save((err,employed)=>{
if(err){
res.status(500).json({errmsg:err});
}else{
res.status(200).json({msg:'Criado com sucesso!'});
}//fim else
});//Fim do save
};//Fim do else
});//Fim do FindById
});//Fim do Update


router.delete('/delete/:id',(req,res,next)=>{
Employed.findOneAndRemove({_id:req.params.id},(err,employed)=>{
if(err){
res.status(500).json({errmsg:err});
}else{
res.status(200).json({msg:'Pais deletado com sucesso!'});
}
});//Fim FindOne
});//Fim Delete


module.exports = router;
