import {UserLoginAction, UserLoginActionTypes, UserLoginState} from "../../types/userLoginRedux";

const initialState: UserLoginState = {
    userLogin: null,
    loadingLogin: false,
    errorLogin: null
}

export const userLoginReducer = (state = initialState, action: UserLoginAction): UserLoginState => {
    switch (action.type) {
        case UserLoginActionTypes.FETCH_USERLOGIN:
            return {loadingLogin: true, errorLogin: null, userLogin: state.userLogin}
        case UserLoginActionTypes.FETCH_USERLOGIN_FIND_SUCCESS:
            return {loadingLogin: false, errorLogin: null, userLogin: action.payload}
        case UserLoginActionTypes.FETCH_USERLOGIN_ERROR:
            return {loadingLogin: false, errorLogin: action.payload,  userLogin: null}
        default:
            return state
    }
}