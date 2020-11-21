const express = require('express');

const PORT = 8000;
const app = express();

app.use('/', require('./routes'));

app.listen(PORT, function(error){
    if(error){
        console.log('error: ', error);
    }
    else{
        console.log('server is running');
    }
});