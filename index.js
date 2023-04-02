const expres = require('express');

const app = expres();
app.set('view engine', 'ejs');
app.use(expres.static('public'));
app.use(expres.urlencoded({extended: false}));
const PORT = 3000;

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/user/polina', (req, res) => {
    let data = {username: req.params.username};
    res.render('polina', data);
}); 

app.get('/user/oleg', (req, res) => {
    let data = {username: req.params.username};
    res.render('oleg', data);
    
});

app.post('/check-user', (req, res) => {
    let username = req.body.username;
    if (username == '') 
        return res.res.redirect('/');
    else
        return res.redirect('/user/' + username);
});

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
});

