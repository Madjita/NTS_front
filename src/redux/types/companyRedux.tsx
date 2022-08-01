import {ICompany} from '../../components/IDataInterface/IDataInterface'

export interface CompanyState {
    companies: ICompany[];
    loading: boolean;
    error: null | string;
}
export enum CompanyActionTypes {
    FETCH_COMPANIES = 'FETCH_COMPANIES',
    FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS',
    FETCH_COMPANIES_ERROR = 'FETCH_COMPANIES_FETCH_COMPANIES_ERROR',


    FETCH_COMPANIES_REMOVE = 'FETCH_COMPANIES_REMOVE',
    FETCH_COMPANIES_REMOVE_SUCCESS = 'FETCH_COMPANIES_REMOVE_SUCCESS',


    FETCH_COMPANIES_ADD = 'FETCH_COMPANIES_ADD',
    FETCH_COMPANIES_ADD_SUCCESS = 'FETCH_COMPANIES_ADD_SUCCESS',
}
interface FetchCompanyAction {
    type: CompanyActionTypes.FETCH_COMPANIES;
}
interface FetchCompanyRemoveAction {
    type: CompanyActionTypes.FETCH_COMPANIES_REMOVE;
    name: string;
}

interface FetchCompanyRemoveSuccessAction {
    type: CompanyActionTypes.FETCH_COMPANIES_REMOVE_SUCCESS;
    payload: ICompany[]
}

interface FetchCompanySuccessAction {
    type: CompanyActionTypes.FETCH_COMPANIES_SUCCESS;
    payload: ICompany[]
}
interface FetchCompanyErrorAction {
    type: CompanyActionTypes.FETCH_COMPANIES_ERROR;
    payload: string;
}

interface FetchCompanyAddAction {
    type: CompanyActionTypes.FETCH_COMPANIES_ADD;
    name: string
}

interface FetchCompanyAddSuccessAction {
    type: CompanyActionTypes.FETCH_COMPANIES_ADD_SUCCESS;
    payload: ICompany[]
}


export type CompanyAction = FetchCompanyAction |
                         FetchCompanySuccessAction |
                         FetchCompanyErrorAction|
                         FetchCompanyRemoveAction |
                         FetchCompanyRemoveSuccessAction |
                         FetchCompanyAddAction | 
                         FetchCompanyAddSuccessAction