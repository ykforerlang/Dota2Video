/**
 * Created by yk on 2016/9/7.
 */
import FetchNetData from '../common/FetchNetData'
import {ML_INIT_SUC,ML_PULL_REQ,ML_PULL_SUC, ML_FETCH_PULL_REQ, ML_FETCH_PULL_SUC, ML_FETCH_SCROLL_DOWN_REQ, ML_FETCH_SCROLL_DOWN_SUC, ML_SCROLL_DOWN_REQ, ML_SCROLL_DOWN_SUC} from '../common/ActionConstant'

export const initReq = (leagueId) => (dispatch) => {
    FetchNetData.getMatchList(null, null, leagueId, (err, res) => {
        if (err) {
            //TODO error handler
        } else {
            dispatch(initSuc(leagueId, res))
        }
    })
}

export const initSuc = (leagueId, res)=> ({type: ML_INIT_SUC, leagueId, res})

export const pullReq = (leagueId)=> ({type: ML_PULL_REQ, leagueId})
export const pullSuc = (res)=> ({type: ML_PULL_SUC, leagueId, res})
export const fetchPullReq = (leagueId) => (dispatch, stateF) => {
    const firstId = _getMatchFirstId(leagueId, stateF)
    dispatch(pullReq(leagueId))

    FetchNetData.getMatchList(null, firstId, (err, res) => {
        if (err) {
            //TODO error handler
        } else {
            dispatch(pullSuc(leagueId, res))
        }
    })
}

export const scrollDownReq = (leagueId, lastId) => ({type: ML_SCROLL_DOWN_REQ, leagueId, lastId})
export const scrollDownSuc = (leagueId, res) =>({type: ML_SCROLL_DOWN_SUC, leagueId, res})

export const fetchScrollDownReq = (leagueId) => (dispatch, stateF) => {
    const {lastId, lastFetchingScrollDownId}  = _getMatchLastId(leagueId, stateF())
    if (lastId != lastFetchingScrollDownId) {
        dispatch(scrollDownReq(leagueId, lastId))

        FetchNetData.getMatchList(lastId, null, (err, res) => {
            if (err) {
                //TODO error handler
            } else {
                dispatch(scrollDownSuc(leagueId, res))
            }
        })
    } else {
        //do nothing
    }
}


function _getMatchFirstId(leagueId, stateF) {
    const {matchList} = stateF()
    const leagueMatchList = matchList[leagueId + ""]
    const oriKeys = Object.keys(leagueMatchList.items)
    const firstOri = leagueMatchList[oriKeys[0]]
    return firstOri[0].matchId
}


function _getMatchLastId(leagueId, stateF) {
    const {matchList} = stateF()
    const leagueMatchList = matchList[leagueId + ""]
    const oriKeys = Object.keys(leagueMatchList.items)
    const lastOri = leagueMatchList[oriKeys[oriKeys.length - 1]]
    return {
        lastId: lastOri[lastOri.length - 1].matchId,
        lastFetchingScrollDownId: leagueMatchList.lastFetchingScrollDownId
    }
}
