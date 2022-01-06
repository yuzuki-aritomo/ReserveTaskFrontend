import { baseUrl } from 'src/api/ApiConfig'
import { ReceptionData } from 'src/api/receptions/ReceptionModel'

export interface DeleteReceptionReqData {
  reception_id: number;
}

export const DeleteReceptionsApi = async (deleteReceptionReqData: DeleteReceptionReqData) => {
  const reception_id = deleteReceptionReqData.reception_id

  return fetch(baseUrl+`receptions/${reception_id}`, {
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

    return response.json()
  })
  .then((data) => {
    return data as ReceptionData
  })
  .catch((error) => {
    throw new Error('エラーが発生しました。')
  })
}
