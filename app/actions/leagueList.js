/**
 * Created by yk on 2016/9/8.
 */
import FetchNetData from '../common/FetchNetData'
import {LL_INIT_SUC,LL_PULL_REQ,LL_PULL_SUC, LL_FETCH_PULL_REQ, LL_FETCH_PULL_SUC, LL_FETCH_SCROLL_DOWN_REQ, LL_FETCH_SCROLL_DOWN_SUC, LL_SCROLL_DOWN_REQ, LL_SCROLL_DOWN_SUC} from '../common/ActionConstant'

export const initReq = (leagueType) => (dispatch) => {
    console.log('inireq')
    FetchNetData.getLeagueList(null, null, leagueType, (err, res) => {
        if (err) {
            //TODO error handler
        } else {
            dispatch(initSuc(leagueType, res))
        }
    })
}

export const initSuc = (leagueType, res)=> ({type: LL_INIT_SUC, leagueType, res})

export const pullReq = (leagueType)=> ({type: LL_PULL_REQ, leagueType})
export const pullSuc = (leagueType, res)=> ({type: LL_PULL_SUC, leagueType, res})
export const fetchPullReq = (leagueType) => (dispatch, stateF) => {
    const firstId = _getLeagueFirstId(leagueType, stateF)
    console.log("firstId", firstId)
    dispatch(pullReq(leagueType))

    FetchNetData.getLeagueList(null, firstId, leagueType, (err, res) => {
        if (err) {
            //TODO error handler
        } else {
            dispatch(pullSuc(leagueType, res))
        }
    })
}

export const scrollDownReq = (leagueType, lastId) => ({type: LL_SCROLL_DOWN_REQ, leagueType, lastId})
export const scrollDownSuc = (leagueType, res) =>({type: LL_SCROLL_DOWN_SUC, leagueType, res})

export const fetchScrollDownReq = (leagueType) => (dispatch, stateF) => {
    const {lastId, lastFetchingScrollDownId}  = _getLeagueLastId(leagueType, stateF)
    if (lastId != lastFetchingScrollDownId) {
        dispatch(scrollDownReq(leagueType, lastId))

        FetchNetData.getLeagueList(lastId, null, leagueType, (err, res) => {
            if (err) {
                //TODO error handler
            } else {
                dispatch(scrollDownSuc(leagueType, res))
            }
        })
    } else {
        //do nothing
    }
}


function _getLeagueFirstId(leagueType, stateF) {
    console.log("state:", stateF())
    const {leagueList} = stateF()
    return leagueList[leagueType].items[0].itemdef
}


function _getLeagueLastId(leagueType, stateF) {
    console.log("getLeagueLastId")
    const {leagueList} = stateF()
    console.log("ll", leagueList)
    const typeList = leagueList[leagueType]
    const items = typeList.items
    return {
        lastId: items[items.length - 1].itemdef,
        lastFetchingScrollDownId: typeList.lastFetchingScrollDownId
    }
}