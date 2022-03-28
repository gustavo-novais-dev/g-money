import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import {App} from './App';

createServer({
 routes(){
   this.namespace = 'api';
   this.get('/transactions', () =>{
     return [
       {
         id: 1,
         title: 'Transaction 1',
         Amount: 400,
         type: 'deposit',
         category: 'Food',
         CreateDt: new Date()
       }
     ]
   })
 }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


