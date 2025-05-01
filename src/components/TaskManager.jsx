import React from 'react'
import '../styles/taskManager.css'
import Search from './Search'
import Button from './Button'
import TaskList from './TaskList'

import { Plus } from 'lucide-react';


export default function TaskManager() {
    

    const addTask = () => {

    }

    return (
        <>
            <div className="task_container">
                <span className='task_header_title'>Task Management App</span>
                <div className='task_headers_operations'>
                    <Search />
                    <div className='header_buttons'>
                        <Button backgroundColor="#447fcd" text="Add Task" Icon={Plus} onClick={addTask} type="headerButton" />
                    </div>
                </div>
                    <div className="task_items">
                        <TaskList />
                    </div>
            </div>
        </>
    )
}
