const db = require('../database/models/index.js')
const sequelize = db.sequelize; 
const Actor = db.Actor;


const actorsController = {

   index: function(req, res){
    Actor.findAll()
        .then(function(results){ //aca estan los resultados directos. no hay un array
            let actorsAll = results;
            return res.render('actors', { actorsAll: actorsAll });
        })
    
   },
   detail: function(req, res){
       Actor.findByPk(req.params.id)
       .then(function(resultado){
        return res.render('actorDetalle', { resultado })
       })
   },
   new: function(req,res){
        Actor.findAll({
           limit:5,
           order:[
            ['rating','DESC']
            ]
       })
       .then(function(resultado){
           return res.render('actorNew',{resultado})
       })
   },
   reco:function(req,res){
    Actor.findAll({
       where:{
          rating: {[db.Sequelize.Op.gte]: 8} 
       } ,
       order:[
        ['rating','DESC']
        ]
   })
   .then(function(resultado){
       return res.render('actorReco',{resultado})
   })
    },
    searchPost : function(req,res){
        Actor.findAll({
           where:{
              lastName: {[db.Sequelize.Op.like]:req.body.buscado+"%"} 
           } ,
           order:[
            [req.body.ordenar,'DESC']]
            
       })
       .then(function(buscado){
           return res.render('actorSearch',{buscado})
       })
        },

}


module.exports = actorsController;