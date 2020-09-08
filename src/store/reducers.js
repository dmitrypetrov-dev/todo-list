import {createStore} from "redux";
import {
    ACTION_ADD_ITEM,
    ACTION_CHANGE_INPUT_TEXT,
    ACTION_DELETE_ITEM, ACTION_FILTER_CHANGE, ACTION_SEARCH_CHANGE,
    ACTION_TOGGLE_DONE,
    ACTION_TOGGLE_IMPORTANT
} from "./actions";

const initialState = {
    inputText: '',
    items: [],
    itemsCopy: [],
    filter: 'all'
};

let id = 1;

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_INPUT_TEXT:
            return {
                ...state,
                inputText: action.payload
            };
        case ACTION_ADD_ITEM:
            return {
                ...state,
                items: [...state.items, {label: action.payload, important: false, done: false, id: id++}],
                itemsCopy: [...state.items, {label: action.payload, important: false, done: false, id: id++}],
                inputText: '',
            };
        case ACTION_DELETE_ITEM:
            const delIndex = state.items.findIndex(el => el.id === action.payload);
            const before = state.items.slice(0, delIndex);
            const after = state.items.slice(delIndex + 1);
            return {
                ...state,
                items: [...before, ...after],
                itemsCopy: [...before, ...after]
            };
        case ACTION_TOGGLE_DONE:
            const doneIndex = state.items.findIndex(el => el.id === action.payload);
            const newItem = {...state.items[doneIndex], done: !state.items[doneIndex].done};
            return {
                ...state,
                items: [...state.items.slice(0, doneIndex), newItem, ...state.items.slice(doneIndex + 1)],
                itemsCopy: [...state.items.slice(0, doneIndex), newItem, ...state.items.slice(doneIndex + 1)]
            };
        case ACTION_TOGGLE_IMPORTANT:
            const importantIndex = state.items.findIndex(el => el.id === action.payload);
            const newItem2 = {...state.items[importantIndex], important: !state.items[importantIndex].important};
            return {
                ...state,
                items: [...state.items.slice(0, importantIndex), newItem2, ...state.items.slice(importantIndex + 1)],
                itemsCopy: [...state.items.slice(0, importantIndex), newItem2, ...state.items.slice(importantIndex + 1)]
            };
        case ACTION_SEARCH_CHANGE:
            if (action.payload.length === 0) {
                return {
                    ...state,
                    items: [...state.itemsCopy],
                }
            } else return {
                ...state,
                items: state.items.filter((item) => {
                    return item.label.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
                }),
            };
        case ACTION_FILTER_CHANGE:
            if (action.payload === 'all') {
                return {
                    ...state,
                    items: [...state.itemsCopy],
                    filter: action.payload
                }
            } else if (action.payload === 'active') {
                return {
                    ...state,
                    items: state.itemsCopy.filter((item) => !item.done),
                    filter: action.payload
                }
            } else return {
                ...state,
                items: state.itemsCopy.filter((item) => item.done),
                filter: action.payload
            };
        default:
            return state;
    }
};

const store = createStore(rootReducer);

export default store;