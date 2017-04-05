export default function reducer(state={
    fetching: true,
    fetched: false,
    error: null
}, action){

    switch(action.type) {
        case 'FETCH_INBOX_LIST': {
            return {...state, fetching: true}
        }
        case 'FETCH_INBOX_LIST_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }
        case 'FETCH_INBOX_LIST_FULFILLED': {

            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload
            }
        }
    }
    return state;
}