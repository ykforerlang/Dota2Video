/**
 * Created by yk on 2016/9/8.
 */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import {AsyncStorage} from 'react-native'
import {persistStore, autoRehydrate} from 'redux-persist'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore)

export default function configureStore(initialState) {
    const store  = createStoreWithMiddleware(rootReducer, initialState, autoRehydrate())
    //persistStore(store, {storage: AsyncStorage}).purge()   if data get out of wack
    persistStore(store, {storage: AsyncStorage})
    //const store  = createStoreWithMiddleware(rootReducer, initialState)
    return store
}