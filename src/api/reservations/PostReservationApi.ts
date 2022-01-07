import { baseUrl } from 'src/api/ApiConfig'
import { ReservationData } from 'src/api/reservations/ReservationModel'

export interface PostReservationReqData {
  reception_id: number;
}

export const PostReservationApi = async (postReservationReqData: PostReservationReqData) => {
  const reception_id = postReservationReqData.reception_id

  return fetch(baseUrl+`reservations/`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'uid': localStorage.getItem("uid") ?? "",
      'access-token': localStorage.getItem("access-token") ?? "",
      'client': localStorage.getItem("client") ?? "",
    },
    body: JSON.stringify({
      reception_id: reception_id
    })
  })
  .then((response) => {
    if(!response.ok){
      throw new Error('エラーが発生しました。')
    }

    return response.json()
  })
  .then((data) => {
    return data as ReservationData
  })
  .catch((error) => {
    throw new Error('エラーが発生しました。')
  })
}
