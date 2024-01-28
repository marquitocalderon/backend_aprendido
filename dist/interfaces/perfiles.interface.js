"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validacionDeDatosInterface = void 0;
const validacionDeDatosInterface = (perfiles) => {
    return (typeof perfiles.nombre_perfil === 'string');
};
exports.validacionDeDatosInterface = validacionDeDatosInterface;
