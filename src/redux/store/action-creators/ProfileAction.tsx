import {UserAction, UserActionTypes} from "../../types/userRedux";
import {Dispatch} from "redux";
import axios from "axios";
import GetConnectionString, { sleepLoader } from "../../../settings/settings";


export const fetchProfile = (sessionToken: any) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
           // dispatch({type: UserActionTypes.FETCH_USERS})


            const newLocal = '/Authorize/ExportFile';
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