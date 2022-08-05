
import {UserLoginAction, UserLoginActionTypes,} from "../../types/userLoginRedux";
import {Dispatch} from "redux";
import axios from "axios";
import GetConnectionString, { sleepLoader } from "../../../settings/settings";

export const findUser = (sessionToken: any,email: string) => {
    return async (dispatch: Dispatch<UserLoginAction>) => {
        try {
            dispatch({type: UserLoginActionTypes.FETCH_USERLOGIN})

            const formData  = new FormData();
            formData.append('Email', email);

            axios.defaults.headers.common['Authorization'] = sessionToken;
            const response = await (await axios.post(GetConnectionString()+'/Authorize/users/find',formData))

            console.log("Find user,", response.data)
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
