import { ADD_TASK } from "./actionTypes";
import { DELETE_TASK } from "./actionTypes";
import { TOGGLE_COMPLETION } from "./actionTypes";
import { EDIT_TASK } from "./actionTypes";
import { CLEAR_COMPLETED } from "./actionTypes";
import { CHECK_ALL } from "./actionTypes";
import { SET_FILTER } from "./actionTypes";
import { SET_CURRENT_TASK } from "./actionTypes"

export const addTask = (taskName) => {
    return {
        type: ADD_TASK,
        payload: taskName,
    };
};

export const setCurrentTask = (taskName) => {
    return {
        type: SET_CURRENT_TASK,
        payload: taskName
    }
}

export const deleteTask = (index) => {
    return {
        type: DELETE_TASK,
        payload: index,
    };
};

export const toggleCompletion = (index) => {
    return {
        type: TOGGLE_COMPLETION,
        payload: index,
    };
};

export const editTask = (index, taskName) => {
    return {
        type: EDIT_TASK,
        payload: { index, taskName },
    };
};

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED,
    };
};

export const checkAll = () => {
    return {
        type: CHECK_ALL,
    };
};

export const setFilter = (newFilter) => {
    return {
        type: SET_FILTER,
        payload: newFilter,
    };
};