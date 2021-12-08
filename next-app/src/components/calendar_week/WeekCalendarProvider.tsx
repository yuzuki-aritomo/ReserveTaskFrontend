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
export const DetailReceptionsContext = createContext<ReceptionData[] | null>(null)
export const setDetailReceptionsContext = createContext<Dispatch<SetStateAction<ReceptionData[] | null>>>(
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
  const [DetailReceptions, setDetailReceptions] = useState<ReceptionData[] | null>(null)
  const [mode , setMode] = useState<number>(1)
  return(
    <ReceptionContext.Provider value={ props.receptions } >
      <EditFlagContext.Provider value={EditFlag} >
        <setEditFlagContext.Provider value={setEditFlag}>
          <PostReceptionsContext.Provider value={ postReceptions }>
            <setPostReceptionsContext.Provider value={ setPostReceptions }>
              <DetailReceptionsContext.Provider value={DetailReceptions}>
                <setDetailReceptionsContext.Provider value={setDetailReceptions}>
                  <ModeContext.Provider value={mode}>
                    <setModeContext.Provider value={setMode}>
                      { props.children }
                    </setModeContext.Provider>
                  </ModeContext.Provider>
                </setDetailReceptionsContext.Provider>
              </DetailReceptionsContext.Provider>
            </setPostReceptionsContext.Provider>
          </PostReceptionsContext.Provider>
        </setEditFlagContext.Provider>
      </EditFlagContext.Provider>
    </ReceptionContext.Provider>
  )
}


