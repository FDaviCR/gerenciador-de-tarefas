import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GerenciadorTarefas from './gerenciador-tarefas';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <GerenciadorTarefas />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
