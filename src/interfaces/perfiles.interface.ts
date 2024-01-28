export interface PerfilesInterface {
    nombre_perfil : number;
}

export const validacionDeDatosInterface = (perfiles: Partial<PerfilesInterface>): perfiles is PerfilesInterface => {
    return (
        typeof perfiles.nombre_perfil === 'string'
    );
};