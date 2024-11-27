import React, { useEffect, useState } from 'react';
import { tarefas } from '../pages/tarefasalterar';

const AlterarTarefas: React.FC = () => {
    const [tarefa, settarefas] = useState<tarefas[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/tarefas/alterar${id}') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                settarefas(data);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }, []);

    return (
        <div>
            <h1>Alteração de Tarefas</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Alterado Em</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(Tarefa => (
                        <tr key={tarefa.id}>
                            <td>{tarefa.id}</td>
                            <td>{tarefa.nome}</td>
                            <td>{tarefa.descricao}</td>
                            <td>{new Date(produto.criadoEm).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AlterarTarefas;