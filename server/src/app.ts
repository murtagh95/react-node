import express from 'express';

const PORT = 3000;
const server = express();

server.get("/", (req, res) => {
    res.send("holaS")
})

server.listen(PORT, () => {
    console.log("Servidor a la escuchaS")
})
