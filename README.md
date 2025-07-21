# PFNodejs

Proyecto final del curso de Talento Tech Back End Node JS que consiste en hacer un Sistema de Gestión de productos con express y Firebase. Permite realizar operaciones CRUD (Crear, leer, actualizar y eliminar) sobre una colección de productos almacenados en Firestore.

##  ⚙ Intalación

1. Clonar el repositorio

[git clone https://github.com/Hannyta/PFNodejs.git]

2. Instalar las dependencias

``` shell
npm install
```

3. Configurá variables de entorno usando .env-example como referencia.

4. Ejecutá el proyecto en modo desarrollo

``` shell
npm run dev
```

## 💻 Tecnologías utilizadas

- Node.js v20+ 

- Express.js

- Firebase Firestore

- CORS (Control de acceso)

- JWT para autenticación

- dotenv para variables de entorno

- Body-parser para manejo de peticiones HTTP

## 📁Estructura del proyecto

src/
├── routes/          # Rutas de la API
├── controllers/     # Lógica de negocio
├── middlewares/     # Configuración de seguridad y parseo
├── services/        # Conexión con Firebase
├── models/          # Definir la estructura y la lógica relacionada con los datos
.env                 # Variables de entorno
.env-example         # Referencia de estructura
README.md            # Documentación

## 🚀 Endpoints principales

Puedes importar la colección de Postman para probar los endpoints:

[https://.postman.co/workspace/My-Workspace~fcadb274-1ad5-4ac2-819e-2a2ef643f45a/collection/31991877-4e76119c-04f3-4303-b201-648ff611c673?action=share&creator=31991877]

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/products` | Obtiene todos los productos |
| GET | `/api/products/:id` | Obtiene un producto por ID |
| POST | `/api/products` | Crea un nuevo producto |
| POST | `/api/auth/login` | Valida las credenciales y genera un token de autenticación |
| PUT | `/api/products/:id` | Actualiza un producto existente |
| DELETE | `/api/products/:id` | Elimina un producto por ID |

##  💜 Agradecimiento

Este proyecto es el reflejo de los conocimientos adquiridos en el programa Back End Node JS Comision-25023 Talento Tech, gracias al apoyo y la guía del instructor Jean Paul Ferreira y la tutora Sofía Tarabusi, quienes cada martes y jueves compartieron su experiencia, dedicación y paciencia para ayudarnos a crecer profesionalmente. ¡Gracias por la vocación y el acompañamiento brindado durante todo el proceso!

## 👩‍💻 Autor

Desarrollado por Hannymer Linares

## 📃 Licencia

Este proyecto está bajo la licencia MIT. ¡Siéntete libre de usarlo citando a la autora!