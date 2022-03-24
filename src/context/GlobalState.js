import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Flores', amount: -20 },
        { id: 2, text: 'Salario', amount: 300 },
        { id: 3, text: 'Libro', amount: -10 },
        { id: 4, text: 'Regalo', amount: 150 }
    ]
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalPorvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<GlobalContext value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext>);
}