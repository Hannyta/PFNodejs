# PFNodejs

Proyecto final del curso de Talento Tech Back End Node JS que consiste en hacer un Sistema de Gestión de productos con express y Firebase.

## Intalación

1. Clonar el repositorio

[git clone https://github.com/Hannyta/PFNodejs.git]

2. Instalar las dependencias

``` shell
npm install
```

3. Configurá variables de entorno usando .env-example como referencia.

3. Ejecutá el proyecto en modo desarrollo

``` shell
npm run dev
```

## Tecnologías utilizadas

- Node.js + Express

- Firebase Firestore

- CORS

- JWT para autenticación

- dotenv para variables de entorno

- Body Parser para manejo de peticiones HTTP

## Estructura del proyecto

src/
├── data/            # Archivo json con los productos
├── routes/          # Rutas de la API
├── controllers/     # Lógica de negocio
├── middlewares/     # Configuración de seguridad y parseo
├── services/        # Conexión con Firebase
.env                 # Variables de entorno
.env-example         # Referencia de estructura
README.md            # Documentación

## 📋 Endpoints principales

[https://.postman.co/workspace/My-Workspace~fcadb274-1ad5-4ac2-819e-2a2ef643f45a/collection/31991877-4e76119c-04f3-4303-b201-648ff611c673?action=share&creator=31991877]

Método	Ruta	Descripción
GET	/products	Listar todos los productos
GET	/products/id	Listar el producto que corresponde al id
POST	/products	Crear un nuevo producto
PUT	/products/:id	Actualizar un producto
DELETE	/products/:id	Eliminar un producto