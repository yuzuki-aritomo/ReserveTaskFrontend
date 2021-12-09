import { baseUrl } from 'src/api/ApiConfig'

export interface SignOutResData {
  success: string
}

export const SignOutApi= async ()=> {
  await fetch(baseUrl+'auth/sign_out/', {
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
  .then(response=> {
    if(!response.ok){
      throw new Error("エラーが発生しました。")
    }
    localStorage.removeItem("uid")
    localStorage.removeItem("access-token")
    localStorage.removeItem("client")
    localStorage.removeItem("name")
    localStorage.removeItem("role")

    return response.json()
  })
  .then(data => {
    return data as SignOutResData
  })
  .catch(e=>{
    throw new Error("エラーが発生しました。")
  })
}