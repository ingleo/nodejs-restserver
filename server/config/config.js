//Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Vencimiento de token
// 60 seg * 60 min * 24 horas * 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//Seed de autenticación
process.env.SEED = process.env.SEED || 'seed-en-dev';

//BD
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //urlDB = mongodb://leini:leini25@ds245210.mlab.com:45210/cafe
    //urlDB = 'mongodb+srv://leini:zJYE8TakNtq0qmqA@udemy-node-cafe-h8y3l.mongodb.net/cafe'
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

// google client id
process.env.CLIENT_ID = process.env.CLIENT_ID || '554426719826-d01c5a9tr9rrm65bu250qp0o88jdurbf.apps.googleusercontent.com';