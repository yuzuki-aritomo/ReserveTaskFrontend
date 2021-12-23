import { baseUrl } from 'src/api/ApiConfig'

export interface PostReceptionsReqData {
  register_date: string[],
}

export interface PostReceptionsResData {
  data: [
    {
      reception_id: number;
      user_name: string;
      start: string;
      end: string;
      reserved: boolean;
      canceled: boolean;
    }
  ]
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
    if(response.ok){
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