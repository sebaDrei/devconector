const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Conectar base de datos
connectDB();


app.get('/', (req,res) => res.send('API running'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`) ) // Realiza un callback

