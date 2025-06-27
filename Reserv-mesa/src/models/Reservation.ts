import { Schema, model } from 'mongoose';

export interface IReservation {
  customerName: string;
  tableNumber: number;
  reservationDate: Date;
  status: 'reservado' | 'ocupado' | 'disponível';
  contact: string;
}

const reservationSchema = new Schema<IReservation>({
  customerName: { type: String, required: true },
  tableNumber: { type: Number, required: true },
  reservationDate: { type: Date, required: true },
  status: { type: String, enum: ['reservado','ocupado','disponível'], default: 'reservado' },
  contact: { type: String, required: true }
});

export default model<IReservation>('Reservation', reservationSchema);