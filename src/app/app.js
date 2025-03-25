const express = require("express");
const cors = require("cors");
const config = require("../config");

const app = express();

const roles = require("../routes/rol.routes");
const userRoutes = require("../routes/user.routes");

//middlewares de configuracion
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config
app.set("port", config.app.port);//middlewares de configuracion

//Rutas
app.use("/api/rol", roles);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("¡Servidor funcionando correctamente!");
});

module.exports = app;