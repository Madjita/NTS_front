import {IUserProject} from '../../components/IDataInterface/IDataInterface'

export interface UserProjectState {
    userProjects: IUserProject[];
    loading: boolean;
    error: null | string;
}
export enum UserProjectActionTypes {
    FETCH_USERProject = 'FETCH_USERProject',
    FETCH_USERProject_SUCCESS = 'FETCH_USERProject_SUCCESS',
    FETCH_USERProject_ERROR = 'FETCH_USERProject_FETCH_USERProject_ERROR',

    FETCH_USERProject_ADD = 'FETCH_USERProject_ADD',
    FETCH_USERProject_ADD_SUCCESS = 'FETCH_USERProject_ADD_SUCCESS',

    FETCH_USERProject_REMOVE = 'FETCH_USERProject_REMOVE',
    FETCH_USERProject_REMOVE_SUCCESS = 'FETCH_USERProject_REMOVE_SUCCESS',



    //FETCH_USERProject_ADD_HOURS = 'FETCH_USERProject_ADD_HOURS',
   // FETCH_USERProject_ADD_HOURS_SUCCESS = 'FETCH_USERProject_ADD_HOURS_SUCCESS',



    FETCH_USERProject_Week_EXEL_HOURS = 'FETCH_USERProject_Week_EXEL_HOURS',
    FETCH_USERProject_Week_EXEL_HOURS_SUCCESS = 'FETCH_USERProject_Week_EXEL_HOURS_SUCCESS',

}
interface FetchUserProjectsAction {
    type: UserProjectActionTypes.FETCH_USERProject;
}
interface FetchUserProjectRemoveAction {
    type: UserProjectActionTypes.FETCH_USERProject_REMOVE;
    payload: IUserProject;
}

interface FetchUserProjectRemoveSuccessAction {
    type: UserProjectActionTypes.FETCH_USERProject_REMOVE_SUCCESS;
    payload: IUserProject[]
}

interface FetchUserProjectsSuccessAction {
    type: UserProjectActionTypes.FETCH_USERProject_SUCCESS;
    payload: IUserProject[]
}
interface FetchUserProjectsErrorAction {
    type: UserProjectActionTypes.FETCH_USERProject_ERROR;
    payload: string;
}


interface FetchUserProjectsAddAction {
    type: UserProjectActionTypes.FETCH_USERProject_ADD;
    payload: IUserProject[]
}

interface FetchUserProjectsAddSuccessAction {
    type: UserProjectActionTypes.FETCH_USERProject_ADD_SUCCESS;
    payload: IUserProject[]
}

/*
interface FetchUserProjectsAddHoursAction {
    type: UserProjectActionTypes.FETCH_USERProject_ADD_HOURS;
    payload: IUserProject
}

interface FetchUserProjectsAddHoursSuccessAction {
    type: UserProjectActionTypes.FETCH_USERProject_ADD_HOURS_SUCCESS;
    payload: IUserProject[]
}*/


interface FetchUserProjectsWeekExelHoursAction {
    type: UserProjectActionTypes.FETCH_USERProject_Week_EXEL_HOURS;
}

interface FetchUserProjectsWeekExelHoursSuccessAction {
    type: UserProjectActionTypes.FETCH_USERProject_Week_EXEL_HOURS_SUCCESS;
}

export type UserProjectAction = FetchUserProjectsAction |
                         FetchUserProjectsErrorAction |
                         FetchUserProjectsSuccessAction|
                         FetchUserProjectRemoveAction |
                         FetchUserProjectRemoveSuccessAction |
                         FetchUserProjectsAddAction |
                         FetchUserProjectsAddSuccessAction |
                        // FetchUserProjectsAddHoursAction | 
                        // FetchUserProjectsAddHoursSuccessAction |
                         FetchUserProjectsWeekExelHoursAction |
                         FetchUserProjectsWeekExelHoursSuccessAction