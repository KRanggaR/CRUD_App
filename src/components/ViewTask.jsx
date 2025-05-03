import React from 'react'
import { Save, X } from 'lucide-react';
import '../styles/viewTask.css';
import Button from './Button';

function ViewTask({ tasktype_text, closeViewTask, task}) {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    React.useEffect(() => {
        if (task) {
            setName(task.name);
            setDescription(task.description);
        }
    }, [task]);
    
    return (
        <div className="viewTask-overlay">
            <div className='viewTask-container'>
                <div className='viewTask-detail-box'>
                    <div className="viewTask-header">
                        <span className='viewTask-header-title'>{tasktype_text}</span>
                    </div>
                    <div className="viewTask-name-box">
                        <span>Task Name</span>


                        <input
                            name="taskName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text" 
                            disabled
                            />


                    </div>
                    <div className="viewTask-description-box">
                        <span>Task Description</span>


                        <textarea
                            name="taskDescription"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            disabled 
                        ></textarea>


                    </div>
                    <div className="viewTask-buttons">
                        
                        <Button backgroundColor="#db3031" text="Close" Icon={X} 
                        onClick={() => {
                            closeViewTask();
                                setName('');
                                setDescription('');
                        }} type="taskButton" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ViewTask
