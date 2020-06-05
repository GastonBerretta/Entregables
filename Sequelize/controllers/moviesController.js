const db = require('../database/models/index.js')
const sequelize = db.sequelize; 
const Movie = db.Movie;


const moviesController = {

   index: function(req, res){
    Movie.findAll()
        .then(function(results){ //aca estan los resultados directos. no hay un array
            let moviesAll = results;
            return res.render('movies', { moviesAll: moviesAll });
        })
    
   },
   detail: function(req, res){
       Movie.findByPk(req.params.id)
       .then(function(resultado){
        return res.render('detalle', { resultado })
       })
   },
   new: function(req,res){
        Movie.findAll({
           limit:5,
           order:[
            ['releaseDate','DESC']
            ]
       })
       .then(function(resultado){
           return res.render('new',{resultado})
       })
   },
   reco:function(req,res){
    Movie.findAll({
       where:{
          rating: {[db.Sequelize.Op.gte]: 8} 
       } ,
       order:[
        ['rating','DESC']
        ]
   })
   .then(function(resultado){
       return res.render('reco',{resultado})
   })
    },
    searchPost : function(req,res){
        Movie.findAll({
           where:{
              title: {[db.Sequelize.Op.like]:req.body.buscado+"%"} 
           } ,
           order:[
            [req.body.ordenar,'DESC']]
            
       })
       .then(function(buscado){
           return res.render('search',{buscado})
       })
        },

}


module.exports = moviesController;