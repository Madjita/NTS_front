import {ProjectAction, ProjectActionTypes} from "../../types/projectRedux";
import {Dispatch} from "redux";
import axios from "axios";
import GetConnectionString, { sleepLoader } from "../../../settings/settings";
import { IProject } from "../../../components/IDataInterface/IDataInterface";

export const fetchProject = (sessionToken: any) => {
    return async (dispatch: Dispatch<ProjectAction>) => {
        try {
            dispatch({type: ProjectActionTypes.FETCH_PROJECT})

            axios.defaults.headers.common['Authorization'] = sessionToken;
            const response = await (await axios.get(GetConnectionString()+'/Project/projects'))

            setTimeout(() => {
                dispatch({type: ProjectActionTypes.FETCH_PROJECT_SUCCESS, payload: response.data})
            }, sleepLoader)
        } catch (e) {
            dispatch({
                type: ProjectActionTypes.FETCH_PROJECT_ERROR,
                payload: 'Произошла ошибка при загрузке проекта'
            })
        }
    }
}


export const removeProject = (sessionToken: any,object: string) => {

    return async (dispatch: Dispatch<ProjectAction>,payload: any) => {
        try {
            dispatch({type: ProjectActionTypes.FETCH_PROJECT_REMOVE, name: object})

            const formData  = new FormData();
            formData.append('Code', object);



            axios.defaults.headers.common['Authorization'] = sessionToken;
            const response = await (await axios.delete(GetConnectionString()+'/Project/projects',
                                                { headers: {
                                                        'Authorization': sessionToken
                                                    },
                                                    data: formData,
                                                }))

            setTimeout(() => {
                dispatch({type: ProjectActionTypes.FETCH_PROJECT_REMOVE_SUCCESS, payload: response.data})
            }, sleepLoader)
        } catch (e) {
            dispatch({
                type: ProjectActionTypes.FETCH_PROJECT_ERROR,
                payload: 'Произошла ошибка при удалении проекта'
            })
        }
    }
}


export const addProject = (sessionToken: any,project: IProject) => {

    return async (dispatch: Dispatch<ProjectAction>,payload: any) => {
        try {
            dispatch({type: ProjectActionTypes.FETCH_PROJECT_ADD, payload: project.title})

            console.log("addProject = ", project)
            const formData  = new FormData();
            formData.append('Code', project.code);
            formData.append('NameProject', project.title);
            formData.append('MaxHours', project.maxHour.toString());
            formData.append('DateStart', project.dateStart);
            formData.append('DateStop', project.dateStop);
            formData.append('Description', project.description);
            formData.append('Status', project.status);
            formData.append('EngineerCreaterEmail', project.enginerCreater.email);


            axios.defaults.headers.common['Authorization'] = sessionToken;
            const response = await (await axios.post(GetConnectionString()+'/Project/projects',formData))

            setTimeout(() => {
                dispatch({type: ProjectActionTypes.FETCH_PROJECT_ADD_SUCCESS, payload: response.data})
            }, sleepLoader)
        } catch (e) {
            dispatch({
                type: ProjectActionTypes.FETCH_PROJECT_ERROR,
                payload: 'Произошла ошибка при добавлении проекта'
            })
        }
    }
}


export const editProject = (sessionToken: any,oldProjectInfromation: any,newProjectInfromation: any) => {

    return async (dispatch: Dispatch<ProjectAction>,payload: any) => {
        try {
            dispatch({type: ProjectActionTypes.FETCH_PROJECT_EDIT})

            let test = {
                OldProjectInfromation: oldProjectInfromation,
                NewProjectInfromation: newProjectInfromation
            }

            const json = JSON.stringify(test);
            const response = await (await axios.put(GetConnectionString()+'/Project/projects',json,
                                                { headers: {
                                                        'Content-Type': 'application/json',
                                                        'Authorization': sessionToken,
                                                        
                                                    }
                                                }))

            setTimeout(() => {
                dispatch({type: ProjectActionTypes.FETCH_PROJECT_EDIT_SUCCESS, payload: response.data})
            }, sleepLoader)
        } catch (e) {
            dispatch({
                type: ProjectActionTypes.FETCH_PROJECT_ERROR,
                payload: 'Произошла ошибка при редактировании проекта'
            })
        }
    }
}