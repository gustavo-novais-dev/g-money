import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsContext } from './TransactionsContext';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {

  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

  function HandleOpenNewTransactionsModal() {
    setIsNewTransactionsModalOpen(true)
  }

  function HandleCloseNewTransactionsModal() {
    setIsNewTransactionsModalOpen(false)
  }

  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={HandleOpenNewTransactionsModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={HandleCloseNewTransactionsModal}
      />

      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}

