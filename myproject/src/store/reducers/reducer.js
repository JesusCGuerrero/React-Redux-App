const initialState = {
    quote: '',
    isFetching: false,
    error: 'error'
}

export const myReducer = (state = initialState, action) => {
    switch(action.type){

        case 'FETCH_QUOTE_START':
            return{
                ...state,
                isFetching: true
            }
        case 'FETCH_QUOTE_SUCCESS':
            return{
                ...state, 
                isFetching: false,
                quote: action.payload,
                error: ''
            }
            default: 
                return state;
    }
}