import { PostReceptionsReqData, PostReceptionsResData, PostReceptionsApiResData } from "Api/Receptions/Models/PostReceptionsModel"

const baseUrl = 'http://localhost:3001/'

export const PostReceptionsApi = async (postReceptionsReqData: PostReceptionsReqData)=> {
  const res: Response = await fetch(baseUrl+'receptions/', {
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
  if(res.ok){
    const postReceptionsResData = await res.json() as PostReceptionsResData
    const postReceptionsApiResData: PostReceptionsApiResData = {
      ok: true,
      res: postReceptionsResData,
    }
    return postReceptionsApiResData
  }else{
    const postReceptionsApiResData: PostReceptionsApiResData = {
      ok: false,
      errorText: res.statusText,
    }
    return postReceptionsApiResData
  }
}