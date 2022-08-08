import {UserProjectAction, UserProjectActionTypes} from "../../types/userProjectRedux";
import {Dispatch} from "redux";
import axios from "axios";
import GetConnectionString, { sleepLoader } from "../../../settings/settings";
import { IUserProject } from "../../../components/IDataInterface/IDataInterface";


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
}

export const addUserHoursProject= (sessionToken: any,userProject: IUserProject) => {

    return async (dispatch: Dispatch<UserProjectAction>,payload: any) => {
        try {
            dispatch({type: UserProjectActionTypes.FETCH_USERProject_ADD_HOURS, payload: userProject})

            const formData  = new FormData();

            const json = JSON.stringify(userProject);

/*
           let newObject = {'UserProjects': userProject.map((item,index)=>{

                let object = {'Email': item.user.email, 'Project': item.project.title}
                formData.append('UserProjects',JSON.stringify(object));

                return object
            })
            }*/
          

            //axios.defaults.headers.common['Authorization'] = sessionToken;
            const response = await (await axios.post(GetConnectionString()+'/Project/projects/user/hours',json,{ headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionToken, 
            }
            }))
            

            setTimeout(() => {
                dispatch({type: UserProjectActionTypes.FETCH_USERProject_ADD_HOURS_SUCCESS, payload: response.data})
            }, sleepLoader)

            
        } catch (e) {
            dispatch({
                type: UserProjectActionTypes.FETCH_USERProject_ERROR,
                payload: 'Произошла ошибка при добавлении почасовки рабочего к проекту'
            })
        }
    }
}