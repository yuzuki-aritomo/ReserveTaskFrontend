import { baseUrl } from 'src/api/ApiConfig'

export interface SignInReqData {
  email: string;
  password: string;
}

export interface SignInResData {
  data: {
    id: string;
    email: string;
    provider: string;
    uid: string;
    allow_password_change: boolean;
    name: string;
    role: number;
    created_at: string;
    updated_at: string;
  }
}

export const SignInApi= async (signInReqData: SignInReqData)=> {
  return fetch(baseUrl+'auth/sign_in/', {
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
  .then(response => {
    if(!response.ok){
      throw new Error("エラー発生");
    }
    localStorage.setItem("uid", response.headers.get("uid") ?? "")
    localStorage.setItem("access-token", response.headers.get("access-token") ?? "")
    localStorage.setItem("client", response.headers.get("client") ?? "")

    return response.json()
  })
  .then(data=>{
    const res = data as SignInResData
    localStorage.setItem('email', res.data.email)
    localStorage.setItem('name', res.data.name)
    localStorage.setItem('role', res.data.role.toString())

    return res
  })
  .catch(error=> {
    throw new Error("エラー発生");
  });
}