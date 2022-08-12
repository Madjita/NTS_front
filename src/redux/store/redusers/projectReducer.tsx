import {ProjectAction, ProjectActionTypes, ProjectState} from "../../types/projectRedux"

const initialState: ProjectState = {
    projects: [],
    loading: false,
    error: null
}

export const projectReducer = (state = initialState, action: ProjectAction): ProjectState => {
    switch (action.type) {
        case ProjectActionTypes.FETCH_PROJECT:
            {
                return {loading: true, error: null, projects: []}
            }
        case ProjectActionTypes.FETCH_PROJECT_SUCCESS:
            {
                return {loading: false, error: null, projects: action.payload}
            }
        case ProjectActionTypes.FETCH_PROJECT_ERROR:
            return {loading: false, error: action.payload, projects: []}
       /* case ProjectActionTypes.FETCH_PROJECT_ERROR:
            return {loading: true, error: null, projects: state.projects.filter((item,index) => item.title !== action.payload)}*/
        case ProjectActionTypes.FETCH_PROJECT_REMOVE_SUCCESS:
            return {loading: false, error: null, projects: action.payload}
        
        case ProjectActionTypes.FETCH_PROJECT_ADD:
            return {loading: true, error: null, projects: []}
        case ProjectActionTypes.FETCH_PROJECT_ADD_SUCCESS:
            return {loading: false, error: null, projects: action.payload}

        case ProjectActionTypes.FETCH_PROJECT_FIND:
            return {loading: true, error: null, projects: []}
        case ProjectActionTypes.FETCH_PROJECT_FIND_SUCCESS:
            state.projects.push(action.payload)
            return {loading: false, error: null, projects: state.projects}

        case ProjectActionTypes.FETCH_PROJECT_EDIT:
            return {loading: true, error: null, projects: state.projects}
        case ProjectActionTypes.FETCH_PROJECT_EDIT_SUCCESS:
                return {loading: true, error: null, projects: action.payload}

        default:
            return state
    }
}