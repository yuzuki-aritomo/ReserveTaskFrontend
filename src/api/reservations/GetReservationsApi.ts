import { baseUrl } from 'src/api/ApiConfig'
import { ReservationData } from 'src/api/reservations/ReservationModel'

export interface GetReservationsReqData {
  start?: string;
  end?: string;
}

export interface GetReservationsResData {
  data: ReservationData[],
}

export const GetReservationsApi = async (getReservationsReqData?: GetReservationsReqData) => {
  const params = {
    start : getReservationsReqData?.start,
    end : getReservationsReqData?.end
  }

  return fetch(baseUrl+`reservations?${params}`, {
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
    return data as GetReservationsResData
  })
  .catch((error) => {
    throw new Error('エラーが発生しました。')
  })
}
