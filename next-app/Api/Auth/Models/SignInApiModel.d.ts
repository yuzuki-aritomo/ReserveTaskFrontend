export interface SignInReqData {
  email: string;
  password: string;
}

export interface SignInResData {
  data: {
    id: string;
    email: string;
    provider: string;
    uid: string;
    allow_password_change: boolean;
    name: string;
    role: number;
    created_at: string;
    updated_at: string;
  }
}
export interface SignInApiResData {
  ok: boolean;
  res?: SignInResData;
  errorText?: string;
}
