
import {UserLoginAction, UserLoginActionTypes,} from "../../types/userLoginRedux";
import {Dispatch} from "redux";
import axios from "axios";
import GetConnectionString, { sleepLoader } from "../../../settings/settings";
import { OldNewUser } from "../../../components/Pages/TMP/TMPBody/TMPCardUser_v2/TMPCardUser_tabs_v3";

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

export const changeUser = (sessionToken: any,newUser: OldNewUser) => {
    return async (dispatch: Dispatch<UserLoginAction>) => {
        try {

            newUser.oldUser.userProjects=[]
            const json = JSON.stringify(newUser);

          /* axios.defaults.headers.common['Authorization'] = sessionToken;
            axios.defaults.headers.common['Content-Type'] = 'application/json';
            const response = await (await axios.put(GetConnectionString()+'/Authorize/users/',json))*/

            console.log(newUser)
              
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