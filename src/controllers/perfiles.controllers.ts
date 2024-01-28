import { Request , Response } from "express"
import { handleHttp, mensajeDeValidaciones } from "../utils/error.hadle"
import { PerfilesInterface, validacionDeDatosInterface } from "../interfaces/perfiles.interface"
import { conectar } from "../conexionBaseDatos/conexion"


export async function getPerfil(req: Request, res: Response){
    try {
      const parametro = req.params.id
      const query = `SELECT * FROM perfiles where idperfil = ${parametro}`;
      // Ejecutar la consulta
      const result = await conectar.query(query);
  
      // Enviar un mensaje personalizado de éxito con estado 200 (OK)
      res.status(200).json(result.rows);
    } catch (error) {
       handleHttp(res, 'ERROR_GET_ID')
    }
}

export async function getPerfiles(req: Request, res: Response){
    try {
     const query = 'SELECT * FROM perfiles';
    // Ejecutar la consulta
    const result = await conectar.query(query);

    // Enviar un mensaje personalizado de éxito con estado 200 (OK)
    res.status(200).json(result.rows);
    } catch (error) {
       handleHttp(res, 'ERROR_GET')
    }
}


export async function postPerfiles(req: Request, res: Response){
    try {
        const resultados: Partial<PerfilesInterface> = req.body;
        if (!validacionDeDatosInterface(resultados)) {
            return mensajeDeValidaciones(res, "Estás enviando mal los datos. Mira la documentación.");
        }
        const { nombre_perfil } = resultados;
        // Parámetros para la consulta
        const values = [nombre_perfil];
        const query = 'INSERT INTO perfiles (nombre_perfil) VALUES ($1)';
        const result = await conectar.query(query, values);
        
        res.status(200).json({ message: 'La operación se realizó correctamente.'});

        
    } catch (error: any) {
        // Maneja todos los errores aquí
        if (error.code === '23505' && error.constraint === 'perfiles_nombre_perfil_key') {
            return mensajeDeValidaciones(res, `El nombre de perfil  ya existe.`);
        }
        handleHttp(res, 'ERROR_POST');
    }
}

export async function updatePefiles(req: Request, res: Response){
    try {
        
    } catch (error) {
       handleHttp(res, 'ERROR_UPDATE')
    }
}

export async function deletePerfiles(req: Request, res: Response){
    try {
        
    } catch (error) {
       handleHttp(res, 'ERROR_DELETE')
    }
}

