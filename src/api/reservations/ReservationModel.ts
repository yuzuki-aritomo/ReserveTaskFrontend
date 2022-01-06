export interface ReservationData {
  reservation_id: number;
  start: string;
  end: string;
  customer_name: string;
  reserved: boolean;
  canceled: boolean;
}