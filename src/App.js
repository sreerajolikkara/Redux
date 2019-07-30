import React from 'react';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Weather from './components/weather';
const App = () => {
    return (
        <div className="container">
            Welcome To Weather API
            <div className='row'>
            <div className='col'>
            <BookList />
            </div>
            <div className='col'>
            <BookDetails/>
            </div>
            </div>
            <Weather/>
        </div>
    );
}

export default App;