import {UserProjectAction, UserProjectActionTypes, UserProjectState} from "../../types/userProjectRedux"

const initialState: UserProjectState = {
    userProjects: [],
    loading: false,
    error: null
}

export const userProjectReducer = (state = initialState, action: UserProjectAction): UserProjectState => {
    switch (action.type) {
        case UserProjectActionTypes.FETCH_USERProject:
            return {loading: true, error: null, userProjects: []}
        case UserProjectActionTypes.FETCH_USERProject_SUCCESS:
            return {loading: false, error: null, userProjects: action.payload}

        case UserProjectActionTypes.FETCH_USERProject_ERROR:
            return {loading: false, error: action.payload, userProjects: []}
        case UserProjectActionTypes.FETCH_USERProject_REMOVE_SUCCESS:
            return {loading: false, error: null, userProjects: state.userProjects}
        
        case UserProjectActionTypes.FETCH_USERProject_ADD:
            return {loading: true, error: null, userProjects: []}
        case UserProjectActionTypes.FETCH_USERProject_ADD_SUCCESS:
            return {loading: false, error: null, userProjects: action.payload}
        default:
            return state
    }
}