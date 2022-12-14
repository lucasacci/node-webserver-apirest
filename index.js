const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// handlebars
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');





//servir contenido estatico
app.use(express.static('public'));


app.get('/',  (req, res)=> {
    res.render('home', {
        nombre: 'Luciano casacci',
        titulo: 'Node app'
    })
});
app.get('/generic',  (req, res)=> {
    res.render('generic', {
        nombre: 'Luciano casacci',
        titulo: 'Node app'
    })
});
app.get('/elements',  (req, res)=> {
    res.render('elements', {
        nombre: 'Luciano casacci',
        titulo: 'Node app'
    })
});





app.get('*', (req, res)=> {
    res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})