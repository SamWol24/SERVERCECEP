const app = require("./app/app");
app.get("/", (req, res) => {
    res.send("¡Servidor funcionando correctamente!");
});

