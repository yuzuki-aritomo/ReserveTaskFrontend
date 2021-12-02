import { FC, createContext, useEffect, useState, Dispatch, SetStateAction, ReactNode } from 'react'
export interface UserData {
  role: number;
  name: string;
  email: string;
}

export const UserContext = createContext<UserData | null>(null)
export const setUserContext = createContext<Dispatch<SetStateAction<UserData | null>>>(
  () => undefined
)

export const UserProvider: FC = ( { children } ) => {
  const [user, setUser] = useState<UserData | null>(null)
  useEffect(() => {
    const SetUserData = async () =>{
      if( localStorage.getItem("access-token") != null ){
        setUser({
          name: localStorage.getItem("name") ?? "",
          role: Number(localStorage.getItem("role")) ?? "",
          email: localStorage.getItem("email") ?? ""
        })
      }
    }
    SetUserData()
  }, [])
  return(
    <UserContext.Provider value={ user }>
      <setUserContext.Provider value={ setUser }>
        { children }
      </setUserContext.Provider>
    </UserContext.Provider>
  )
}