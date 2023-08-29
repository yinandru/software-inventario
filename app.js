import bd from './database/database.js'
import express from 'express'
import session from 'express-session';
import bodyParser from 'body-parser'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { checkAuth } from './middlewares/auth.js'
//Routes
import authRoutes from './routes/auth.routes.js';
import adminRoutes from './routes/admin.routes.js';

const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(session({
  secret: 'administrador', // Cambia esto por una cadena de caracteres segura
  resave: false,
  saveUninitialized: true
}));

// Configurar middleware estático para servir archivos CSS y JS
app.use(express.static('assets'));
app.use(express.static(path.join(__dirname)))
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar el motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 


//Rutas
app.use('/', authRoutes);
app.use('/', checkAuth, adminRoutes);



// Establecer la conexión a la base de datos
bd.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa.', bd.config.database);
  })
  .catch(error => {
    console.error('Error al conectar a la base de datos:', error);
  });


app.listen(port, (req, res) => {
    console.log(`Servidor inicializado en el puerto: localhost:${port}`)
})