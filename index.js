const express = require('express');

const app = express();

//Setup view template
app.set('view engine', 'pug');
app.set('views', './views');

//Setup dotenv
require('dotenv').config();
if (process.env.NODE_ENV === "development"){
    require('dotenv').config({path: "./.env.development", override: true});
}

//Serve static files that can be accessed directly from browser
app.use(express.static( "./public"));

//Home page
app.get('/', (req, res) => {
	res.render('index', {title: "Home page"});
});

//Api
const api = require('./routes/index');
app.use('/api', api);

//Not found page
app.use((req, res) => {
    res.status(404).render('notFound', {title: "Not Found"})
});

//Connect Database
const Database = require('./Database');
Database.connect(process.env.DB_URI);

//Port configured in dotenv, on which the app listen
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});