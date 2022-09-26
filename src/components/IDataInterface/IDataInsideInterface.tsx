import { IUser } from "./IDataInterface";

export interface IOldNewUser{
    oldUser: IUser,
    newUser: IUser 
}

export interface IProjectSendApi {
    code: string, //Код проекта может быть с символами
    nameProject: string,
    maxHours: number,     // Количество часов выделенное на проект
    dateStart: string, // Дата старта
    dateStop: string,  // Дата завершения
    status: string,    // Статус проекта ( план, в работе, в архиве)
    enginerCreater?: string // Тот кто создал проект
    description: string,
  }