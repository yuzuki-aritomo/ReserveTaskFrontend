import { FC, createContext, useState, ReactNode, Dispatch, SetStateAction } from "react"
import { ReceptionData } from 'Models/ReceptionModel'

export const ReceptionContext = createContext<ReceptionData[]>([])
export const EditFlagContext = createContext<boolean>(false)
export const setEditFlagContext = createContext<Dispatch<SetStateAction<boolean>>>(
  () => undefined
)

type WeekCalendarProviderProps = {
  children: ReactNode,
  receptions: ReceptionData[]
}

export const WeekCalendarProvider: FC<WeekCalendarProviderProps> = ( props ) => {
  const [EditFlag, setEditFlag] = useState<boolean>(false)
  return(
    <ReceptionContext.Provider value={ props.receptions } >
      <EditFlagContext.Provider value={EditFlag} >
        <setEditFlagContext.Provider value={setEditFlag}>
          { props.children }
        </setEditFlagContext.Provider>
      </EditFlagContext.Provider>
    </ReceptionContext.Provider>
  )
}


