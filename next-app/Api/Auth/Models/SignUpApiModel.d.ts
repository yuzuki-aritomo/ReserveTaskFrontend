export interface SignUpReqData {
  email: string;
  password: string;
  name: string;
  role: number;
}
export interface SignUpResData {
  status: string;
  data: {
    id: number;
    email: string;
    provider: string;
    allow_password_change: boolean;
    name: string;
    role: number;
    created_at: string;
    updated_at: string;
  }
}
export interface SignUpApiResData {
  ok: boolean;
  res?: SignUpResData;
  errorText?: string;
}