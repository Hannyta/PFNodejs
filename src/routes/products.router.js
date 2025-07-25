import { Router } from "express";
const router = Router();

import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/products.controller.js";

import { auth } from "../middlewares/auth.middleware.js";

//Rutas para obtener datos del servidor, solo lee información
    //Obtiene todos los productos del servidor
    router.get("/products", getAllProducts);
    //Obtiene el producto por su ID
    router.get("/products/:id", getProductById);

    //Ruta para enviar datos al servidor, crear un nuevo producto
    router.post("/products", auth, createProduct);

    //Rutas para actualizar algun producto en el servidor
    router.put("/products/:id", auth, updateProduct);

    //Ruta para eliminar productos en el servidor
    router.delete("/products/:id", auth, deleteProduct);

export default router;