"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mensajeDeNoAutorizacion = exports.mensajeDeValidaciones = exports.handleHttp = void 0;
const handleHttp = (res, error) => {
    res.status(500).send(`Error: ${error}`);
};
exports.handleHttp = handleHttp;
const mensajeDeValidaciones = (res, error) => {
    res.status(400).json({ error });
};
exports.mensajeDeValidaciones = mensajeDeValidaciones;
const mensajeDeNoAutorizacion = (res, error) => {
    res.status(401).json({ error });
};
exports.mensajeDeNoAutorizacion = mensajeDeNoAutorizacion;
