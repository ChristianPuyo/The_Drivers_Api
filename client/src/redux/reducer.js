import {
    GET_DRIVERS,
    FILTER_DRIVERS_BY_TEAM,
    GET_TEAMS,
    FILTER_DRIVERS_BY_ORIGIN,
    ORDER_BY_NAME,
    ORDER_BY_BIRTHDATE,
    SEARCH_DRIVERS_BY_NAME,
    POST_DRIVER,
    GET_DRIVER_BY_ID
} from "./actions-types";


const initialState = {

    allDrivers: [],
    drivers: [],
    teams: [],
    driverById:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_DRIVERS:
            return {
                ...state,
                drivers: action.payload,
                allDrivers: action.payload
            }
        
        case GET_DRIVER_BY_ID:
            return{
                ...state,
                driverById : action.payload
            }
        case POST_DRIVER:
            return{
                ...state,
            }
        case GET_TEAMS:
            return {
                ...state,
                teams: action.payload

            }

        case FILTER_DRIVERS_BY_TEAM:
            {
                const allDrivers = state.allDrivers;
                const teamsFiltered = allDrivers.filter(element => {
                    if (Array.isArray(element.teams)) {
                        return element.teams.some(ele => ele.name === action.payload)
                    } else {
                        return element.teams && element.teams.includes(action.payload)
                    }

                })
                return {
                    ...state,
                    drivers: teamsFiltered
                }
            }

        case FILTER_DRIVERS_BY_ORIGIN:
            const allDrivers = state.allDrivers;
            const filteredByOrigin = action.payload === 'db' ?
                allDrivers.filter(ele => ele.createdInDb) :
                action.payload === 'api' ?
                    allDrivers.filter((ele) => !ele.createdInDb) :
                    allDrivers
            return {
                ...state,
                drivers: filteredByOrigin
            }

        case ORDER_BY_NAME:
            const driversOrderedByName = action.payload === 'asc' ?
                state.drivers.sort(function (a, b) {
                    if (a.firstName > b.firstName) {
                        return 1
                    }
                    if (b.firstName > a.firstName) {
                        return -1
                    }
                    return 0;

                }) :

                state.drivers.sort(function (a, b) {
                    if (a.firstName > b.firstName) {
                        return -1
                    }
                    if (b.firstName > a.firstName) {
                        return 1
                    }
                    return 0;

                })

            return {
                ...state,
                drivers: driversOrderedByName
            }
        case ORDER_BY_BIRTHDATE:
            const driversOrderedByDate = action.payload === 'asc' ?
                state.drivers.sort(function (a, b) {
                    const dateA = new Date(a.birthday);
                    const dateB = new Date(b.birthday);
                    return dateA - dateB;
                }) :
                state.drivers.sort(function (a, b) {
                    const dateA = new Date(a.birthday);
                    const dateB = new Date(b.birthday);
                    return dateB - dateA; // Invierte el orden para descendente
                });
                return {
                    ...state,
                    drivers: driversOrderedByDate,
                }

        case SEARCH_DRIVERS_BY_NAME:
            return {
                ...state,
                drivers: action.payload,
            }



        default:
            return {
                ...state,

            }
    }
}

export default reducer;