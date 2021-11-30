import { ReceptionData } from "Models/ReceptionModel";

export interface GetReceptionsReqData {
  start?: string;
  end?: string;
}

export interface GetReceptionsResData {
  data: ReceptionData[],
}
export interface GetReceptionsApiResData {
  ok: boolean;
  res?: GetReceptionsResData;
  errorText?: string;
}
