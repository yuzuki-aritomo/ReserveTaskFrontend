import { SignUpReqData, SignUpApiResData, SignUpResData } from "./Models/AuthApiModel"

const baseUrl = 'http://localhost:3001/'

export const SignUpApi= async (ReqData: SignUpReqData)=> {
  const res: Response = await fetch(baseUrl+'auth/', {
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
  if(res.ok){
    const signUpResData = await res.json() as SignUpResData
    const signUpApiResData: SignUpApiResData = {
      ok: true,
      res: signUpResData,
    }
    return signUpApiResData
  }else{
    const signUpApiResData: SignUpApiResData = {
      ok: false,
      errorText: res.statusText,
    }
    return signUpApiResData
  }
}