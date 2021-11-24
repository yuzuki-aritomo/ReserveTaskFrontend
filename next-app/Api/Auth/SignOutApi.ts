import { SignOutResData, SignOutApiResData } from "Api/Auth/Models/SignOutApiModel"

const baseUrl = 'http://localhost:3001/'

export const SignOutApi= async ()=> {
  const res: Response = await fetch(baseUrl+'auth/sign_out/', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'uid': localStorage.getItem("uid") ?? "",
      'access-token': localStorage.getItem("access-token") ?? "",
      'client': localStorage.getItem("client") ?? "",
    })
  })
  
  if(res.ok){
    const signOutResData = await res.json() as SignOutResData
    const signOutApiResData: SignOutApiResData = {
      ok: true,
      res: signOutResData,
    }
    return signOutApiResData
  }else{
    const signOutApiResData: SignOutApiResData = {
      ok: false,
      errorText: res.statusText,
    }
    return signOutApiResData
  }
}