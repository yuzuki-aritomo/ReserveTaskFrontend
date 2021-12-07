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
export const DetailReceptionContext = createContext<ReceptionData | null>(null)
export const setDetailReceptionContext = createContext<Dispatch<SetStateAction<ReceptionData | null>>>(
  ()=> undefined
)
export const ModeContext = createContext<number>(0)
export const setModeContext = createContext<Dispatch<SetStateAction<number>>>(
  ()=> undefined
)

type WeekCalendarProviderProps = {
  children: ReactNode,
  receptions: ReceptionData[]
}

export const WeekCalendarProvider: FC<WeekCalendarProviderProps> = ( props ) => {
  const [EditFlag, setEditFlag] = useState<boolean>(false)
  const [postReceptions, setPostReceptions] = useState<string[]>([])
  const [DetailReception, setDetailReception] = useState<ReceptionData | null>(null)
  const [mode , setMode] = useState<number>(0)
  return(
    <ReceptionContext.Provider value={ props.receptions } >
      <EditFlagContext.Provider value={EditFlag} >
        <setEditFlagContext.Provider value={setEditFlag}>
          <PostReceptionsContext.Provider value={ postReceptions }>
            <setPostReceptionsContext.Provider value={ setPostReceptions }>
              <DetailReceptionContext.Provider value={DetailReception}>
                <setDetailReceptionContext.Provider value={setDetailReception}>
                  <ModeContext.Provider value={mode}>
                    <setModeContext.Provider value={setMode}>
                      { props.children }
                    </setModeContext.Provider>
                  </ModeContext.Provider>
                </setDetailReceptionContext.Provider>
              </DetailReceptionContext.Provider>
            </setPostReceptionsContext.Provider>
          </PostReceptionsContext.Provider>
        </setEditFlagContext.Provider>
      </EditFlagContext.Provider>
    </ReceptionContext.Provider>
  )
}


