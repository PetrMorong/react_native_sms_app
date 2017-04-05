import { Actions } from 'react-native-router-flux';
import {post, get} from '../../fetch/index';


export function fetchInbox(limit, offset){

    return function(dispatch) {
        dispatch({type: 'FETCH_INBOX_LIST'});
        post('inbox/load', {limit, offset})
            .end(function(err, res){
                console.log(res);
                try{
                    dispatch({type: 'FETCH_INBOX_LIST_FULFILLED', payload: JSON.parse(res.text)});
                }
                catch (err){
                    dispatch({type: 'FETCH_INBOX_LIST_REJECTED'});
                }
            });
    }
}
