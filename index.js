//Configurações
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

//Db
const db = require('./db/connection')

//template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extends: true}))

//importação de rotas
const noteRoutes = require('./routes/notes')

app.get('/', function(req, res){
    res.render('home');
});

app.use('/notes', noteRoutes);

db.iniDb((err, db)=>{
    if(err){
        console.log(err)
    } else {
        console.log("o banco conectou com sucesso");
        app.listen(port, () => {
            console.log(`Projeto rodando na porta: ${port}`);
        });
    }
})