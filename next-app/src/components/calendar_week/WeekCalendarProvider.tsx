import { FC, createContext, useState, ReactNode, Dispatch, SetStateAction } from "react"
import { ReceptionData } from 'Models/ReceptionModel'

export const ReceptionContext = createContext<ReceptionData[]>([])
export const EditFlagContext = createContext<boolean>(false)
export const setEditFlagContext = createContext<Dispatch<SetStateAction<boolean>>>(
  () => undefined
)
export const PostReceptionsContext = createContext<string[]>([])
export const setPostReceptionsContext = createContext<Dispatch<SetStateAction<string[]>>>(
  ()=> undefined
)

type WeekCalendarProviderProps = {
  children: ReactNode,
  receptions: ReceptionData[]
}

export const WeekCalendarProvider: FC<WeekCalendarProviderProps> = ( props ) => {
  const [EditFlag, setEditFlag] = useState<boolean>(false)
  const [postReceptions, setPostReceptions] = useState<string[]>([])
  return(
    <ReceptionContext.Provider value={ props.receptions } >
      <EditFlagContext.Provider value={EditFlag} >
        <setEditFlagContext.Provider value={setEditFlag}>
          <PostReceptionsContext.Provider value={ postReceptions }>
            <setPostReceptionsContext.Provider value={ setPostReceptions }>
              { props.children }
            </setPostReceptionsContext.Provider>
          </PostReceptionsContext.Provider>
        </setEditFlagContext.Provider>
      </EditFlagContext.Provider>
    </ReceptionContext.Provider>
  )
}


