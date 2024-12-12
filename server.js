const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/guardar', (req, res) => {
    const { nombre } = req.body;

    // Guardar los datos en un archivo
    fs.appendFile(datos.txt, `Nombre: ${nombre}\n`, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al guardar los datos');
        } else {
            res.send({ mensaje: 'Datos guardados con éxito' });
        }
    });
});

app.listen(3000, () => console.log('Servidor ejecutándose en http://localhost:3000'));
