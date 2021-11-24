export interface SignOutResData {
  success: string
}
export interface SignOutApiResData {
  ok: boolean;
  res?: SignOutResData;
  errorText?: string;
}