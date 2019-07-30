import {combineReducers} from 'redux';

export function bookListReducer() {
    
    return [

        { id: 1, title: 'Monday', author: 'Kalam' },
        { id: 2, title: 'Tuesday', author: 'J.K.Rowling' },
        { id: 3, title: 'Wednesday', author: 'Tetsuro Araki' },
        { id: 4, title: 'Thursday', author: 'Balaji' },
        { id: 5, title: 'Friday', author: 'Dan Brown' }
    ];
}

export function selectedBookReducer(selectedBook = null, action) {
    if(action.type==='SELECT_BOOK'){
        return action.payload;
    }
    return  selectedBook;
}

// export function rawDate(){
//     const URL="http://samples.openweathermap.org/data/2.5/forecast?id=524901";
//     const key="b6907d289e10d714a6e88b30761fae22";

// }

export default combineReducers({
    bookList: bookListReducer,
    selectedBook: selectedBookReducer
});