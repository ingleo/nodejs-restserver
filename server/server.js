require("./config/config");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// enable cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

//habilitar la carpeta publica
app.use(express.static(path.resolve(__dirname, "../public")));

//configuración global de rutas
app.use(require("./routes/index"));

mongoose.connect(
  process.env.URLDB,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  (err, res) => {
    if (err) throw err;
    console.log("Se ha conectado a la BD");
  }
);

app.listen(process.env.PORT, () => {
  console.log("Escuchando puerto", process.env.PORT);
});
