import {
	applyMiddleware,
	createStore
} from 'redux';
import {
	AsyncStorage
} from 'react-native';
import {
	composeWithDevTools
} from 'redux-devtools-extension';
import {
	persistStore,
	persistReducer
} from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage
};

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
	persistedReducer, {},
	composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);