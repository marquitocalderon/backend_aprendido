import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = __dirname;
const router = Router();

const limpiarFileName = (filename: string) => {
  const file = filename.split(".").shift();
  return file;
};

// Lee los archivos en el directorio actual (__dirname)
readdirSync(PATH_ROUTER).forEach((filename) => {
  const cleanName = limpiarFileName(filename);

  if (cleanName !== "index") {
    import(`./${cleanName}`).then((module) => {
      if (module.router) {
        router.use(`/${cleanName}`, module.router);
      }
    }).catch(error => {
      console.error(`Error al importar el módulo ${cleanName}:`, error);
    });

    console.log(cleanName);
  }
});

export { router };
