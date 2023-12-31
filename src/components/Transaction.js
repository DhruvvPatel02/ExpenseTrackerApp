import React, {useContext} from 'react';
import { GlobaContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobaContext);
  
  const sign = transaction.amount < 0 ? '-' : '+';
  
  return (
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onclick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
                                         </li>
  )
}