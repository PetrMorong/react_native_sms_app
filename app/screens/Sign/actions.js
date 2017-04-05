import request from 'superagent'
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';


export function fetchUser(username, password){
    return function(dispatch) {
        dispatch({type: 'FETCH_USER'});
        request
            .post('http://10.0.0.12/bulkgate/mobile-api/sign/in')
            .send({username: 'moriandr73@gmail.com', password: 'schichijuusan73' })
            .set('Accept', 'application/json')
            .end(function(err, res){
                try{
                    let payloadParsed = JSON.parse(res.text);
                    AsyncStorage.setItem('token', payloadParsed.token);
                    dispatch({type: 'FETCH_USER_FULFILLED', payload: payloadParsed});
                    Actions.DashboardNewUser()
                }
                catch (err){
                    dispatch({type: 'FETCH_USER_REJECTED'});
                }
            });
    }
}

export function closeError(){
    return {
        type: 'CLOSE_ERROR'
    };
}