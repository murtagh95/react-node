import express from 'express';
import morgan from "morgan";

const PORT = process.env.PORT || 3000;
const server = express();

if(process.env.ENVIRONMENT != 'production'){
    server.use(morgan('dev'));
}

server.get("/", (req, res) => {
    res.send("hola mundo")
})

server.listen(PORT, () => {
    console.log(`Servidor a la escucha en puerto ${PORT}`)
})
