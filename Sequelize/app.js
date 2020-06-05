const express = require('express');
const app = express();
const moviesRouter = require('./routes/movies');
const actorsRouter = require('./routes/actors');

//template engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


//CAPTURAR DATOS QUE RECIBAMOS POR POST, ALMACENARNOS EN FORMA DE OBJETO LITERAL Y PODER GUARDARLOS EN FORMATO JSON
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.listen(3070, function(){
    console.log('running on 3070');
})


//rutas
app.use('/movies', moviesRouter)
app.use('/actors', actorsRouter)