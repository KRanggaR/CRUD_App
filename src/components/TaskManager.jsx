import React, { useReducer } from 'react'
import '../styles/taskManager.css'
import Search from './Search'
import Button from './Button'
import TaskList from './TaskList'
import { taskReducer, initialState } from './reducer/taskReducer';
import { Plus } from 'lucide-react';
import TaskModal from './TaskModal'

export default function TaskManager() {

    const [state, dispatch] = useReducer(taskReducer, initialState);


    const openModal = (type) => {
        dispatch({ type: 'TOGGLE_MODAL', payload: { type } });
    };

    const closeModal = () => {
        dispatch({ type: 'TOGGLE_MODAL' });
    };

    const handleSaveTask = (name, description) => {
        dispatch({
            type: 'ADD_TASK',
            payload: { name, description }
        });
    };

    const handleEditSaveTask = (name, description) => {
        dispatch({
            type: 'SAVE_EDIT_TASK',
            payload: {
                name,
                description,
                index: state.currentElementIndex
            }
        });
    }

    const currentTask = state.tasks[state.currentElementIndex];

    return (
        <>
            <div className="task_container">
            {state.modalType && (
                <div className="task_popup_overlay">
                    <TaskModal
                        tasktype_text={
                            state.modalType === 'add' ? "Add New Task" :
                            state.modalType === 'view' ? "Task Details" :
                            "Edit Task"
                        }
                        task={state.modalType !== 'add' ? currentTask : undefined}
                        addTask={state.modalType === 'edit' ? handleEditSaveTask : handleSaveTask}
                        cancelTask={closeModal}
                        viewMode={state.modalType === 'view'}
               
                    />
                </div>
            )}
                
                {/* {state.addTaskVisible && (
                    <div className="task_popup_overlay">
                        <TaskModal
                            tasktype_text="Add New Task"
                            addTask={handleSaveTask}
                            cancelTask={closeAddTask}
                            viewMode={false}
                        />
                    </div>
                )} */}
                

                <span className='task_header_title'>Task Management App</span>
                <div className='task_headers_operations'>
                    <Search dispatch={dispatch}/>
                    <div className='header_buttons'>
                        <Button backgroundColor="#447fcd" text="Add Task" Icon={Plus} onClick={() => openModal('add')} type="headerButton" />
                    </div>
                </div>
                <div className="task_items">
                    <TaskList state={state} dispatch={dispatch} />
                </div>
            </div>
        </>
    )
}
