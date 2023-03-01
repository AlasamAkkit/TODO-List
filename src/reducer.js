const initialState = {
    tasks: [],
    currentTask: '',
    filter: 'All',
    allChecked: false,
    tasksLeft: 0,
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
                currentTask: "",
            };
        
        case "DELETE_TASK":
            const newTasks = [...state.tasks];
            newTasks.splice(action.payload, 1);
            return {
                ...state,
                tasks: newTasks,
            };

        case "SET_FILTER":
            return {
                ...state,
                filter: action.payload,
            };

        case "CLEAR_COMPLETED":
            const clearedTasks = state.tasks.filter((task) => !task.completed);
            return {
                ...state,
                tasks: clearedTasks,
            };

        case "EDIT_TASK":
            const editedTasks = [...state.tasks];
            editedTasks[action.payload.index].taskName = action.payload.taskName;
            return {
                ...state,
                tasks: editedTasks
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
