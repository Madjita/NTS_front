import {UserAction, UserActionTypes} from "../../types/userRedux";
import {Dispatch} from "redux";
import axios from "axios";
import GetConnectionString, { sleepLoader } from "../../../settings/settings";

export const fetchUsers = (sessionToken: any) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
           // dispatch({type: UserActionTypes.FETCH_USERS})


            const newLocal = '/Authorize/users';
            const response = await (await axios.get(GetConnectionString()+newLocal,
                                                { headers: {
                                                        'Content-Type': 'application/json',
                                                        'Authorization': sessionToken
                                                    }
                                                }))

            setTimeout(() => {
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
            }, sleepLoader)
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}


export const removeUser = (sessionToken: any,email: string) => {

    return async (dispatch: Dispatch<UserAction>,payload: any) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USER_REMOVE, email: email})

            const formData  = new FormData();
            formData.append('Email', email);


            
            const response = await (await axios.delete(GetConnectionString()+'/Authorize/users',
                                                { headers: {
                                                        'Content-Type': 'application/json',
                                                        'Authorization': sessionToken
                                                    },
                                                    data: formData,
                                                    //onUploadProgress: (progressEvent: any) => console.log(progressEvent.loaded)
                                                }))

            //fetchUsers(sessionToken);

            setTimeout(() => {
                dispatch({type: UserActionTypes.FETCH_USERS_REMOVE_SUCCESS, payload: response.data})
            }, sleepLoader)
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при удалении пользователя'
            })
        }
    }
}

/*
export const fetchUsersInProject = (sessionToken: any,projectTittle: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            //dispatch({type: UserActionTypes.FETCH_USERS})

            const formData  = new FormData();
            formData.append('Project', projectTittle);

            axios.defaults.headers.common['Authorization'] = sessionToken;
            //axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            //axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';

    
            
            const response = await (await axios.post(GetConnectionString()+'/Project/projects/usersInProject',formData))

            console.log("response.data = ",response.data)
            setTimeout(() => {
                dispatch({type: UserActionTypes.FETCH_USERS_FIND_IN_PROJECT_SUCCESS, payload: response.data})
            }, 1000)
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей в проекте'
            })
        }
    }
}*/