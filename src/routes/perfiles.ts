import { Router, Request, Response } from "express";
import { getPerfil, getPerfiles, postPerfiles } from "../controllers/perfiles.controllers";


const router = Router();


router.get('/', getPerfiles)
router.get('/:id', getPerfil)
router.post('/', postPerfiles);


export {router}