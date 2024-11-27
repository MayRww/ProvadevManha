import React, { useEffect, useState } from 'react';
import { tarefas } from '../pages/tarefaslistar';

const listarTarefas: React.FC = () => {
    const [tarefa, settarefas] = useState<tarefas[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/tarefas/listar${id}') 
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
            <h1>Lista de Tarefas</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Criado Em</th>
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

export default ListaTarefas;