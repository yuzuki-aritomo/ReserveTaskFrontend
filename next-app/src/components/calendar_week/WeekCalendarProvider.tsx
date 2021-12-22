import { FC, useEffect, createContext, useState, ReactNode, Dispatch, SetStateAction } from "react"
import { ReceptionData } from 'src/components/models/ReceptionModel'

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
export const ModeContext = createContext<number>(-1)
export const setModeContext = createContext<Dispatch<SetStateAction<number>>>(
  ()=> undefined
)

type WeekCalendarProviderProps = {
  children: ReactNode,
  receptions: ReceptionData[]
  cal_mode: number
}
// modeをpropsで渡して出しわけ
export const WeekCalendarProvider: FC<WeekCalendarProviderProps> = ( { children, receptions, cal_mode} ) => {
  const [EditFlag, setEditFlag] = useState<boolean>(false)
  const [postReceptions, setPostReceptions] = useState<string[]>([])
  const [DetailReceptions, setDetailReceptions] = useState<ReceptionData[] | null>(null)
  const [mode , setMode] = useState<number>(cal_mode)
  
return(
    <ReceptionContext.Provider value={ receptions } >
      <EditFlagContext.Provider value={EditFlag} >
        <setEditFlagContext.Provider value={setEditFlag}>
          <PostReceptionsContext.Provider value={ postReceptions }>
            <setPostReceptionsContext.Provider value={ setPostReceptions }>
              <DetailReceptionsContext.Provider value={DetailReceptions}>
                <setDetailReceptionsContext.Provider value={setDetailReceptions}>
                  <ModeContext.Provider value={mode}>
                    <setModeContext.Provider value={setMode}>
                      { children }
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


