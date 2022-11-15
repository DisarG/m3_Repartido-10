const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const app = express();
app.use(express.static(__dirname + '/public')) //obtenemos todos elementos que esten el public

//Middelware
app.use(express.json());

app.use("/", routes);

//servidor
mongoose.connect('mongodb+srv://Maximiliano:matea-repa10@maximiliano.guychak.mongodb.net/?retryWrites=true&w=majority').then(() => {
    app.listen(3000, () => {
        console.log("Server abierto en el puerto 3000");
    });
})

module.exports = app;