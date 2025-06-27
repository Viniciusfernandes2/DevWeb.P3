import { Request, Response } from 'express';
import Reservation from '../models/Reservation';

export const listReservations = async (req: Request, res: Response) => {
  const filter = {} as any;
  if (req.query.customer) filter.customerName = req.query.customer;
  if (req.query.table) filter.tableNumber = Number(req.query.table);

  const reservations = await Reservation.find(filter).sort('reservationDate');
  res.render('reservations', { reservations });
};

export const showForm = (req: Request, res: Response) => {
  res.render('index');
};

export const createReservation = async (req: Request, res: Response) => {
  try {
    await Reservation.create(req.body);
    res.redirect('/reservas');
  } catch (err) {
    res.status(400).send('Erro ao criar reserva');
  }
};

export const updateReservation = async (req: Request, res: Response) => {
  try {
    await Reservation.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/reservas');
  } catch (err) {
    res.status(400).send('Erro ao atualizar reserva');
  }
};

export const deleteReservation = async (req: Request, res: Response) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    res.redirect('/reservas');
  } catch (err) {
    res.status(400).send('Erro ao deletar reserva');
  }
};