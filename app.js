const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
// this line just sets hbs as the language for the views

app.set('views', path.join(__dirname, 'views'));
// this line ^ tells our app which folder to find out views 
// in when we run res.render

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));
