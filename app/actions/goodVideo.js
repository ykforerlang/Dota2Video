/**
 * Created by yk on 2016/9/7.
 */
import FetchNetData from '../common/FetchNetData'
import {GV_INIT_SUC,GV_PULL_REQ,GV_PULL_SUC, GV_FETCH_PULL_REQ, GV_FETCH_PULL_SUC, GV_FETCH_SCROLL_DOWN_REQ, GV_FETCH_SCROLL_DOWN_SUC, GV_SCROLL_DOWN_REQ, GV_SCROLL_DOWN_SUC} from '../common/ActionConstant'

export const initReq = () => (dispatch) => {
    FetchNetData.getVideoList(null, null, (err, res) => {
        if (err) {
            //TODO error handler
        } else {
            if (res.length != 0) {
                dispatch(initSuc(res))
            }
        }
    })
}

export const initSuc = (res)=> ({type: GV_INIT_SUC, res})

export const pullReq = ()=> ({type:GV_PULL_REQ})
export const pullSuc = (res)=> ({type:GV_PULL_SUC, res})
export const fetchPullReq = () => (dispatch, stateF) => {
    const firstId = _getVideoFirstId(stateF)
    dispatch(pullReq())

    FetchNetData.getVideoList(null, firstId, (err, res) => {
        if (err) {
            //TODO error handler
        } else {
            if (res.length != 0) {
               dispatch(pullSuc(res))
            }
        }
    })
}

export const scrollDownReq = (lastId) => ({type: GV_SCROLL_DOWN_REQ, lastId})
export const scrollDownSuc = (res) =>({type: GV_SCROLL_DOWN_SUC, res})

export const fetchScrollDownReq = () => (dispatch, stateF) => {
    const {lastId, lastFetchingScrollDownId}  = _getVideoLastId(stateF())
    if (lastId != lastFetchingScrollDownId) {
        dispatch(scrollDownReq(lastId))

        FetchNetData.getVideoList(lastId, null, (err, res) => {
            if (err) {
                //TODO error handler
            } else {
                if (res.length != 0) {
                    dispatch(scrollDownSuc(res))
                }
            }
        })
    } else {
        //do nothing
    }
}


function _getVideoFirstId(stateF) {
    const {goodVideo} = stateF()
    const videoList = goodVideo.items
    const oriKeys = Object.keys(videoList)
    const firstOri = videoList[oriKeys[0]]
    return firstOri[0].videoId
}


function _getVideoLastId(stateF) {
    const {goodVideo} = stateF()
    const videoList = goodVideo.items
    const oriKeys = Object.keys(videoList)

    const lastOri = videoList[oriKeys[oriKeys.length - 1]]
    return {
        lastId: lastOri[lastOri.length - 1].videoId,
        lastFetchingScrollDownId: videoList.lastFetchingScrollDownId
    }
}