/**
 * Created by Petr on 6.4.2017.
 */
import { AsyncStorage } from 'react-native';
import { post } from '../../fetch/index';

export function save(url, data){
    return function(dispatch) {
        dispatch({type: 'SAVE'});
        post(url, data)
            .end(function(err, res){
                console.log(res);
                try{
                    let parsedResponse = JSON.parse(res.text);
                    if(parsedResponse.result){
                        dispatch({type: 'SAVE_FULFILLED'});
                    }else{
                        dispatch({type: 'SAVE_REJECTED', payload: parsedResponse.error});
                    }
                }
                catch (err){
                    dispatch({type: 'SAVE_REJECTED', payload: true});
                }
            });
    }
}

