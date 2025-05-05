import React from 'react'
import { Save, X } from 'lucide-react';
import '../styles/addTask.css';
import Button from './Button';

function TaskModal({ tasktype_text, addTask, cancelTask, task, viewMode }) {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    React.useEffect(() => {
        if (task) {
            setName(task.name || '');
            setDescription(task.description || '');
        }
    }, [task]);

    return (
        <div className="newTask-overlay">
            <div className='newTask-container'>
                <div className='newTask-detail-box'>
                    <div className="newTask-header">
                        <span className='newTask-header-title'>{tasktype_text}</span>
                    </div>
                    <div className="newTask-name-box">
                        <span>Task Name</span>


                        <input
                            name="taskName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            disabled={viewMode}
                        />


                    </div>
                    <div className="newTask-description-box">
                        <span>Task Description</span>


                        <textarea
                            name="taskDescription"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            disabled={viewMode}
                        ></textarea>


                    </div>
                    <div className="newTask-buttons">

                        {!viewMode && (<Button backgroundColor="#00b894" text="Save" Icon={Save} onClick={() => {
                            if (name.trim() && description.trim()) {
                                addTask(name, description);
                                setName('');
                                setDescription('');
                            }
                        }} type="taskButton" />)}

                        <Button backgroundColor="#db3031" text="Cancel" Icon={X}
                            onClick={() => {
                                cancelTask();
                                setName('');
                                setDescription('');
                            }} type="taskButton" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TaskModal
