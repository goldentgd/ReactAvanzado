const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('Hola Mundo');
});

app.get('/dashboard', (req, res) => {
    res.send('Bienvenido al inicio del servidor');
});

app.post('/menu', (req, res) => {
    res.send('Nuevo catálogo creado');
});

app.put("/catalogo/:id", (peticion, res) => {
  const { id} = peticion.params;
  const idNumerico = parseInt(id);
  if (!isNaN(idNumerico)) {
    res.send(
      `<h1>Catálogo con id ${id} actualizado</h1>`
    );
  } else res.send(`<h1>Error: id no es un número válido</h1>`);
});

app.delete("/catalogo/:id", (peticion, res) => {
    const { id} = peticion.params;
    const idNumerico = parseInt(id);
    if (!isNaN(idNumerico)) {
        res.send(
        `<h1>Catálogo con id ${id} eliminado</h1>`
        );
    } else res.send(`<h1>Error: id no es un número válido</h1>`);
});

app.all("/catalogo/:anything", (req, res) => {
  res.status(405).send('Método no permitido en esta ruta');
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});