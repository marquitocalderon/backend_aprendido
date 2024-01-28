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
exports.deletePerfiles = exports.updatePefiles = exports.postPerfiles = exports.getPerfiles = exports.getPerfil = void 0;
const error_hadle_1 = require("../utils/error.hadle");
const perfiles_interface_1 = require("../interfaces/perfiles.interface");
const conexion_1 = require("../conexionBaseDatos/conexion");
function getPerfil(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const parametro = req.params.id;
            const query = `SELECT * FROM perfiles where idperfil = ${parametro}`;
            // Ejecutar la consulta
            const result = yield conexion_1.conectar.query(query);
            // Enviar un mensaje personalizado de éxito con estado 200 (OK)
            res.status(200).json(result.rows);
        }
        catch (error) {
            (0, error_hadle_1.handleHttp)(res, 'ERROR_GET_ID');
        }
    });
}
exports.getPerfil = getPerfil;
function getPerfiles(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = 'SELECT * FROM perfiles';
            // Ejecutar la consulta
            const result = yield conexion_1.conectar.query(query);
            // Enviar un mensaje personalizado de éxito con estado 200 (OK)
            res.status(200).json(result.rows);
        }
        catch (error) {
            (0, error_hadle_1.handleHttp)(res, 'ERROR_GET');
        }
    });
}
exports.getPerfiles = getPerfiles;
function postPerfiles(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resultados = req.body;
            if (!(0, perfiles_interface_1.validacionDeDatosInterface)(resultados)) {
                return (0, error_hadle_1.mensajeDeValidaciones)(res, "Estás enviando mal los datos. Mira la documentación.");
            }
            const { nombre_perfil } = resultados;
            // Parámetros para la consulta
            const values = [nombre_perfil];
            const query = 'INSERT INTO perfiles (nombre_perfil) VALUES ($1)';
            const result = yield conexion_1.conectar.query(query, values);
            res.status(200).json({ message: 'La operación se realizó correctamente.' });
        }
        catch (error) {
            // Maneja todos los errores aquí
            if (error.code === '23505' && error.constraint === 'perfiles_nombre_perfil_key') {
                return (0, error_hadle_1.mensajeDeValidaciones)(res, `El nombre de perfil  ya existe.`);
            }
            (0, error_hadle_1.handleHttp)(res, 'ERROR_POST');
        }
    });
}
exports.postPerfiles = postPerfiles;
function updatePefiles(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
        }
        catch (error) {
            (0, error_hadle_1.handleHttp)(res, 'ERROR_UPDATE');
        }
    });
}
exports.updatePefiles = updatePefiles;
function deletePerfiles(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
        }
        catch (error) {
            (0, error_hadle_1.handleHttp)(res, 'ERROR_DELETE');
        }
    });
}
exports.deletePerfiles = deletePerfiles;
