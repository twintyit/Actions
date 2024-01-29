export const initialState = {
    data: [],
    categories: [],
    item: [],
    dataByCategory: [],
    newItem: [],
};

export const actionTypes = {
    SET_DATA: 'SET_DATA',
    SET_CATEGORIES: 'SET_CATEGORIES',
    SET_ITEM: 'SET_ITEM',
    SET_DATA_BY_CATEGORY: 'SET_DATA_BY_CATEGORY',
    SET_NEW_ITEM: 'SET_NEW_ITEM',
};

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_DATA:
            return {
                ...state,
                data: action.payload,
            };
        case actionTypes.SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        case actionTypes.SET_ITEM:
            return {
                ...state,
                item: action.payload,
            }
        case actionTypes.SET_DATA_BY_CATEGORY:
            return {
                ...state,
                dataByCategory: action.payload,
            }
        case actionTypes.SET_NEW_ITEM:
            return {
                ...state,
                newItem: action.payload,
            }
        default:
            return state;
    }
};