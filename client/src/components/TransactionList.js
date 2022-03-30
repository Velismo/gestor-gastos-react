import React, { useContext } from 'react';
import { TRansaction } from './TRansaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
        <h3>Histórico</h3>
        <ul className="list">
          {transactions.map(transaction =>(
            <TRansaction key={transaction.id} transaction={transaction}/>
          ))}
        </ul>    
    </>
  )
}
