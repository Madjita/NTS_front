import {IBusinessTrip} from '../../components/IDataInterface/IDataInterface'

export interface businessTripState {
    businessTrips: IBusinessTrip[];
    loading: boolean;
    error: null | string;
}
export enum BusinessTripActionTypes {
    FETCH_BUSINESS_TRIP = 'FETCH_BUSINESS_TRIP',
    FETCH_BUSINESS_TRIP_SUCCESS = 'FETCH_BUSINESS_TRIP_SUCCESS',
    FETCH_BUSINESS_TRIP_ERROR = 'FETCH_BUSINESS_TRIP_ERROR',

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


export type BusinessTripAction =    FetchBusinessTripAction         |
                                    FetchBusinessTripSuccessAction  |
                                    FetchBusinessTripErrorAction