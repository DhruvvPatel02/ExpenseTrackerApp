import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobaContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobaContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (<Transaction key={transaction.id} transaction={transaction} />))}      
      </ul>      
    </>
  )
}