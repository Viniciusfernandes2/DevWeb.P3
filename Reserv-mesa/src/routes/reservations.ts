import { Router } from 'express';
import {
  listReservations,
  showForm,
  createReservation,
  updateReservation,
  deleteReservation
} from '../controller/reservationsController';

const router = Router();

// Formulário inicial
router.get('/', showForm);
router.post('/reservas', createReservation);

// Listar
router.get('/reservas', listReservations);

// Atualizar
router.post('/reservas/:id', updateReservation);

// Deletar
router.post('/reservas/:id/delete', deleteReservation);

export default router;