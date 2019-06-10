import * as actionTypes from './actions';

import initialState from './initialState';

const reducer = (state = initialState, action) => {

    let tempArray = [];
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
            return {
                ...state,
                dragingItem: state.prosList[action.index]
            };

        case actionTypes.DRAG_PRO_END:
            tempArray = [...state.prosList];
            tempArray.splice(action.index, 1);
            return {
                ...state,
                prosList: [...tempArray],
                consList: state.consList.concat(state.dragingItem),
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
            if (!tempString) {
                tempArray.splice(index, 1);
            };
        return {
            ...state,
            consList: [...tempArray]
        };

        case actionTypes.DRAG_CON_START:
            return {
                ...state,
                dragingItem: state.consList[action.index]
            };
        
        case actionTypes.DRAG_CON_END:
            tempArray = [...state.consList];
            tempArray.splice(action.index, 1);
            return {
                ...state,
                consList: [...tempArray],
                prosList: state.prosList.concat(state.dragingItem),
                dragingItem: ''
            };

        default:
            return state;
    }
};

export default reducer;