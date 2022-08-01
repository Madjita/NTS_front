import {UserLoginAction, UserLoginActionTypes, UserLoginState} from "../../types/userLoginRedux";

const initialState: UserLoginState = {
    userLogin: null,
    loading: false,
    error: null
}

export const userLoginReducer = (state = initialState, action: UserLoginAction): UserLoginState => {
    switch (action.type) {
        case UserLoginActionTypes.FETCH_USER:
            return {loading: true, error: null, userLogin: null}
        case UserLoginActionTypes.FETCH_USER_FIND_SUCCESS:
            return {loading: false, error: null, userLogin: action.payload}
        case UserLoginActionTypes.FETCH_USER_ERROR:
            return {loading: false, error: action.payload,  userLogin: null}
        default:
            return state
    }
}