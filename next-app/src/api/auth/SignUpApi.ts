import { baseUrl } from 'src/api/ApiConfig'
export interface SignUpReqData {
  email: string
  password: string
  name: string
  role: number
}
export interface SignUpResData {
  data: {
    id: number
    email: string
    provider: string
    allow_password_change: boolean
    name: string
    role: number
    created_at: string
    updated_at: string
  }
}

export const SignUpApi = async (ReqData: SignUpReqData) => {
  return fetch(baseUrl + 'auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: ReqData.email,
      password: ReqData.password,
      name: ReqData.name,
      role: ReqData.role,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('エラーが発生しました。')
      }
      localStorage.setItem('uid', response.headers.get('uid') ?? '')
      localStorage.setItem('access-token', response.headers.get('access-token') ?? '')
      localStorage.setItem('client', response.headers.get('client') ?? '')
      
      return response.json()
    })
    .then((data) => {
      const res: SignUpResData = data as SignUpResData
      localStorage.setItem('name', res.data.name)
      localStorage.setItem('role', res.data.role.toString())
      
      return res
    })
    .catch((error) => {
      throw new Error('エラーが発生しました。')
    })
}
