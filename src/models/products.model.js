import {db} from "./firebase.js";

import{
    collection,
    getDocs,
    doc,
    getDoc,
    addDoc,
    setDoc,
    deleteDoc,
} from "firebase/firestore";

const productsCollection = collection(db, "products");

//GET
export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productsCollection);
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error(error);
  }
};

//GET
export const getProductById = async (id) => {
  try {
    const docRef = doc(productsCollection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

//POST
export const createProduct = async (newProduct) => {
  try {
    // referencia al documento con tu id
    const docRef = doc(productsCollection, newProduct.id);

    // setear el documento
    await setDoc(docRef, newProduct);

    // const docRef = await addDoc(productsCollection, newProduct);
    return { id: docRef.id, ...newProduct };
  } catch (error) {
    console.error(error);
  }
};

//PUT
export const updateProduct = async (id, updatedProductData) => {
  try {
    const docRef = doc(productsCollection, id);
    await setDoc(docRef, updatedProductData, { merge: true });
    return { id, ...updatedProductData };
  } catch (error) {
    console.error(error);
    return null;
  }
};

//DELETE
export const deleteProduct = async (id) => {
  try {
    const docRef = doc(productsCollection, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};