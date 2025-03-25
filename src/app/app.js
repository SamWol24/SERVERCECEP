const express =  require("express");
const cors = require("cors");

const config = require("../config");

const app = express();

const roles = require("../routes/rol.routes");
const user = require("./routes/user.routes");

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
app.use("/users", userRoutes);

app.listen(3000, () => {
    console.log("✅ Servidor corriendo en http://localhost:3000");
});

module.exports = app;