const app = require("./app/app");
app.get("/", (req, res) => {
    res.send("¡Servidor funcionando correctamente!");
});

app.listen(app.get('port'), ()=>{
    console.log(`servidor corriendo en el puerto ${app.get('port')}`);
});