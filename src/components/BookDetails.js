import React from 'react';
import { connect } from 'react-redux';

const BookDetails = props => {
    // console.log(props.selectedBook);
    if(!props.selectedBook){
        return (
            <div>
                Please Select a Day
            </div>
        );
    }
    return (
        <div>
            Day Forecast
            <p>
                Title: {props.selectedBook.title}<br/>
                Author: {props.selectedBook.author}
            </p>
        </div>
    );
};

const mapStateToProps=state=>({selectedBook: state.selectedBook})

export default connect(mapStateToProps)(BookDetails);