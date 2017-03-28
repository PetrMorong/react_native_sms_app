/**
 * Created by Petr on 27.1.2017.
 */
import request from 'superagent'
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';


export function fetchUser(username, password){
    return function(dispatch) {
        dispatch({type: 'FETCH_USER_REJECTED'});
        request
            .post('http://10.0.0.12/bulkgate/mobile-api/sign/in')
            .send({username: username, password: password })
            .end(function(err, res){
                if(err){
                    console.log(err);
                    dispatch({type: 'FETCH_USER_REJECTED'});
                    return false;
                }
                console.log(res);
                dispatch({type: 'FETCH_USER_FULFILLED', payload: JSON.parse(res.text)});
                Actions.DashboardNewUser()
            });
    }
}


export function getTranslations(){
    return function(dispatch) {
        request
            .get('https://bulkgate-node.herokuapp.com/translations')
            .end(function(err, res){
                AsyncStorage.setItem('translations', res.text);
                dispatch({type: 'GOT_TRANSLATIONS', payload: JSON.parse(res.text)})
            });
    }
}

export function save(link, data){
    return function () {
        Actions.pop()
    }
}

export function fetch(link, data){

}