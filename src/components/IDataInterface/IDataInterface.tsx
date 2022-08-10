export interface Login{
    email: string,
    password: string
}

export interface Register{
    email: string,
    password: string
    company: string,
    firstName: string,
    secondName: string,
    middleName: string,
}

export interface IProject{
    code: string,
    title : string,
    indexAdd : string,
    actualHour: string,
    maxHour: number,
    dateStart: string,
    dateStop: string,
    status: string,
    description: string,
    users: Array<IUser>,
    enginerCreater: IUser
}



export interface IUser {
    firstName: string,
    secondName: string,
    middleName : string,
    email: string,
    userProjects: IUserProject[],
    company: string
    role: string
    weeks: IWeek[]
}

export interface ICompany{
    name : string
    personalCount: number
    users: Array<IUser>
}



export interface IDocHour {
    dateTime : string
    weekday : string
    travelTimeC: string
    wtHour: number
    workingTime: string;
    destination: string
    traverTimeG: string;
    activityCodeTravel: string;
    activityCode: string;
    projectNumber: number
    info: string
}

export interface IWeek{
    year: number
    month: number
    numberWeek: number

    sumHour: number
    moHour?: IDocHour
    tuHour?: IDocHour
    weHour?: IDocHour
    thHour?: IDocHour
    frHour?: IDocHour
    saHour?: IDocHour
    suHour?: IDocHour
    userProject?: IProject
    userSetWeek?: IUser
}


export interface IUserProject{
    user: IUser
    project: IProject
    weeks: IWeek[]
}


//интерфейс для загрузки exel файла
export interface IDownloadProjectUserWeekExel{
    projectCode: string,
    userEmail: string,
    yearWeek: number,
    numberWeek: number,
}
