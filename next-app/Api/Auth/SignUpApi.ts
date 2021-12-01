import { SignUpReqData, SignUpApiResData, SignUpResData } from "./Models/SignUpApiModel"

const baseUrl = 'http://localhost:3001/'

export const SignUpApi= async (ReqData: SignUpReqData)=> {
  return fetch(baseUrl+'auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: ReqData.email,
      password: ReqData.password,
      name: ReqData.name,
      role: ReqData.role,
    })
  })
  .then(response =>{
    if (!response.ok){
      throw new Error("エラーが発生しました。")
    }
    return response.json()
  })
  .then(data => {
    return data as SignUpResData
  })
  .catch((error) => {
    throw new Error("エラーが発生しました。")
  }
  )
}