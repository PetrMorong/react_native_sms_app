import request from 'superagent';
import { AsyncStorage } from 'react-native';

const urlBase = 'http://10.0.0.12/bulkgate/mobile-api/';

let token;
AsyncStorage.getItem('token', (err, result) => {


    token = result;
    console.log(result)
});

export function post(url, data){
    console.log(token);
   return request
        .post(urlBase + url)
        .set('X-BulkGate-Api-Token', token)
        .send(data)
        /*.end(function(err, res){
            console.log(res);
            try{
                dispatch({type: 'SAVE_FULFILLED'});
            }
            catch (err){
                dispatch({type: 'SAVE_REJECTED'});
            }
        });*/
}

export function get(url, data){
    request
        .get('http://10.0.0.12/bulkgate/mobile-api/profile/save')
        .set('X-BulkGate-Api-Token', token)
        .send({ first_name, last_name, country, phone_number, timezone })
        .end(function(err, res){
            console.log(res);
            try{
                dispatch({type: 'SAVE_FULFILLED'});
            }
            catch (err){
                dispatch({type: 'SAVE_REJECTED'});
            }
        });
}