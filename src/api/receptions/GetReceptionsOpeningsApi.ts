import { baseUrl } from 'src/api/ApiConfig'
import { ReceptionData } from 'src/api/receptions/ReceptionModel'

export interface GetReceptionsOpeningsReqData {
  start?: string;
  end?: string;
}

export interface GetReceptionsOpeningsResData {
  reception_dates: ReceptionData[],
}


export const GetReceptionsOpeningsApi = async (getReceptionsOpeningsReqData?: GetReceptionsOpeningsReqData) => {
  const params = {
    start : getReceptionsOpeningsReqData?.start,
    end : getReceptionsOpeningsReqData?.end
  }

  return fetch(baseUrl+`reservations/openings?${params}`, {
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
    return data as GetReceptionsOpeningsResData
  })
  .catch((error) => {
    throw new Error('エラーが発生しました。')
  })
}
