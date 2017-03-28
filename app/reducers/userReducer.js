/**
 * Created by Petr on 27.1.2017.
 */

export default function reducer(state={
    fetching: false,
    fetched: false,
    error: null
}, action){

    switch(action.type) {
        case 'FETCH_USER': {
            return {...state, fetching: true}
        }
        case 'FETCH_USER_REJECTED': {
            return {...state, fetching: false, error: 'error'}
        }
        case 'FETCH_USER_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            }
        }
    }
    return state;
}