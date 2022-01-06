import { baseUrl } from 'src/api/ApiConfig'
import { ReceptionData } from 'src/api/receptions/ReceptionModel'

export interface PostReceptionsReqData {
  register_date: string[],
}

export interface PostReceptionsResData {
  reception_dates: ReceptionData[],
  error?: {
    'date': string,
    'error_messages': string[]
  }[]
}

export const PostReceptionsApi = async (postReceptionsReqData: PostReceptionsReqData)=> {
  return fetch(baseUrl+'receptions/', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'uid': localStorage.getItem("uid") ?? "",
      'access-token': localStorage.getItem("access-token") ?? "",
      'client': localStorage.getItem("client") ?? "",
    },
    body: JSON.stringify(postReceptionsReqData)
  })
  .then((response) => {
    if(!response.ok){
      throw new Error('エラーが発生しました。')
    }

    return response.json()
  })
  .then((data) => {
    return data as PostReceptionsResData
  })
  .catch((error) => {
    throw new Error('エラーが発生しました。')
  })
}