import request from 'superagent'
import { AsyncStorage } from 'react-native';
import {post, get} from '../../fetch/index';


export function saveBaseInformations(data){
    return function(dispatch) {
        dispatch({type: 'SAVE'});
        post('profile/save', data)
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
}

