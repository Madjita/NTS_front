import {IUser} from '../../components/IDataInterface/IDataInterface'

export interface UserLoginState {
    userLogin: null | IUser;
    loadingLogin: boolean;
    errorLogin: null | string;
}
export enum UserLoginActionTypes {
    FETCH_USERLOGIN = 'FETCH_USERLOGIN',
    FETCH_USERLOGIN_FIND_SUCCESS = 'FETCH_USERLOGIN_FIND_SUCCESS',
    FETCH_USERLOGIN_ERROR = 'FETCH_USERLOGIN_ERROR',

}

interface FetchUserAction {
    type: UserLoginActionTypes.FETCH_USERLOGIN;
}

interface FetchUserFindSuccessAction {
    type: UserLoginActionTypes.FETCH_USERLOGIN_FIND_SUCCESS;
    payload: IUser;
}

interface FetchUsersErrorAction {
    type: UserLoginActionTypes.FETCH_USERLOGIN_ERROR;
    payload: string;
}


export type UserLoginAction = FetchUserAction       |
                         FetchUserFindSuccessAction |
                         FetchUsersErrorAction