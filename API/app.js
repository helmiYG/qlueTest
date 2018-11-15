const express = require('express');
const app = express()
const index = require('./routes/index.js');

app.use('/', index)


app.listen(3000, () => {
    console.log('masuk pak ekooo');
})