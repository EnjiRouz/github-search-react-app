import React, {useReducer} from "react";
import {AlertContext} from "./alertContext";
import {alertReducer} from "./alertReducer";
import {SHOW_ALERT, HIDE_ALERT} from "../actionTypes";

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, null);

    const hide = () => dispatch({type: HIDE_ALERT});
    const show = (text, type) => dispatch({
        type: SHOW_ALERT,
        payload: {type, text}
    });

    return (
        <AlertContext.Provider value={{
            hide, show, alert: state
        }}>
            {children}
        </AlertContext.Provider>
    );
};