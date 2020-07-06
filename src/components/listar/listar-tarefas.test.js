import React from 'react';
import ReactDOM from 'react-dom';
import ListarTarefas from './listar-tarefas';

describe('Teste do componente de listagem de tarefas', () => {
  it('Deve renderizar o componente', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListarTarefas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
