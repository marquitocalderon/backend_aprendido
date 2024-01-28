import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {router} from './routes/index';
import {conectarBaseDeDatos} from './conexionBaseDatos/conexion'
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

conectarBaseDeDatos()

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
