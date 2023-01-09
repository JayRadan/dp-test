import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TodoListContext from './TodoListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <TodoListContext>
  
 <App />

 </TodoListContext>
   
    </BrowserRouter>
);

