export interface Login{
    email: string,
    password: string
}

export interface Register{
    email: string,
    password: string
    company: string,
    firstName: string,
    lastName: string,
    patronymic: string,
}

export interface IProject{
    code: string,
    title : string,
    number : string,
    actualHours: string,
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
    wTHour: string
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

    sumHour?: number
    moHour?: IDocHour
    tuHour?: IDocHour
    weHour?: IDocHour
    thHour?: IDocHour
    frHour?: IDocHour
    saHour?: IDocHour
    suHour?: IDocHour
    userProject?: IUserProject[]
    userSetWeek?: IUser
}


export interface IUserProject{
    user: IUser
    project: IProject
    weeks: IWeek[]
}
