const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Set The View Engine
app.set('view engine','ejs');

// Set The Static Path
app.use(express.static('static'));


// Root 
app.get('/',(req,res) => {
    res.render('index');
});

app.listen(PORT,(req,res) => {
    console.log(`Listening on Port ${PORT}`);
});

