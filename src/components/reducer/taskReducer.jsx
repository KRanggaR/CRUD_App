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
            name: "Checkout",
            description: "Save hours and logout",
            isCompleted: true,
        },
        {
            name: "Maintain Report",
            description: "Project Report Maintainence and submission",
            isCompleted: false,
        },
        {
            name: "Scrum",
            description: "Attended Daily Scrum (30mins)",
            isCompleted: true,
        },
        {
            name: "Meet",
            description: "Project Meet at 16:00",
            isCompleted: false,
        }
    ],
    modalType: null, // 'add' | 'view' | 'edit' | null
    currentElementIndex: null,
    searchQuery: "",
};

export const taskReducer = (state, action) => {
    switch (action.type) {


        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            };

        // marking check boxes all or none
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

        // marking individual check boxes 
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


        case 'TOGGLE_MODAL':
            return {
                ...state,
                modalType: action.payload?.type ?? null,
                currentElementIndex: action.payload?.index ?? null
            };


        // saving new task to state 
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, {
                    name: action.payload.name,
                    description: action.payload.description,
                    isCompleted: false
                }],
                modalType: null
            };


        case 'SAVE_EDIT_TASK': {
            const { name, description, index } = action.payload;
            const updatedTasks = state.tasks.map((task, i) => {
                if (i === index) {
                    return { ...task, name, description, isCompleted: false };
                }
                return task;
            });
            return {
                ...state,
                tasks: updatedTasks,
                modalType: null,
                currentElementIndex: null,
            };
        }

        // Delete task from list
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

