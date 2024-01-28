import { Response } from "express";

const handleHttp = (res: Response, error: string) => {
  res.status(500).send(`Error: ${error}`);
};

const mensajeDeValidaciones = (res: Response, error: string) => {
  res.status(400).json({ error });
};


const mensajeDeNoAutorizacion = (res: Response, error: string) => {
  res.status(401).json({ error });
};


export { handleHttp, mensajeDeValidaciones , mensajeDeNoAutorizacion};
