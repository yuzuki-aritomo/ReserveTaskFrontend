const baseUrl = 'http://localhost:3001/'

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
    return data as SignInResData
  })
  .catch(error=> {
    throw new Error("エラー発生");
  });
}