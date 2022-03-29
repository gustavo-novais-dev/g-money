import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
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
    <>
      <Header onOpenNewTransactionModal={HandleOpenNewTransactionsModal} />

      <Dashboard />

      <Modal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={HandleCloseNewTransactionsModal}
      >
        <h2>Hello Modal</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}

