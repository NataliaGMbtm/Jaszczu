const express = require('express');
const hbs = require ('express-handlebars');

const app = express();
app.engine('.hbs', hbs.engine({
    extname: '.hbs'}));
app.set('view engine', '.hbs');


//app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home')
});
app.get('/my-look', (req, res) => {
    res.render('layouts/me')
});
app.get('/how-old', (req, res) => {
   res.render('layouts/how-old')
});
app.get('/fav-dish', (req, res) => {
   res.render('layouts/fav-dish')
});
app.get('/how-old/five', (req,res) => {
    res.render('layouts/five-old')
});
app.get('/how-old/fifteen', (req,res) => {
    res.render('layouts/fifteen-old')
});



app.listen(3000, 'localhost');