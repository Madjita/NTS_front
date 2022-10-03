import {BusinessTripAction, BusinessTripActionTypes, businessTripState} from "../../types/businessTripRedux";

const initialState: businessTripState = {
    businessTrips: [],
    loading: false,
    error: null
}

export const businessTripReducer = (state = initialState, action: BusinessTripAction): businessTripState => {
    switch (action.type) {
        case BusinessTripActionTypes.FETCH_BUSINESS_TRIP:
            return {loading: true, error: null, businessTrips: []}

        case BusinessTripActionTypes.FETCH_BUSINESS_TRIP_SUCCESS:
            return {loading: false, error: null, businessTrips: action.payload}

        case BusinessTripActionTypes.FETCH_BUSINESS_TRIP_ERROR:
            return {loading: false, error: action.payload, businessTrips: []}

        default:
            return state
    }
}