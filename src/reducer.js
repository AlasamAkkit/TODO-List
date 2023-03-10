const initialState = {
    tasks: [],
    currentTask: '',
    filter: 'All',
    allChecked: false,
    tasksLeft: 0,
    completed: false
};

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    { taskName: action.payload, completed: false },
                ],
                tasksLeft: state.tasksLeft + 1,
                currentTask: "",
            };

        case "SET_CURRENT_TASK":
            return {
                ...state,
                tasks: [
                    ...state.task,
                    { taskName: action.payload, completed: false},
                ],
            }
        
        case "DELETE_TASK":
            const newTasks = [...state.tasks];
            newTasks.splice(action.payload, 1);
            return {
                ...state,
                tasks: newTasks,
                tasksLeft: state.tasksLeft - 1
            };

        case "SET_FILTER":
            return {
                ...state,
                filter: action.payload,
            };

        case "CLEAR_COMPLETED":
            const clearedTasks = state.tasks.filter((task) => !task.completed);
            const incompleteTasks = state.tasks.filter((task) => !task.completed)
            return {
                ...state,
                tasks: clearedTasks,
                tasksLeft: incompleteTasks.length
            };

        case "EDIT_TASK":
            const editedTasks = [...state.tasks];
            editedTasks[action.payload.index].taskName = action.payload.taskName;
            return {
                ...state,
                tasks: editedTasks
            };

        case "TOGGLE_COMPLETION":
            const updatedTasks = state.tasks.map((task, index) => {
                if (index === action.payload) {
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                }
                return task;
            });
            return {
                ...state,
                tasks: updatedTasks,
            };
           

        case "CHECK_ALL":
            const checkTasks = [...state.tasks];
            if (!state.allChecked){
                checkTasks.forEach((task) => (task.completed = true));
                return {
                    ...state,
                    tasks: checkTasks,
                    allChecked: true,
                }
            }

        else {
            checkTasks.forEach((task) => (task.completed = false));
            return {
                ...state,
                tasls: checkTasks,
                allChecked: false,
            };
        }

        default:
            return state;
    }
}

export default reducer
