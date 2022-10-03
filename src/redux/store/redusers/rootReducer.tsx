import {combineReducers} from "redux";
import { companyReducer } from "./companyReducer";
import { projectReducer } from "./projectReducer";
import {userReducer} from "./userReducer";
import {userProjectReducer} from "./userProjectReducer";
import {userLoginReducer} from "./userLoginReducer"
import {businessTripReducer} from "./buisnessTropReducer"

export const rootReducer = combineReducers({
    users: userReducer,
    userLogin: userLoginReducer,
    company: companyReducer,
    project: projectReducer,
    userProject: userProjectReducer,
    businessTrip: businessTripReducer,
    
})

export type RootState = ReturnType<typeof rootReducer>