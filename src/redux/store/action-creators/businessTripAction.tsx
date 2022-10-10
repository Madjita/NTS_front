import {BusinessTripAction, BusinessTripActionTypes} from "../../types/businessTripRedux";
import {Dispatch} from "redux";
import axios from "axios";
import GetConnectionString, { sleepLoader } from "../../../settings/settings";
import { IBusinessTrip, IReportCheck } from "../../../components/IDataInterface/IDataInterface";

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

export const fetchBusinessTripsChecks_selected_all = (sessionToken: any, selectedBusinessTrip: IBusinessTrip) => {
    return async (dispatch: Dispatch<BusinessTripAction>) => {
        try {


            const json = JSON.stringify({
                id: selectedBusinessTrip.id
            });

            const newLocal = '/ReportCheck/BusinessTrips/selected';
            const response = await axios.post(GetConnectionString()+newLocal,json,
                                                { headers: {
                                                        'Authorization': sessionToken,
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
            console.log("Test2 response =",response.status)

            setTimeout(() => {
                dispatch({type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_CHECK_SELECTED_ALL, payload: response.data,select: selectedBusinessTrip})
            }, sleepLoader)
        } catch (e) {
            dispatch({
                type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_ERROR,
                payload: 'Произошла ошибка при загрузке командировок'
            })
        }
    }
}


export const fetchBusinessTripsChecks_add = (sessionToken: any, newReportCheck: IReportCheck) => {
    return async (dispatch: Dispatch<BusinessTripAction>) => {
        try {

            let formData: FormData = new FormData();
            formData.append('File_checkBankPhotoByte', newReportCheck.checkBankPhotoByte as File);
            formData.append('File_ticketPhotoByte', newReportCheck.ticketPhotoByte as File);
            formData.append('File_borderTicketPhotoByte',newReportCheck.borderTicketPhotoByte as File);
            formData.append('File_billPhotoByte', newReportCheck.billPhotoByte as File);
            formData.append('jsonString', JSON.stringify(newReportCheck));


            const newLocal = '/ReportCheck/allChecks/add';
            const response = await axios.post(GetConnectionString()+newLocal,formData,
                                                { headers: {
                                                        'Authorization': sessionToken,
                                                        'Content-Type': 'application/vnd.someprovider.invoice+json'//'application/json',

                                                    }
                                                })

                                                console.log("response.status  = ",response.status )
            if(response.status === 200)
            {
                setTimeout(() => {
                    dispatch({type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_CHECK_ADD, payload: newReportCheck, select: newReportCheck.businessTrip as IBusinessTrip })
                }, sleepLoader)
            }

           
        } catch (e) {
            dispatch({
                type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_ERROR,
                payload: 'Произошла ошибка при загрузке командировок'
            })
        }
    }
}


export const fetchBusinessTrip_delete = (sessionToken: any, selectedBusinessTrip: IBusinessTrip) => {
    return async (dispatch: Dispatch<BusinessTripAction>) => {
        try {

            console.log("businessTripHook.businessTrips[index] = ",selectedBusinessTrip)

            const json = JSON.stringify({
                id: selectedBusinessTrip.id
            });

            const newLocal = '/ReportCheck/BusinessTrips';
            const response = await axios.delete(GetConnectionString()+newLocal,
                                                { headers: {
                                                        'Authorization': sessionToken,
                                                        'Content-Type': 'application/json',
                                                    },
                                                    data: json,
                                                })

            console.log("response.status ",response.status)
            if(response.status ===  200 || response.status === 204)
            {
                
                setTimeout(() => {
                    dispatch({type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_DELETE,select: selectedBusinessTrip})
                }, sleepLoader)
            }

        } catch (e) {
            dispatch({
                type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_ERROR,
                payload: 'Произошла ошибка при загрузке командировок'
            })
        }
    }
}

export const fetchBusinessTripCheck_delete = (sessionToken: any, selectedReportCheck: IReportCheck) => {
    return async (dispatch: Dispatch<BusinessTripAction>) => {
        try {

            console.log("fetchBusinessTripCheck_delete =",selectedReportCheck)
            const json = JSON.stringify({
                id: selectedReportCheck.id,
                businessTrip: selectedReportCheck.businessTrip
            });

            const newLocal = '/ReportCheck/checks';
            const response = await axios.delete(GetConnectionString()+newLocal,
                                                { headers: {
                                                        'Authorization': sessionToken,
                                                        'Content-Type': 'application/json',
                                                    },
                                                    data: json,
                                                })

            console.log("response.status ",response.status)
            if(response.status ===  200 || response.status === 204)
            {
                
                setTimeout(() => {
                    dispatch({type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_CHECK_DELETE,payload: selectedReportCheck,select: selectedReportCheck.businessTrip as IBusinessTrip})
                }, sleepLoader)
            }

        } catch (e) {
            dispatch({
                type: BusinessTripActionTypes.FETCH_BUSINESS_TRIP_ERROR,
                payload: 'Произошла ошибка при загрузке командировок'
            })
        }
    }
}