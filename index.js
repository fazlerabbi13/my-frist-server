const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req,res) =>{
    res.send('hello my frist server');
})

app.listen(port, () =>{
    console.log(`my frist server is running on port:${port}`)
})