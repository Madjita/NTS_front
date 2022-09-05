
import {UserLoginAction, UserLoginActionTypes,} from "../../types/userLoginRedux";
import {Dispatch} from "redux";
import axios from "axios";
import GetConnectionString, { sleepLoader } from "../../../settings/settings";
import { IOldNewUser } from "../../../components/components/Info/Info";

export const findUser = (sessionToken: any,email: string) => {
    return async (dispatch: Dispatch<UserLoginAction>) => {
        try {
            //dispatch({type: UserLoginActionTypes.FETCH_USERLOGIN})

            const formData  = new FormData();
            formData.append('Email', email);

            axios.defaults.headers.common['Authorization'] = sessionToken;
            const response = await (await axios.post(GetConnectionString()+'/Authorize/users/find',formData))


           /* if(response.data.profile.id != undefined)
                delete response.data.profile.id;*/
            
            setTimeout(() => {
                dispatch({type: UserLoginActionTypes.FETCH_USERLOGIN_FIND_SUCCESS, payload: response.data})
            }, sleepLoader)
        } catch (e) {
            dispatch({
                type: UserLoginActionTypes.FETCH_USERLOGIN_ERROR,
                payload: 'Произошла ошибка при авторазиции пользователя'
            })
        }
    }
}

export const changeUser = (sessionToken: any,newUser: IOldNewUser) => {
    return async (dispatch: Dispatch<UserLoginAction>) => {
        try {

            newUser.oldUser.userProjects=[]
            const json = JSON.stringify(newUser);
              
            const response= await (await axios.put(GetConnectionString()+'/Authorize/users',json, { headers: {
                'Authorization': sessionToken,
                'Content-Type': 'application/json'
            },
                data: json,
            }
            ))

            setTimeout(() => {
                dispatch({type: UserLoginActionTypes.FETCH_USERLOGIN_FIND_SUCCESS, payload: response.data})
            }, sleepLoader)

 

        }
        catch(e){
            dispatch({
                type: UserLoginActionTypes.FETCH_USERLOGIN_ERROR,
                payload: 'Произошла ошибка при изменении данных пользователя'
            })
        }
    }
}