import {combineReducers} from 'redux'
import notes from './notes'
import tags from './tags'
import filters from './filters'

const rootReducer = combineReducers({
    notes,
    tags,
    filters
});

export default rootReducer;