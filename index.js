//Configurações

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('home');
});

app.listen(port, () => {
    console.log(`Projeto rodando na porta: ${port}`);
});