import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import TarefaListar from './components/TarefaListar';
import TarefaAlterar from './components/TarefaAlterar';
import TarefaCadastrar from './components/TarefaCadastrar';

import './App.css';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/listar">Lista de Tarefas</Link>
                        </li>
                        <Link to="/alterar">tarefa alteradas</Link>
                        <li>
                            <Link to="/cadastro">Cadastro de Tarefa</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/lista" element={<Listatarefa />} />
                    <Route path="/cadastro" element={<Cadastrotarefa />} />
                    <Route path="/alterar" element={<Alteratarefa />} />

                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;