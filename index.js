const express= require("express")
const app= express()
const port = 8080

const productosRouter= require("./routes/productosRoutes")
const path = require('path')


app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, 'public')))

app.use("/api/productos",productosRouter)

const server = app.listen(port, () => {
    console.log(`conectado http escuchando en ${server.address().port}`);
})

server.on("error", error => console.error(`Error en servidor  ${error}`))