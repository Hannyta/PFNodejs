import * as Model from "../models/products.model.js";

export const getAllProducts = async () => {
    return await Model.getAllProducts();
}

export const getAllProductById = async (id) => {
    return await Model.getAllProductById(id);
}

export const createProduct = async (newProduct) => {
    return await Model.createProduct(newProduct);
}

export const updateProduct = async (id, updateProductData) => {
    return await Model.updateProduct(id, updateProductData);
}

export const deleteProduct = async (id) => {
    return await Model.deleteProduct(id);
}