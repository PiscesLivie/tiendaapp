///1. Importar la librería para crear apliaciones web
const express = require('express');

//2. crear una instancia de express (apliacion principal)
const app = express();

//3. definir un puerto sobre el cual funcionara nuestra app
const PORT =  3000;

//4. crear la primera "ruta" cuando el usuario ingrese a la raiz de nuestro sitio
app.get('/', (req, res) => {
    res.send('<h1>Servidor de E-commerce Iniciado</h1><p>NPM y Express Funcionando</p>');
});

//5. Encender el servidor 
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log('Presiona Ctrl+C para detener el servidor');
});