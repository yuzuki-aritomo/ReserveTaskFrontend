import { baseUrl } from "Api/ApiConfig"
export interface SignUpReqData {
  email: string;
  password: string;
  name: string;
  role: number;
}
export interface SignUpResData {
  status: string;
  data: {
    id: number;
    email: string;
    provider: string;
    allow_password_change: boolean;
    name: string;
    role: number;
    created_at: string;
    updated_at: string;
  }
}

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