import { IAlertState, IAlertAction, ITodoActionTypes } from './../types/types';
const initialState={
    alertText:'',
    alertStatus:''
}
export const alertReducer=(state:IAlertState=initialState, action:IAlertAction)=>{
    switch (action.type) {
        case ITodoActionTypes.SHOW_ALERT:
            return{ alertText:action.payload, alertStatus:action.status}
            break;
        case ITodoActionTypes.HIDE_ALERT:
            return{ alertText:'', alertStatus:''}
            break;
    
        default:
            return state;
    }
}