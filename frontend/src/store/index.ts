import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';

const composeEnhancers = composeWithDevTools();

export const store = createStore(rootReducer, composeEnhancers);