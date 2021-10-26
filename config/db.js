const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

connectDB = async () => {
    try{
        await mongoose.connect(db) // Ya que retorna una promesa

        // Ver si es necesario poner newUrlParser del que se habla en el video(6:20)

        console.log('MongoDB Conectado...')
    } catch(err){
        console.error(err.message);
        // Terminar el proceso con una falla 
        process.exit(1);
    }
}

module.exports = connectDB;