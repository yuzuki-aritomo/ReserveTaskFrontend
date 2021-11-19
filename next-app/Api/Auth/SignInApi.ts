import { SignInReqData, SignInApiResData, SignInResData } from "./Models/SignInApiModel"

const baseUrl = 'http://localhost:3001/'

export const SignInApi= async (signInReqData: SignInReqData)=> {
  const res: Response = await fetch(baseUrl+'auth/sign_in/', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: signInReqData.email,
      password: signInReqData.password,
    })
  })
  
  localStorage.setItem("uid", res.headers.get("uid") ?? "")
  localStorage.setItem("access-token", res.headers.get("access-token") ?? "")
  localStorage.setItem("client", res.headers.get("client") ?? "")
  
  if(res.ok){
    const signInResData = await res.json() as SignInResData
    const signInApiResData: SignInApiResData = {
      ok: true,
      res: signInResData,
    }
    return signInApiResData
  }else{
    const signInApiResData: SignInApiResData = {
      ok: false,
      errorText: res.statusText,
    }
    return signInApiResData
  }
}