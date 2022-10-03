import {BusinessTripAction, BusinessTripActionTypes} from "../../types/businessTripRedux";
import {Dispatch} from "redux";
import axios from "axios";
import GetConnectionString, { sleepLoader } from "../../../settings/settings";

export const fetchBusinessTrips = (sessionToken: any) => {
    return async (dispatch: Dispatch<BusinessTripAction>) => {
        try {
            //dispatch({type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP})


            const newLocal = '/ReportCheck/BusinessTrips';
            const response = await (await axios.get(GetConnectionString()+newLocal,
                                                { headers: {
                                                        'Content-Type': 'application/json',
                                                        'Authorization': sessionToken
                                                    }
                                                }))

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
