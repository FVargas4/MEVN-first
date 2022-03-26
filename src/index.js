const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/mevn=database').then(db => console.log('Db is connected')).catch(err => console.error(err));

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/tasks', require('./routes/tasks'));

// Static files

app.use(express.static(__dirname + '/public'));

//Send success messagge when runnig the server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});

