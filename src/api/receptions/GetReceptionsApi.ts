import { baseUrl } from 'src/api/ApiConfig'
import { ReceptionData } from 'src/api/receptions/ReceptionModel'

export interface GetReceptionsReqData {
  start?: string;
  end?: string;
}

export interface GetReceptionsResData {
  reception_dates: ReceptionData[],
}


export const GetReceptionsApi = async (getReceptionsReqData?: GetReceptionsReqData) => {
  const params = {
    start : getReceptionsReqData?.start,
    end : getReceptionsReqData?.end
  }

  return fetch(baseUrl+`receptions?${params}`, {
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
  .then((response) => {
    if(!response.ok){
      throw new Error('エラーが発生しました。')
    }

    return response.json()
  })
  .then((data) => {
    return data as GetReceptionsResData
  })
  .catch((error) => {
    throw new Error('エラーが発生しました。')
  })
}
