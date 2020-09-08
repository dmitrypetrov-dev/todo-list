export const ACTION_ADD_ITEM = 'ACTION_ADD_ITEM';
export const ACTION_FILTER_CHANGE = 'ACTION_FILTER_CHANGE';
export const ACTION_SEARCH_CHANGE = 'ACTION_SEARCH_CHANGE';
export const ACTION_CHANGE_INPUT_TEXT = 'ACTION_CHANGE_INPUT_TEXT';
export const ACTION_DELETE_ITEM = 'ACTION_DELETE_ITEM';
export const ACTION_TOGGLE_DONE = 'ACTION_TOGGLE_DONE';
export const ACTION_TOGGLE_IMPORTANT = 'ACTION_TOGGLE_IMPORTANT';


export const addItem = (newItem) => {
    return {
        type: ACTION_ADD_ITEM,
        payload: newItem
    }
};

export const changeInputText = (inputText) => {
    return {
        type: ACTION_CHANGE_INPUT_TEXT,
        payload: inputText
    }
};

export const deleteItem = (delItem) => {
    return {
        type: ACTION_DELETE_ITEM,
        payload: delItem
    }
};

export const onToggleDone = (isDone) => {
    return {
        type: ACTION_TOGGLE_DONE,
        payload: isDone
    }
};

export const onImportant = (isImportant) => {
    return {
        type: ACTION_TOGGLE_IMPORTANT,
        payload: isImportant
    }
};

export const onSearch = (searchText) => {
    return {
        type: ACTION_SEARCH_CHANGE,
        payload: searchText
    }
};

export const changeFilter = (buttonId) => {
    return {
        type: ACTION_FILTER_CHANGE,
        payload: buttonId
    }
};





