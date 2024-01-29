import { Client , Pool } from "pg";

// // Configuración de la conexión a PostgreSQL
// const conectar = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'prueba',
//   password: 'marquinho1701',
//   port: 5432, // Puerto predeterminado de PostgreSQL
// });



const conectar = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:true
})


// Función para conectar y manejar la lógica de conexión
export async function conectarBaseDeDatos(): Promise<void> {
    try {
      await conectar.connect();
      console.log('Conexión exitosa a PostgreSQL');
    } catch (error) {
      console.error('Error al conectar a PostgreSQL:', (error as Error).message);
    }
}

export { conectar, };
