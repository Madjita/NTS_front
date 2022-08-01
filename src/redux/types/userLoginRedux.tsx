import {IUser} from '../../components/IDataInterface/IDataInterface'

export interface UserLoginState {
    userLogin: null | IUser;
    loading: boolean;
    error: null | string;
}
export enum UserLoginActionTypes {
    FETCH_USER = 'FETCH_USERS',
    FETCH_USER_FIND_SUCCESS = 'FETCH_USER_FIND_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_FETCH_USERS_ERROR',

}
interface FetchUserAction {
    type: UserLoginActionTypes.FETCH_USER;
}

interface FetchUserFindSuccessAction {
    type: UserLoginActionTypes.FETCH_USER_FIND_SUCCESS;
    payload: IUser;
}

interface FetchUsersErrorAction {
    type: UserLoginActionTypes.FETCH_USER_ERROR;
    payload: string;
}


export type UserLoginAction = FetchUserAction |
                         FetchUserFindSuccessAction|
                         FetchUsersErrorAction