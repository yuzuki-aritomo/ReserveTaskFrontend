import { baseUrl } from 'src/api/ApiConfig'

export interface DeleteReservationReqData {
  reservation_id: number;
}

export const DeleteReservationApi = async (deleteReservationReqData: DeleteReservationReqData) => {
  const reservation_id = deleteReservationReqData.reservation_id

  return fetch(baseUrl+`reservations/${reservation_id}`, {
    method: 'DELETE',
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
  })
  .catch((error) => {
    throw new Error('エラーが発生しました。')
  })
}
