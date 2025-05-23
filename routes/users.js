var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/joedio', function(req, res, next) {
  res.send('Olá, Joédio!');
});

module.exports = router;
var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const usuarios = [
      { id: 1, nome: 'Amanda', idade: '20' },
      { id: 2, nome: 'Barbara', idade: '38' },
      { id: 3, nome: 'Carol', idade: '15' },
      { id: 4, nome: 'Daniela', idade: '24' },
      { id: 5, nome: 'Elisa', idade: '4' },
      { id: 6, nome: 'Francine', idade: '74' },
      { id: 7, nome: 'Gabriela', idade: '44' },
      { id: 8, nome: 'Heloísa', idade: '57' },
      { id: 9, nome: 'Isabela', idade: '42' },
      { id: 10, nome: 'Janaina', idade: '75' },
      { id: 11, nome: 'Katrine', idade: '47' },
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('usuarios', {
      titulo: 'Meus usuários',
      usuariosParaView: usuarios // Passando o array para a view
    });
  });

  module.exports = router;
