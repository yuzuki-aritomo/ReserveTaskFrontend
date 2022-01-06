import { baseUrl } from 'src/api/ApiConfig'
import { ReservationData } from 'src/api/reservations/ReservationModel'

export interface PostReservationReqData {
  reservation_id: number;
}

export const PostReservationApi = async (postReservationReqData: PostReservationReqData) => {
const reservation_id = postReservationReqData.reservation_id

  return fetch(baseUrl+`reservations/${reservation_id}`, {
    method: 'POST',
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
    return data as ReservationData
  })
  .catch((error) => {
    throw new Error('エラーが発生しました。')
  })
}
