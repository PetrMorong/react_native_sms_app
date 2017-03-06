/**
 * Created by Petr on 27.1.2017.
 */
import request from 'superagent'

export function fetchUser(dispatch){
    dispatch({type: 'FETCH_USER'})
    return function(dispatch) {
        request
            .post('http://10.0.0.12:8080/fetch-user')
            .end(function(err, res){
                dispatch({type: 'FETCH_USER_FULFILLED', payload: JSON.parse(res.text)})
            });
    }
}
