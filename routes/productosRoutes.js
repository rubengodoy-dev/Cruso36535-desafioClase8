const express = require("express")
const { Router } = express
const router = Router()

const Contenedor = require("../data/productos")
const data = new Contenedor()

//devuelve todos los productos
router.get('/', (req, res) => {
    let productos = data.getAll()
    res.status(200).json(productos)
});

//devuelve un producto según su id.
//Para el caso de que un producto no exista, se devolverá el objeto: { error : 'producto no encontrado' }
router.get('/:id', (req, res) => {
    let id = req.params.id
    let producto = data.getById(id)

    if (producto != null) {
        res.status(200).json(producto)
    } else {
        res.status(400).json({ error: 'producto no encontrado' })

    }
});

//recibe y agrega un producto, y lo devuelve con su id asignado.
router.post('/', (req, res) => {
    let mensaje = req.body
    let producto = data.create(mensaje)

    if (producto != null) {
        res.status(200).json(producto.id)
    } 
});
//recibe y actualiza un producto según su id.
router.put('/:id', (req, res) => {
    let id = req.params.id
    let mensaje = req.body
    let producto = data.update(id,mensaje)

    if (producto != null) {
        res.status(200).json(producto.id)
    } else {
        res.status(400).json({ error: 'producto no encontrado' })

    }
});


//elimina un producto según su id.
router.delete('/:id', (req, res) => {
    let id = req.params.id
    let producto = data.delete(id)

    if (producto != null) {
        res.status(200).json(producto.id)
    } else {
        res.status(400).json({ error: 'producto no encontrado' })
    }
});



module.exports = router;


