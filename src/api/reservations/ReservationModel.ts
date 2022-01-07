export interface ReservationData {
  reservation_id: number;
  start: string;
  end: string;
  fp_name: string;
  reserved: boolean;
  canceled: boolean;
}