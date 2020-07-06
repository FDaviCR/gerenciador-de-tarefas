import React from 'react';
import { render } from '@testing-library/react';
import GerenciadorTarefas from './gerenciador-tarefas';

test('Renderizando projeto sem erros', () => {
  const { getByText } = render(<GerenciadorTarefas />);
});
