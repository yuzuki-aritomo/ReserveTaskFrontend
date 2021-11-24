export interface PostReceptionsReqData {
  register_date: string[],
}

export interface PostReceptionsResData {
  data: [
    {
      reception_id: number;
      user_name: string;
      start: string;
      end: string;
      reserved: boolean;
      canceled: boolean;
    }
  ]
}
export interface PostReceptionsApiResData {
  ok: boolean;
  res?: PostReceptionsResData;
  errorText?: string;
}
