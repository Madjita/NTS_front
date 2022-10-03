import {BusinessTripAction, BusinessTripActionTypes} from "../../types/businessTripRedux";
import {Dispatch} from "redux";
import axios from "axios";
import GetConnectionString, { sleepLoader } from "../../../settings/settings";
import { IBusinessTrip } from "../../../components/IDataInterface/IDataInterface";

export const fetchBusinessTrips = (sessionToken: any) => {
    return async (dispatch: Dispatch<BusinessTripAction>) => {
        try {
            //dispatch({type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP})


            const newLocal = '/ReportCheck/BusinessTrips';
            const response = await axios.get(GetConnectionString()+newLocal,
                                                { headers: {
                                                        'Authorization': sessionToken,
                                                        'Content-Type': 'application/json',

                                                    }
                                                })

            setTimeout(() => {
                dispatch({type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_SUCCESS, payload: response.data})
            }, sleepLoader)
        } catch (e) {
            dispatch({
                type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_ERROR,
                payload: 'Произошла ошибка при загрузке командировок'
            })
        }
    }
}

export const fetchBusinessTrips_finish = (sessionToken: any, newBusinessTrip: IBusinessTrip) => {
    return async (dispatch: Dispatch<BusinessTripAction>) => {
        try {
            //dispatch({type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP})
            const json = JSON.stringify(newBusinessTrip);

            const newLocal = '/ReportCheck/BusinessTrips/finish';
            const response = await axios.post(GetConnectionString()+newLocal,json,
                                                { headers: {
                                                        'Authorization': sessionToken,
                                                        'Content-Type': 'application/json'
                                                    },
                                                })
        } catch (e) {
            dispatch({
                type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_ERROR,
                payload: 'Произошла ошибка при загрузке командировок'
            })
        }
    }
}


export const fetchBusinessTrips_add = (sessionToken: any, newBusinessTrip: IBusinessTrip) => {
    return async (dispatch: Dispatch<BusinessTripAction>) => {
        try {
            //dispatch({type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP})
            const json = JSON.stringify(newBusinessTrip);

            const newLocal = '/ReportCheck/BusinessTrips';
            const response = await axios.post(GetConnectionString()+newLocal,json,
                                                { headers: {
                                                        'Authorization': sessionToken,
                                                        'Content-Type': 'application/json'
                                                    },
                                                })

            setTimeout(() => {
                dispatch({type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_SUCCESS, payload: response.data})
            }, sleepLoader)
        } catch (e) {
            dispatch({
                type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_ERROR,
                payload: 'Произошла ошибка при загрузке командировок'
            })
        }
    }
}
