const saveReducer = (state= [] , action) => {
    switch(action.type) {
        case 'SET_SAVE': 
            return [...state, action.payload];
        case 'SET_DELETE': 
            return state.filter(state => state.id !== action.payload.id);
        default: 
            return state;
    }
}

export default saveReducer;