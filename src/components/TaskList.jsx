import React, { useReducer } from 'react'
import { Trash, Eye, Pencil, X, Check } from 'lucide-react';
import { taskReducer, initialState } from './reducer/taskReducer';
import '../styles/taskList.css'
import Button from './Button';

export default function TaskList() {
    const [state, dispatch] = useReducer(taskReducer, initialState);
const viewTask = () => {

}
const editTask = () => {
    
}
const deleteTask = () => {
    
}


    return (
        <>
            <div className="table-container">
                <table className="styled-table">
                    <thead>
                        <tr className="table-header">
                            <th><input type="checkbox" /></th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.tasks.map((task, idx) => (
                            <tr key={idx} className="table-row">
                                <td><input type="checkbox" /></td>
                                <td>{task.name}</td>
                                <td>{task.description}</td>
                                <td>
                                <Button 
                                    backgroundColor={task.isCompleted===true ? "#00b894" : "#db3031" }
                                    text={task.isCompleted===true ? "Done" : "Not Done" } 
                                    Icon={task.isCompleted===true ? Check : X }  
                                    type="taskButton" />
                                </td>
                                <td className="action-buttons">
                                <Button backgroundColor="#447fcd" text="View Task" Icon={Eye} onClick={viewTask} type="taskButton" />
                                <Button backgroundColor="#00b894" text="Edit Task" Icon={Pencil} onClick={editTask} type="taskButton" />
                                <Button backgroundColor="#db3031" text="Delete Task" Icon={Trash} onClick={deleteTask} type="taskButton" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
