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


export interface Role {
    title: string
}

export interface IUser {
    firstName: string,
    secondName: string,
    middleName : string,
    email: string,
    userProjects: IUserProject[],
    company: string
    role: Role
    weeks: IWeek[]
    profile: IProfile
}

export interface IProfile{
    user: IUser,
    sex: boolean,
    date: string,
    prfSeries: number,
    prfNumber: number,
    prfDateTaked: string,
    prfDateBack: string,
    prfCode: number,
    prfTaked: string,
    prfPlaceBorned: string,
    prfPlaceRegistration: string,
    prfPlaceLived: string,
    ipNumber: number,
    ipDateTaked: string,
    ipDateBack: string,
    ipCode: number,
    ipTaked: string,
    ipPlaceBorned: string,
    ulmNumber: number,
    ulmDateTaked: string,
    ulmDateBack: string,
    ulmCode: number,
    ulmTaked: string,
    ulmPlaceBorned: string,
    snils: string,
    inn: number,
    phone: string,
    image: string
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
