const countReducer = (state=[], action) => {
    switch(action.type) {
        case 'SET_COUNT': 
            return [...state, action.payload];
        default: 
            return state;
    }
}

export default countReducer;