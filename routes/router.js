import express from "express";
import { getCerveja, getId, getNac, getTip, postCerveja, putCerveja, deleteCerveja } from "../controller/control.js";

const router = express.Router()

router.post('/', postCerveja)
router.get('/', getCerveja)
router.put('/:id', putCerveja)
router.delete('/:id', deleteCerveja)
router.get('/:id', getId)
router.get('/nacionalidade/:nacionalidade', getNac)
router.get('/tipo/:tipo', getTip)

export { router }