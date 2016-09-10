/**
 * Created by yk on 2016/9/8.
 */

import { combineReducers } from 'redux'

import goodVideo from './goodVideo'
import leagueList from './leagueList'
import matchList from './matchList'
import matchDetail from './matchDetail'

export default rootReducer = combineReducers({
    goodVideo,
    leagueList,
    matchList,
    matchDetail,
})