const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PORTFOLIO_ITEMS':
            return [...state, ...action.items];
        default:
            break;
    }
    return state;
};
