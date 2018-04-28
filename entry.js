const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/routes');
var app = express();

mongoose.connect('mongodb://admin:admin123@ds161459.mlab.com:61459/shoppinglist');
mongoose.connection.on('connected', () => {
    console.log('db connected');
});
mongoose.connection.on('error', (err) => {
    console.log('db error: ' + err);
});

app.use(cors());
app.use(bodyparser.json());

app.use('/api', routes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) =>{
   res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/', (req, res)=> {
    res.send('ok');
})

var port = process.env.PORT || 8080
app.listen(port, () => {
    console.log('server started on port: '+port);
})