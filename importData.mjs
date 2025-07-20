import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

// Obtener __dirname en módulo ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas usando __dirname y variables de entorno para flexibilidad
const dataPath = path.join(__dirname, 'src', 'data', 'products.json');
const serviceAccountPath = process.env.SERVICE_ACCOUNT_KEY_PATH || path.join(__dirname, 'src', 'config', 'serviceAccountKey.json');

// Inicializar Firebase Admin
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

// Leer productos
const rawData = fs.readFileSync(dataPath, 'utf8');
const products = JSON.parse(rawData);

async function importData() {
  for (const product of products) {
    try {
      await db.collection('products').doc(String(product.id)).set(product);
      console.log(`✅ Producto agregado: ${product.name}`);
    } catch (error) {
      console.error(`❌ Error al agregar ${product.name}:`, error);
    }
  }
  console.log('🎉 Importación completada');
}

importData();