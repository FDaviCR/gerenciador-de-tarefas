import React from 'react';
import './gerenciador-tarefas.css';
import { useRoutes } from 'hookrouter';

import ListarTarefas from './components/listar/listar-tarefas.js';
import CadastrarTarefas from './components/cadastrar/cadastrar-tarefa.js';
import AtualizarTarefas from './components/atualizar/atualizar-tarefa.js';

const routes = {
  '/': () => <ListarTarefas />,
  '/cadastrar': () => <CadastrarTarefas />,
  '/atualizar/:id': ({id}) => <AtualizarTarefas id={id} />
};

function GerenciadorTarefas() {
  return useRoutes(routes);
}

export default GerenciadorTarefas;
