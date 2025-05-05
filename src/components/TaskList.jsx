import React from 'react';
import { Trash, Eye, Pencil, X, Check } from 'lucide-react';
import '../styles/taskList.css';
import Button from './Button';

export default function TaskList({ state, dispatch }) {
    const { tasks, searchQuery } = state;

    const filteredTasks = tasks.filter(task => 
                                    task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                    task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const allCompleted = tasks.every(task => task.isCompleted);

    // Generalized function to open the modal
    const openModal = (type, idx = null) => {
        dispatch({
            type: 'TOGGLE_MODAL',
            payload: { type, index: idx }
        });
    };

    const deleteTask = (idx) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: { index: idx }
        });
    };

    const handleTaskStatus = (idx) => {
        dispatch({
            type: 'TOGGLE_TASK_COMPLETION',
            payload: { index: idx }
        });
    }

    return (
        <div className="table-container">
            <table className="styled-table">
                <thead>
                    <tr className="table-header">
                        <th><input
                            type="checkbox"
                            checked={allCompleted}
                            onChange={() => dispatch({ type: 'TOGGLE_ALL_TASK_COMPLETION' })}
                        /></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTasks.map((task, idx) => (
                        <tr key={idx} className="table-row">
                            <td><input
                                type="checkbox"
                                checked={task.isCompleted}
                                onChange={() => dispatch({ type: 'TOGGLE_TASK_COMPLETION', payload: { index: idx } })}
                            /></td>
                            <td>{task.name}</td>
                            <td>{task.description}</td>
                            <td>
                                <div className="status-button-wrapper">
                                    <Button
                                        backgroundColor={task.isCompleted ? "#00b894" : "#db3031"}
                                        text={task.isCompleted ? "Done" : "Not Done"}
                                        Icon={task.isCompleted ? Check : X}
                                        type="taskButton"
                                        onClick={() => handleTaskStatus(idx)}
                                    />
                                </div>
                            </td>
                            <td className="action-buttons">
                                <Button
                                    backgroundColor="#447fcd"
                                    text="View Task"
                                    Icon={Eye}
                                    onClick={() => openModal('view', idx)}
                                    type="taskButton"
                                />
                                <Button
                                    backgroundColor="#00b894"
                                    text="Edit Task"
                                    Icon={Pencil}
                                    onClick={() => openModal('edit', idx)}
                                    type="taskButton"
                                />
                                <Button
                                    backgroundColor="#db3031"
                                    text="Delete Task"
                                    Icon={Trash}
                                    onClick={() => deleteTask(idx)}
                                    type="taskButton"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
