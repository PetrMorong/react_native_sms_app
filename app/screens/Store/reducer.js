export default function reducer(state={
    saving: false,
    saved: false,
    error: null
}, action){

    switch(action.type) {
        case 'SAVE': {
            return {...state, saving: true}
        }
        case 'SAVE_REJECTED': {
            return {...state, saving: false, error: action.payload}
        }
        case 'SAVE_FULFILLED': {
            return {
                ...state,
                saving: false,
                saved: true,
                error: null
            }
        }
        case 'FETCH_PAYMENT': {
            return {...state, fetching: true, saved: false}
        }
        case 'FETCH_PAYMENT_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }
        case 'FETCH_PAYMENT_FULFILLED': {
            return {...state, fetching: false, payment: action.payload, error: null}
        }
    }
    return state;
}