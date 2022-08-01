import {CompanyAction, CompanyActionTypes} from "../../types/companyRedux";
import {Dispatch} from "redux";
import axios from "axios";
import GetConnectionString, { sleepLoader } from "../../../settings/settings";

export const fetchCompanies = (sessionToken: any) => {
    return async (dispatch: Dispatch<CompanyAction>) => {
        try {
            dispatch({type: CompanyActionTypes.FETCH_COMPANIES})

            axios.defaults.headers.common['Authorization'] = sessionToken;
            const response = await (await axios.get(GetConnectionString()+'/Authorize/companys'))


            setTimeout(() => {
                dispatch({type: CompanyActionTypes.FETCH_COMPANIES_SUCCESS, payload: response.data})
            }, sleepLoader)
        } catch (e) {
            dispatch({
                type: CompanyActionTypes.FETCH_COMPANIES_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}


export const removeCompany = (sessionToken: any,name: string) => {

    return async (dispatch: Dispatch<CompanyAction>,payload: any) => {
        try {
            dispatch({type: CompanyActionTypes.FETCH_COMPANIES_REMOVE, name: name})

            const formData  = new FormData();
            formData.append('Name', name);


            axios.defaults.headers.common['Authorization'] = sessionToken;
            const response = await (await axios.delete(GetConnectionString()+'/Authorize/companys',
                                                { headers: {
                                                        'Authorization': sessionToken
                                                    },
                                                    data: formData,
                                                }))

            setTimeout(() => {
                dispatch({type: CompanyActionTypes.FETCH_COMPANIES_REMOVE_SUCCESS, payload: response.data})
            }, sleepLoader)
        } catch (e) {
            dispatch({
                type: CompanyActionTypes.FETCH_COMPANIES_ERROR,
                payload: 'Произошла ошибка при удалении компании'
            })
        }
    }
}


export const addCompany = (sessionToken: any,name: string) => {

    return async (dispatch: Dispatch<CompanyAction>,payload: any) => {
        try {
            dispatch({type: CompanyActionTypes.FETCH_COMPANIES_ADD, name: name})

            const formData  = new FormData();
            formData.append('Name', name);

            axios.defaults.headers.common['Authorization'] = sessionToken;
            const response = await (await axios.post(GetConnectionString()+'/Authorize/companys',formData))

            setTimeout(() => {
                dispatch({type: CompanyActionTypes.FETCH_COMPANIES_ADD_SUCCESS, payload: response.data})
            }, sleepLoader)
        } catch (e) {
            dispatch({
                type: CompanyActionTypes.FETCH_COMPANIES_ERROR,
                payload: 'Произошла ошибка при добавлении компании'
            })
        }
    }
}