import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from './hooks/UseTransactions'
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
    <TransactionProvider>
      <Header onOpenNewTransactionModal={HandleOpenNewTransactionsModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={HandleCloseNewTransactionsModal}
      />

      <GlobalStyle />
    </TransactionProvider>
  );
}

