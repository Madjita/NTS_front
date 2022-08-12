import {IProject} from '../../components/IDataInterface/IDataInterface'

export interface ProjectState {
    projects: IProject[];
    loading: boolean;
    error: null | string;
}
export enum ProjectActionTypes {
    FETCH_PROJECT = 'FETCH_PROJECT',
    FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS',
    FETCH_PROJECT_ERROR = 'FETCH_PROJECT_FETCH_PROJECT_ERROR',


    FETCH_PROJECT_REMOVE = 'FETCH_PROJECT_REMOVE',
    FETCH_PROJECT_REMOVE_SUCCESS = 'FETCH_PROJECT_REMOVE_SUCCESS',

    FETCH_PROJECT_ADD = 'FETCH_PROJECT_ADD',
    FETCH_PROJECT_ADD_SUCCESS = 'FETCH_PROJECT_ADD_SUCCESS',

    FETCH_PROJECT_FIND = 'FETCH_PROJECT_FIND',
    FETCH_PROJECT_FIND_SUCCESS = 'FETCH_PROJECT_FIND_SUCCESS',


    FETCH_PROJECT_EDIT = 'FETCH_PROJECT_EDIT',
    FETCH_PROJECT_EDIT_SUCCESS = 'FETCH_PROJECT_EDIT_SUCCESS',
}
interface FetchProjectsAction {
    type: ProjectActionTypes.FETCH_PROJECT;
}
interface FetchProjectRemoveAction {
    type: ProjectActionTypes.FETCH_PROJECT_REMOVE;
    name: string;
}

interface FetchProjectRemoveSuccessAction {
    type: ProjectActionTypes.FETCH_PROJECT_REMOVE_SUCCESS;
    payload: IProject[]
}

interface FetchProjectsSuccessAction {
    type: ProjectActionTypes.FETCH_PROJECT_SUCCESS;
    payload: IProject[]
}
interface FetchProjectsErrorAction {
    type: ProjectActionTypes.FETCH_PROJECT_ERROR;
    payload: string;
}

interface FetchProjectsAddAction {
    type: ProjectActionTypes.FETCH_PROJECT_ADD;
    payload: string;
}
interface FetchProjectsAddSuccessAction {
    type: ProjectActionTypes.FETCH_PROJECT_ADD_SUCCESS;
    payload: IProject[]
}

interface FetchProjectsFindAction {
    type: ProjectActionTypes.FETCH_PROJECT_FIND;
}
interface FetchProjectsFindSuccessAction {
    type: ProjectActionTypes.FETCH_PROJECT_FIND_SUCCESS;
    payload: IProject
}

interface FetchProjectEditAction {
    type: ProjectActionTypes.FETCH_PROJECT_EDIT;
}

interface FetchProjectEditSuccessAction {
    type: ProjectActionTypes.FETCH_PROJECT_EDIT_SUCCESS;
    payload: IProject[]
}

export type ProjectAction = FetchProjectsAction |
                         FetchProjectsErrorAction |
                         FetchProjectsSuccessAction|
                         FetchProjectRemoveAction |
                         FetchProjectRemoveSuccessAction|
                         FetchProjectsAddSuccessAction|
                         FetchProjectsAddAction |
                         FetchProjectEditAction |
                         FetchProjectEditSuccessAction |
                         FetchProjectsFindAction|
                         FetchProjectsFindSuccessAction