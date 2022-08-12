import {UserProjectAction, UserProjectActionTypes} from "../../types/userProjectRedux";
import {Dispatch} from "redux";
import axios from "axios";
import GetConnectionString, { sleepLoader } from "../../../settings/settings";
import { IDownloadProjectUserWeekExel, IUserProject } from "../../../components/IDataInterface/IDataInterface";
import { fetchProject } from "./projectAction";
import { ProjectAction,ProjectActionTypes } from "../../types/projectRedux";


export const removeUserProject= (sessionToken: any,userProject: IUserProject) => {

    return async (dispatch: Dispatch<UserProjectAction>,payload: any) => {
        try {
            dispatch({type: UserProjectActionTypes.FETCH_USERProject_REMOVE, payload: userProject})

            const formData  = new FormData();
            formData.append('Email', userProject.user.email);
            formData.append('Project', userProject.project.title);


            axios.defaults.headers.common['Authorization'] = sessionToken;
            const response = await (await axios.delete(GetConnectionString()+'/Project/projects/user',
                                                { headers: {
                                                        'Authorization': sessionToken
                                                    },
                                                    data: formData,
                                                }))

            setTimeout(() => {
                dispatch({type: UserProjectActionTypes.FETCH_USERProject_REMOVE, payload: response.data})
            }, sleepLoader)
        } catch (e) {
            dispatch({
                type: UserProjectActionTypes.FETCH_USERProject_ERROR,
                payload: 'Произошла ошибка при удалении рабочего из проекта'
            })
        }
    }
}

/*
export const addUserProject= (sessionToken: any,userProject: Array<IUserProject>) => {

    return async (dispatch: Dispatch<UserProjectAction>,payload: any) => {
        try {
            dispatch({type: UserProjectActionTypes.FETCH_USERProject_ADD, payload: userProject})

            const formData  = new FormData();


           let newObject = {'UserProjects': userProject.map((item,index)=>{

                let object = {'Email': item.user.email, 'Project': item.project.title}
                formData.append('UserProjects',JSON.stringify(object));

                return object
            })
            }
          

            axios.defaults.headers.common['Authorization'] = sessionToken;
            const response = await (await axios.post(GetConnectionString()+'/Project/projects/user',newObject))

            setTimeout(() => {
                dispatch({type: UserProjectActionTypes.FETCH_USERProject_ADD_SUCCESS, payload: response.data})
            }, sleepLoader)
        } catch (e) {
            dispatch({
                type: UserProjectActionTypes.FETCH_USERProject_ERROR,
                payload: 'Произошла ошибка при добавлении рабочего к проекту'
            })
        }
    }
}*/


export const donwloadProjectUserWeekExel_fetch = (sessionToken: any,downloadProjectUserWeek: IDownloadProjectUserWeekExel) => {

    return async (dispatch: Dispatch<UserProjectAction>,payload: any) => {
        try {
            //dispatch({type: UserProjectActionTypes.FETCH_USERProject_Week_EXEL_HOURS})

            const json = JSON.stringify(downloadProjectUserWeek);

            const response = await (await axios.post(GetConnectionString()+'/Exel/projects/user/week/exel',json,{ headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionToken,
            },
            responseType: 'blob'
            })
            .then((response) => {
                const headerval = response.headers['content-disposition'];
                var filename = headerval.split(';')[1].split('=')[1].replace('"', '').replace('"', '');

                const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
				const link = document.createElement('a');
				link.href = downloadUrl;
				link.setAttribute('download', filename); //any other extension
				document.body.appendChild(link);
				link.click();
				link.remove();

	
               /* setTimeout(() => {
                    dispatch({type: UserProjectActionTypes.FETCH_USERProject_Week_EXEL_HOURS_SUCCESS, payload: response.data})
                }, sleepLoader)*/
              })
            
            )
           

            
        } catch (e) {
            dispatch({
                type: UserProjectActionTypes.FETCH_USERProject_ERROR,
                payload: 'Произошла ошибка при загрузки Exel файла Проект Юзер неделя'
            })
        }
    }
}



export const donwloadProjectUserAllWeekExel_fetch = (sessionToken: any,downloadProjectUserWeek: IDownloadProjectUserWeekExel) => {

    return async (dispatch: Dispatch<UserProjectAction>,payload: any) => {
        try {
            //dispatch({type: UserProjectActionTypes.FETCH_USERProject_Week_EXEL_HOURS})

            const json = JSON.stringify(downloadProjectUserWeek);

            const response = await (await axios.post(GetConnectionString()+'/Exel/projects/user/week/all/zip',json,{ headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionToken,
            },
            responseType: 'blob'
            })
            .then((response) => {
                const headerval = response.headers['content-disposition'];
                var filename = headerval.split(';')[1].split('=')[1].replace('"', '').replace('"', '');

                const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
				const link = document.createElement('a');
				link.href = downloadUrl;
				link.setAttribute('download', filename); //any other extension
				document.body.appendChild(link);
				link.click();
				link.remove();
              })
            
            )
           

            
        } catch (e) {
            dispatch({
                type: UserProjectActionTypes.FETCH_USERProject_ERROR,
                payload: 'Произошла ошибка при загрузки архива Exel файлов Проект Юзер недели'
            })
        }
    }
}