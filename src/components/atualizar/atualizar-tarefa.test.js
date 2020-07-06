import React from 'react';
import ReactDOM from 'react-dom';
import AtualizarTarefa from './atualizar-tarefa';

describe('Teste do componente de atualizar de tarefas', () => {
  it('Deve renderizar o componente', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AtualizarTarefa id={1} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
