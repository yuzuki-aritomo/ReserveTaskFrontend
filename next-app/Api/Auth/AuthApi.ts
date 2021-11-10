
import { SignupReqData } from "./Models/AuthApiModel"

const baseUrl = 'http://localhost:3001/'

export const SignUpApi = async (ReqData: SignupReqData) => {
  const res = await fetch(baseUrl+'auth/', {
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
  .then(response => response.json())
  .then((data)=>{
    return data
  }).catch((error)=>{
    console.log(error)
    return error
  })
  return res
}