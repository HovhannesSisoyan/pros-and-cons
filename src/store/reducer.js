import * as actionTypes from './actions';
import initialState from './initialState';

const reducer = (state = initialState, action) => {

    let tempArray = [];
    let tempArray2 = [];
    let tempString = '';
    let index;


    switch (action.type) {
                
        case actionTypes.ADD_PRO:
            return {
                ...state,                
                prosList: [...state.prosList].concat(action.item),
            };
        
        case actionTypes.EDIT_PRO:
            tempArray = [...state.prosList];
            tempString = action.event.target.value;
            index = action.index;
            tempArray[index] = tempString;
            if(!tempString) {
                tempArray.splice(index, 1);
            }
            return {
                ...state,
                prosList: [...tempArray],
            };
        
        case actionTypes.DRAG_PRO_START:
            state.dragingIndex = action.index;
            state.dragingFrom = 'pro';
            tempString = state.prosList[state.dragingIndex];
            return {
                ...state,
                dragingItem: tempString
            };

        case actionTypes.DROP_PRO:
            tempArray = [...state.prosList];
            tempArray2 = [...state.consList];
            if (state.dragingFrom === 'pro') {
                tempArray.splice(state.dragingIndex, 1);
            };
            if (state.dragingFrom === 'con') {
                tempArray2.splice(state.dragingIndex, 1);
            };
            return {
                ...state,
                prosList: [...tempArray].concat(state.dragingItem),
                consList: [...tempArray2],
                dragingItem: ''
            };
        
        case actionTypes.ADD_CON:
            return {
                ...state,
                consList: [...state.consList].concat(action.item)
            };
        
        case actionTypes.EDIT_CON:
            tempArray = [...state.consList];
            tempString = action.event.target.value;
            index = action.index;
            tempArray[index] = tempString;
            if(!tempString) {
                tempArray.splice(index, 1);
            }
            return {
                ...state,
                consList: [...tempArray],
            };

        case actionTypes.DRAG_CON_START:
            state.dragingIndex = action.index;
            state.dragingFrom = 'con';
            tempString = state.consList[state.dragingIndex];
            return {
                ...state,
                dragingItem: tempString
            };
        
        case actionTypes.DROP_CON:
            tempArray = [...state.prosList];
            tempArray2 = [...state.consList];
            if (state.dragingFrom === 'pro') {
                tempArray.splice(state.dragingIndex, 1);
            };
            if (state.dragingFrom === 'con') {
                tempArray2.splice(state.dragingIndex, 1);
            };
            return {
                ...state,
                prosList: [...tempArray],
                consList: [...tempArray2].concat(state.dragingItem),
                dragingItem: ''
            };

        default:
            return state;
    }
};

export default reducer;