const mongoose = require('mongoose');
require('dotenv').config({path: '.env'});

const MONGOBD_URI = process.env.MONGOBD_URI;

mongoose.connect(MONGOBD_URI,{

})
  .then(db => console.log('Conectado a la base de datos'))
  .catch(err => console.log(err));