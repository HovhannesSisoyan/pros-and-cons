import * as actionTypes from './actions';

import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRO:
            return {
                ...state,                
                prosList: [...state.prosList].concat(action.item),
            };
        case actionTypes.EDIT_PRO:
            const newProsList = [...state.prosList];
            newProsList[action.index] = action.event.target.value;
            if(action.event.target.value === '') {
                newProsList.splice(action.index, 1);
            }
            return {
                ...state,
                prosList: [...newProsList],
            };
        case actionTypes.ADD_CON:
            return {
                ...state,
                consList: [...state.consList].concat(action.item)
            };
        case actionTypes.EDIT_CON:
            const newConsList = [...state.consList];
            const { event, index } = action;
            const { value } = event.target;
            newConsList[index] = value;
            if(value === '') {
                newConsList.splice(index, 1);
            }
        return {
            ...state,
            consList: [...newConsList]
        };
        default:
            return state;
    }
};

export default reducer;