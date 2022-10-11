import {IBusinessTrip, IReportCheck} from '../../components/IDataInterface/IDataInterface'

export interface businessTripState {
    businessTrips: IBusinessTrip[];
    loading: boolean;
    error: null | string;
}
export enum BusinessTripActionTypes {
    FETCH_BUSINESS_TRIP = 'FETCH_BUSINESS_TRIP',
    FETCH_BUSINESS_TRIP_SUCCESS = 'FETCH_BUSINESS_TRIP_SUCCESS',
    FETCH_BUSINESS_TRIP_ERROR = 'FETCH_BUSINESS_TRIP_ERROR',
    FETCH_BUSINESS_TRIP_DELETE = 'FETCH_BUSINESS_TRIP_DELETE',

    FETCH_BUSINESS_TRIP_CHECK_SELECTED_ALL = 'FETCH_BUSINESS_TRIP_CHECK_SELECTED_ALL',
    FETCH_BUSINESS_TRIP_CHECK_ADD = 'FETCH_BUSINESS_TRIP_CHECK_ADD',
    FETCH_BUSINESS_TRIP_CHECK_EDIT = 'FETCH_BUSINESS_TRIP_CHECK_EDIT',
    FETCH_BUSINESS_TRIP_CHECK_DELETE = 'FETCH_BUSINESS_TRIP_CHECK_DELETE'
}

interface FetchBusinessTripAction {
    type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP;
}

interface FetchBusinessTripSuccessAction {
    type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_SUCCESS;
    payload: IBusinessTrip[];
}

interface FetchBusinessTripErrorAction {
    type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_ERROR;
    payload: string;
}

interface FetchBusinessTripDeleteAction {
    type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_DELETE;
    select: IBusinessTrip;
}

interface FetchBusinessTripCheckSelectedAllAction {
    type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_CHECK_SELECTED_ALL;
    payload: IReportCheck[];
    select: IBusinessTrip;
}

interface FetchBusinessTripCheckAddAction {
    type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_CHECK_ADD;
    payload: IReportCheck;
    select: IBusinessTrip;
}

interface FetchBusinessTripCheckDeleteAction {
    type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_CHECK_DELETE;
    payload: IReportCheck;
    select: IBusinessTrip;
}

interface FetchBusinessTripCheckEditAction {
    type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_CHECK_EDIT;
    old: IReportCheck;
    edit: IReportCheck;
    select: IBusinessTrip;
}



export type BusinessTripAction =    FetchBusinessTripAction         |
                                    FetchBusinessTripSuccessAction  |
                                    FetchBusinessTripErrorAction    |
                                    FetchBusinessTripDeleteAction   |
                                    FetchBusinessTripCheckSelectedAllAction |
                                    FetchBusinessTripCheckAddAction     |
                                    FetchBusinessTripCheckDeleteAction  |
                                    FetchBusinessTripCheckEditAction
                                    