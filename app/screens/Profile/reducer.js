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
                saved: true
            }
        }
    }
    return state;
}