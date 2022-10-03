import * as UserActionCreators from './userAction'
import * as UserLoginActionCreators from './userLoginAction'
import * as CompanyActionCreators from './companyAction'
import * as ProjectActionCreators from './projectAction'
import * as UserProjectActionCreators from './userProjectAction'
import * as BuisnessTripCreators from './businessTripAction'

export default {
    ...UserActionCreators,
    ...CompanyActionCreators,
    ...ProjectActionCreators,
    ...UserProjectActionCreators,
    ...UserLoginActionCreators,
    ...BuisnessTripCreators,
}