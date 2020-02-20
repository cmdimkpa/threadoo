import { threads } from './myReducers'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    threads
})

export default allReducers