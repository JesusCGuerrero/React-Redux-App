import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import {fetchQuote} from '../store/actions/quoteActions'

const Quote = (props) => {
    useEffect(() => {
        props.fetchQuote()
    }, [])

    return (
        <div className="quoteBox">
            <h1>Here's A Quote</h1>
            <button onClick={props.fetchQuote}>Fetch a new quote</button>
            {props.isFetching && <Loader
            type="Circles"
            color="rgb(227, 146, 233)"
            height={100}
            width={100}
            />}
            {props.isFetching && <h5>Loading Your Quote</h5>}
            {props.quote && <h3>{props.quote}</h3>}
        </div>
        
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        quote: state.quotes.quote,
        isFetching: state.quotes.isFetching,
        error: state.quotes.error 
    }
}

export default connect(
    mapStateToProps,
    { fetchQuote })
    (Quote);
    