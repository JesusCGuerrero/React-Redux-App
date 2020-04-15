import axios from 'axios';

export const fetchQuote = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_QUOTE_START'})
        axios
        .get('https://api.adviceslip.com/advice')
        .then(res => {
            console.log('res', res)
            dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: res.data.slip.advice})
        })
        .catch(err => console.log(err.response))
    }
}
