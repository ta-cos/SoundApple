import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import songReducer from './songs';
import songs from './songs'
import albums from './albums'

//----- THUNKS --------------------------------------------------------------------------



//------- REDUCER -----------------------------------------------------------------------
const rootReducer = combineReducers({
    session: sessionReducer,
    songs,
    albums,
});

//------- Enhancements ------------------------------------------------------------------

let enhancer;
if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

// Connect Redux to React
const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
