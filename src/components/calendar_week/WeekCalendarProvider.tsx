import { FC, createContext, useState, ReactNode, Dispatch, SetStateAction } from "react"

export interface ScheduleData {
  id: number;
  start: string;
  end: string;
  name: string;
  reserved: boolean;
}

export const ScheduleContext = createContext<ScheduleData[]>([])
export const EditFlagContext = createContext<boolean>(false)
export const setEditFlagContext = createContext<Dispatch<SetStateAction<boolean>>>(
  () => undefined
)
export const PostReceptionsContext = createContext<string[]>([])
export const setPostReceptionsContext = createContext<Dispatch<SetStateAction<string[]>>>(
  ()=> undefined
)
export const DetailSchedulesContext = createContext<ScheduleData[] | null>(null)
export const setDetailSchedulesContext = createContext<Dispatch<SetStateAction<ScheduleData[] | null>>>(
  ()=> undefined
)
export const ModeContext = createContext<number>(-1)
export const setModeContext = createContext<Dispatch<SetStateAction<number>>>(
  ()=> undefined
)

type WeekCalendarProviderProps = {
  children: ReactNode,
  schedules: ScheduleData[]
  cal_mode: number
}
// modeをpropsで渡して出しわけ
export const WeekCalendarProvider: FC<WeekCalendarProviderProps> = ( { children, schedules, cal_mode} ) => {
  const [EditFlag, setEditFlag] = useState<boolean>(false)
  const [postReceptions, setPostReceptions] = useState<string[]>([])
  const [DetailSchedules, setDetailSchedules] = useState<ScheduleData[] | null>(null)
  const [mode , setMode] = useState<number>(cal_mode)
  
return(
    <ScheduleContext.Provider value={ schedules } >
      <EditFlagContext.Provider value={EditFlag} >
        <setEditFlagContext.Provider value={setEditFlag}>
          <PostReceptionsContext.Provider value={ postReceptions }>
            <setPostReceptionsContext.Provider value={ setPostReceptions }>
              <DetailSchedulesContext.Provider value={DetailSchedules}>
                <setDetailSchedulesContext.Provider value={setDetailSchedules}>
                  <ModeContext.Provider value={mode}>
                    <setModeContext.Provider value={setMode}>
                      { children }
                    </setModeContext.Provider>
                  </ModeContext.Provider>
                </setDetailSchedulesContext.Provider>
              </DetailSchedulesContext.Provider>
            </setPostReceptionsContext.Provider>
          </PostReceptionsContext.Provider>
        </setEditFlagContext.Provider>
      </EditFlagContext.Provider>
    </ScheduleContext.Provider>
  )
}


