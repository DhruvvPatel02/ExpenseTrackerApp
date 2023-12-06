import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransationList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProivder } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProivder>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransationList />
        <AddTransaction />
      </div>
    </GlobalProivder>
  );
}

export default App;
