const Router = require('express').Router;
const router = Router();

//Form criação de rota
router.get('/', function(req, res){
    
    res.render('notes/create');

});

module.exports = router