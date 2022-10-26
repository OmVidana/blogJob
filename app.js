const express = require("express")
const path = require('path')
const bodyParser = require('body-parser')
const app = express();
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// let likes = [0, 0, 0, 0, 0, 0];
let comments = [
    { user: 'Gabrich', comment: 'Excelente! La música clásica que seleccionaron es poesía pura.', canBeDeleted: false },
    { user: 'Esteban', comment: '¡Puro Eminem, si señor!', canBeDeleted: false },
    { user: 'Omar', comment: 'En mi opinión faltaron muchas canciones!!', canBeDeleted: false }
];

colors = ['currentColor','currentColor','currentColor','currentColor','currentColor','currentColor'];

// primerLike = document.queryselectorAll("")
let userCommentName = 'Guest';
let iteratorDeletes = 0;
let iteratorEdits = 0;
app.get('/', (req, res)=> {
    res.render('index', {commentsFront : comments, actualUser : userCommentName, colors : colors});
});

//Comentarios (Agregar, editar, eliminar)
app.post('/comment', (req, res) => {
    let textWrited = req.body.textArea;
    comments.push({ user: userCommentName, comment: textWrited, canBeDeleted: true });
    res.render('index', {commentsFront : comments, actualUser : userCommentName, colors : colors});
});

app.post('/edit', (req, res) => {
    iteratorEdits = req.body.edit;
    res.render('edit', {commentsFront : comments, actualUser : userCommentName});
});

app.post('/edited',(req, res) => {
    comments[iteratorEdits].comment = req.body.textAreaEdit;
    res.render('index', {commentsFront : comments, actualUser : userCommentName, colors : colors});
});

app.post('/delete', (req, res) => {
    iteratorDeletes = req.body.delete;
    if (comments[iteratorDeletes].canBeDeleted == true) {
        delete comments[iteratorDeletes];
    }
    res.render('index', {commentsFront : comments, actualUser : userCommentName, colors : colors});
});


app.post('/like1', (req, res) =>{
    colors[0] = '#FFFF';
    res.render('index', {commentsFront : comments, actualUser : userCommentName, colors : colors});
});
app.post('/like2', (req, res) =>{
    colors[1] = '#FFFF';
    res.render('index', {commentsFront : comments, actualUser : userCommentName, colors : colors});
});
app.post('/like3', (req, res) =>{
    colors[2] = '#FFFF';
    res.render('index', {commentsFront : comments, actualUser : userCommentName, colors : colors});
});
app.post('/like4', (req, res) =>{
    colors[3] = '#FFFF';
    res.render('index', {commentsFront : comments, actualUser : userCommentName, colors : colors});
});
app.post('/like5', (req, res) =>{
    colors[4] = '#FFFF';
    res.render('index', {commentsFront : comments, actualUser : userCommentName, colors : colors});
});
app.post('/like6', (req, res) =>{
    colors[5] = '#FFFF';
    res.render('index', {commentsFront : comments, actualUser : userCommentName, colors : colors});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
