import {CompanyAction, CompanyActionTypes, CompanyState} from "../../types/companyRedux"

const initialState: CompanyState = {
    companies: [],
    loading: false,
    error: null
}

export const companyReducer = (state = initialState, action: CompanyAction): CompanyState => {
    switch (action.type) {
        case CompanyActionTypes.FETCH_COMPANIES:
            return {loading: true, error: null, companies: []}
        case CompanyActionTypes.FETCH_COMPANIES_SUCCESS:
            return {loading: false, error: null, companies: action.payload}
        case CompanyActionTypes.FETCH_COMPANIES_ERROR:
            return {loading: false, error: action.payload, companies: []}
        case CompanyActionTypes.FETCH_COMPANIES_REMOVE:
            return {loading: true, error: null, companies: state.companies.filter((item,index) => item.name !== action.name)}
        case CompanyActionTypes.FETCH_COMPANIES_REMOVE_SUCCESS:
            return {loading: false, error: null, companies: state.companies}
        
        case CompanyActionTypes.FETCH_COMPANIES_ADD:
            return {loading: true, error: null, companies: []}
        case CompanyActionTypes.FETCH_COMPANIES_ADD_SUCCESS:
            return {loading: false, error: null, companies: action.payload}
        default:
            return state
    }
}