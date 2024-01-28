"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectar = exports.conectarBaseDeDatos = void 0;
const pg_1 = require("pg");
// // Configuración de la conexión a PostgreSQL
// const conectar = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'prueba',
//   password: 'marquinho1701',
//   port: 5432, // Puerto predeterminado de PostgreSQL
// });
const conectar = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
    // ssl:true
});
exports.conectar = conectar;
// Función para conectar y manejar la lógica de conexión
function conectarBaseDeDatos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield conectar.connect();
            console.log('Conexión exitosa a PostgreSQL');
        }
        catch (error) {
            console.error('Error al conectar a PostgreSQL:', error.message);
        }
    });
}
exports.conectarBaseDeDatos = conectarBaseDeDatos;
