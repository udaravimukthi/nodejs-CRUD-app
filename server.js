const express = require('express');
const bodyParser = require('body-parser');

//create the express app
const app = express(); 

//parse request of content type= url encoded
app.use(bodyParser.urlencoded({extended: true}));

//json
app.use(bodyParser.json());

//configure the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//connecting to database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database existing now', err);
    process.exit();
});

//route
app.get('/', (req,res) => {
    res.json({"message": "welcome to notebook"});
});

require('./app/routes/note.routes.js')(app);

//listen
app.listen(3000, ()=> {
    console.log("server is listening on port 3000");
});


