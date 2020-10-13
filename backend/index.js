const express = require('express');
const app = express();
const morgan = require('morgan');
const { mongoose } = require('./database')

//Setings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/persona',require('./routes/personas.routes'));


//Start server
app.listen(3000,() => {
    console.log('Server on port 3000');
});