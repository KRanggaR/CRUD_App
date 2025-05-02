import React, { useReducer } from 'react'
import '../styles/taskManager.css'
import Search from './Search'
import Button from './Button'
import TaskList from './TaskList'
import { taskReducer, initialState } from './reducer/taskReducer';

import { Plus } from 'lucide-react';
import AddTask from './AddTask'

export default function TaskManager() {

    const [state, dispatch] = useReducer(taskReducer, initialState);
    const addNewTask = () => {
        dispatch({ type: 'TOGGLE_TASK_BOX' });
    }
    
    const handleSaveTask = (name, description) => {
        dispatch({
            type: 'ADD_TASK',
            payload: {name, description}
        });
    };
    const closeAddTask = () => {
        dispatch({
            type: 'CANCEL_TASK'
        })
            
    }

    return (
        <>
            <div className="task_container">
                {state.showAddTask && (
                    <div className="task_popup_overlay">
                        <AddTask
                            tasktype_text="Add New Task"
                            addTask={handleSaveTask}
                            cancelTask={closeAddTask}
                        />
                    </div>
                )}
                <span className='task_header_title'>Task Management App</span>
                <div className='task_headers_operations'>
                    <Search />
                    <div className='header_buttons'>
                        <Button backgroundColor="#447fcd" text="Add Task" Icon={Plus} onClick={addNewTask} type="headerButton" />
                    </div>
                </div>
                <div className="task_items">
                    <TaskList state={state} dispatch={dispatch}/>
                </div>
            </div>
        </>
    )
}
