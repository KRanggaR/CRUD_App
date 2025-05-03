export const initialState = {
    tasks: [
        {
            name: "Checkin",
            description: "LogIn to Payroll",
            isCompleted: true,

        },
        {
            name: "Progress",
            description: "Report every task done",
            isCompleted: false,
        },
        {
            name: "Ckeckout",
            description: "Save hours and logout",
            isCompleted: false,
        }
    ],
    appIsBuffering: false,
    showAddTask: false,
    showViewTask: false,
    currentViewIndex: null,
    error: '',
};

export const taskReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_ALL_TASK_COMPLETION': {
            const completeAll = !state.tasks.every(task => task.isCompleted);
            const updatedTasks = state.tasks.map(task => ({
                ...task,
                isCompleted: completeAll
            }));
            return {
                ...state,
                tasks: updatedTasks,
            };
        }


        case 'TOGGLE_TASK_COMPLETION': {
            const updatedTask = state.tasks.map((task, index) => {
                if (index === action.payload.index) {
                    return { ...task, isCompleted: !task.isCompleted };
                }
                return task
            })
            return {
                ...state,
                tasks: updatedTask,
            }
        }

        case 'TOGGLE_TASK_BOX':
            return {
                ...state,
                showAddTask: !state.showAddTask,
            };

            case 'TOGGLE_VIEWTASK_BOX':
            return {
                ...state,
                showViewTask: !state.showViewTask,
                currentViewIndex: action.payload && 'index' in action.payload ? action.payload.index : null,
            };

        case 'ADD_TASK': {
            const newTask = {
                name: action.payload.name,
                description: action.payload.description,
                isCompleted: false
            };
            return {
                ...state,
                tasks: [...state.tasks, newTask],
                showAddTask: false
            };
        }

        case 'CANCEL_TASK':
            return {
                ...state,
                showAddTask: false,
            }

        case 'DELETE_TASK': {
            const updatedTask = state.tasks.filter((_, index) => index !== action.payload.index);
            return {
                ...state,
                tasks: updatedTask,
            };
        }


        default:
            return state;
    }
}

