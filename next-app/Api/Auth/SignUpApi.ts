import { SignUpReqData, SignUpApiResData, SignUpResData } from "./Models/SignUpApiModel"

const baseUrl = 'http://localhost:3001/'

export const SignUpApi= async (ReqData: SignUpReqData)=> {
  const res: Response = await fetch(baseUrl+'auth/', {
    method: 'POST',
    mode: 'cors',
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

  localStorage.setItem("uid", res.headers.get("uid") ?? "")
  localStorage.setItem("access-token", res.headers.get("access-token") ?? "")
  localStorage.setItem("client", res.headers.get("client") ?? "")

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