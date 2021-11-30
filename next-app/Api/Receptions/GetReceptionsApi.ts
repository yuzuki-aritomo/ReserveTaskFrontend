import { GetReceptionsReqData, GetReceptionsResData, GetReceptionsApiResData } from "Api/Receptions/Models/GetReceptionsModel"

const baseUrl = 'http://localhost:3001/'

export const GetReceptionsApi = async (getReceptionsReqData?: GetReceptionsReqData) => {
  const params = {
    start : getReceptionsReqData?.start,
    end : getReceptionsReqData?.end
  }
  const res: Response = await fetch(baseUrl+`receptions?${params}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'uid': localStorage.getItem("uid") ?? "",
      'access-token': localStorage.getItem("access-token") ?? "",
      'client': localStorage.getItem("client") ?? "",
    },
  })
  if(res.ok){
    const getReceptionsResData = await res.json() as GetReceptionsResData
    const getReceptionsApiResData: GetReceptionsApiResData = {
      ok: true,
      res: getReceptionsResData,
    }
    return getReceptionsApiResData
  }else{
    const getReceptionsApiResData: GetReceptionsApiResData = {
      ok: false,
      errorText: res.statusText,
    }
    return getReceptionsApiResData
  }
}