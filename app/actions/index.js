/**
 * Created by Petr on 27.1.2017.
 */
import { post } from '../fetch/index';
import { AsyncStorage } from 'react-native';

export function save(url, data){
    return function(dispatch) {
        dispatch({type: 'SAVE'});
        post(url, data)
            .end(function(err, res){
                console.log(res);
                let parsedResponse;
                try{
                    parsedResponse = JSON.parse(res.text);
                    dispatch({type: 'SAVE_FULFILLED'});
                }
                catch (err){
                    dispatch({type: 'SAVE_REJECTED', payload: parsedResponse.error});
                }
            });
    }
}

export function fetch(url, data={}){
    return function(dispatch) {
        dispatch({type: 'FETCH'});
        post(url, data)
            .end(function(err, res){
                console.log(res);
                let parsedResponse = JSON.parse(res.text);
                try{
                    dispatch({type: 'FETCH_FULFILLED', payload: parsedResponse});
                }
                catch (err){
                    dispatch({type: 'FETCH_REJECTED', payload: parsedResponse.error});
                }
            });
    }
}
