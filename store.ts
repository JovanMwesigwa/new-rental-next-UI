import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import tokenReducer from './features/token/tokenSlice'
import userReducer from './features/user/userSlice'
import adminPropertyReducer from './features/adminProperty/adminPropertySlice'
import editingPropertyReducer from './features/editingProperty/editingPropertySlice'

const reducers = combineReducers({
    token: tokenReducer, 
    user: userReducer,    
    editingProperty: editingPropertyReducer,  
    adminProperty: adminPropertyReducer,    
   });

   const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store;