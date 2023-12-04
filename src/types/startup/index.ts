export type IStartupUpdatesResponse = {
  code: number | string
  data: {
    code: number | string
    data: [] | StartupUpdate[]
  }
}
export type StartupUpdate = {
  _id: string
  startup: string
  logo: string
  company_name: string
  title: string
  created_at: string
}
