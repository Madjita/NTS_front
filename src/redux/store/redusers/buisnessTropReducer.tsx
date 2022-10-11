import {
  BusinessTripAction,
  BusinessTripActionTypes,
  businessTripState,
} from "../../types/businessTripRedux";

const initialState: businessTripState = {
  businessTrips: [],
  loading: false,
  error: null,
};

export const businessTripReducer = (
  state = initialState,
  action: BusinessTripAction
): businessTripState => {
  switch (action.type) {
    case BusinessTripActionTypes.FETCH_BUSINESS_TRIP: {
      return { loading: true, error: null, businessTrips: [] };
    }

    case BusinessTripActionTypes.FETCH_BUSINESS_TRIP_SUCCESS: {
      return { loading: false, error: null, businessTrips: action.payload };
    }

    case BusinessTripActionTypes.FETCH_BUSINESS_TRIP_ERROR: {
      return { loading: false, error: action.payload, businessTrips: [] };
    }
    case BusinessTripActionTypes.FETCH_BUSINESS_TRIP_CHECK_SELECTED_ALL: {
      let index = state.businessTrips.findIndex(
        (x) => x.id == action.select.id
      );
      let obj = state.businessTrips[index];

      obj.reportChecks = action.payload;

      return {
        loading: false,
        error: null,
        businessTrips: state.businessTrips,
      };
    }

    case BusinessTripActionTypes.FETCH_BUSINESS_TRIP_CHECK_ADD: {
      let index = state.businessTrips.findIndex(
        (x) => x.id == action.select.id
      );
      let obj = state.businessTrips[index];
      obj.spent += action.payload.value; //Данный код нужен чтоб добавть значение к завтраченно не запрашивая у сервера
      obj.reportChecks.push(action.payload);

      return {
        loading: false,
        error: null,
        businessTrips: state.businessTrips,
      };
    }

    case BusinessTripActionTypes.FETCH_BUSINESS_TRIP_DELETE: {
      let index = state.businessTrips.findIndex(
        (x) => x.id == action.select.id
      );
      state.businessTrips.splice(index, 1);

      return {
        loading: false,
        error: null,
        businessTrips: state.businessTrips,
      };
    }

    case BusinessTripActionTypes.FETCH_BUSINESS_TRIP_CHECK_DELETE: {
      let index = state.businessTrips.findIndex(
        (x) => x.id == action.select.id
      );
      let obj = state.businessTrips[index];

      obj.spent -= action.payload.value; //Данный код нужен чтоб добавть значение к завтраченно не запрашивая у сервера
      obj.reportChecks.splice(index, 1);

      return {
        loading: false,
        error: null,
        businessTrips: state.businessTrips,
      };
    }

    case BusinessTripActionTypes.FETCH_BUSINESS_TRIP_CHECK_EDIT: {
        let index = state.businessTrips.findIndex(
          (x) => x.id == action.select.id
        );
        let obj = state.businessTrips[index];
  
        if(action.old.value != action.edit.value)
        {
            obj.spent -= action.old.value; //Данный код нужен чтоб добавть значение к завтраченно не запрашивая у сервера
            obj.spent += action.edit.value; //Данный код нужен чтоб добавть значение к завтраченно не запрашивая у сервера
        }
        
        let indexReplace = obj.reportChecks.findIndex(x=> x.id === action.old.id);

        obj.reportChecks[indexReplace] = action.edit;
  
        return {
          loading: false,
          error: null,
          businessTrips: state.businessTrips,
        };
      }

    default:
      return state;
  }
};
