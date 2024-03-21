import {Router} from 'express'
const router = Router()

//listar 
router.get('/reservas')
//detalle
router.get('/reservas/:id')
//registra
router.post('/reservas/registro')
//actualizar 
router.put('/reservas/actualizar/:id')
//eliminar 
router.delete('/reservas/eliminar/:id')


export default router