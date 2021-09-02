require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 8000, () => {

    console.log(`Servidor ejecutando en puerto: ${process.env.PORT || 8000}`);

});

// Metodos

app.post("/post", (req, res) => {
    
    return res.send("Holiwis desde el post");

});

app.get("/get", (req, res) => {
    
    return res.send("<h1>Escuchando desde el GET nwn</h1>")

});


