/**
 * Created by Petr on 27.1.2017.
 */
import request from 'superagent'

export function fetchUser(){
    return function(dispatch) {
        request
            .get('http://10.0.0.34:3000/get-user')
            .end(function(err, res){
                dispatch({type: 'FETCH_USER_FULFILLED', payload: JSON.parse(res.text)})

            });
    }
}

export function setUserName(name) {
    return {
        type: 'SET_USER_NAME',
        payload: 'name'
    }
}