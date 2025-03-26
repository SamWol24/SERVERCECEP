const express =  require("express");
const cors = require("cors");
const config = require("../config");

const app = express();

const roles = require("../routes/rol.routes");
//controles para user y auth
const users = require("../routes/user.routes");
const auths = require("../routes/auth.routes");

//middlewares de configuracion
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//config
app.set('port',config.app.port);//middlewares de configuracion
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//config
app.set('port',config.app.port);

//Rutas
app.use("/api/rol", roles);
// Rutas user y auth
app.use("/api/user", users);
app.use("/api/auth", auths);

module.exports = app;