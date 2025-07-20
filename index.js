import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Bienvenidos a la API REST"})
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log (`http://localhost:${PORT}`));