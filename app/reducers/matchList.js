/**
 * Created by yk on 2016/9/8.
 */

import Util from '../common/util'
import {ML_INIT_SUC,ML_PULL_REQ, ML_PULL_SUC, ML_FETCH_PULL_REQ, ML_FETCH_PULL_SUC, ML_FETCH_SCROLL_DOWN_REQ, ML_FETCH_SCROLL_DOWN_SUC, ML_SCROLL_DOWN_REQ, ML_SCROLL_DOWN_SUC} from '../common/ActionConstant'

export  default function matchList(state, action) {
    const typeStr = action.leagueId + ""
    const oldObj = state[typeStr]

    let newObj = null;
    switch(action.type) {
        case ML_INIT_SUC:
            newObj = {
                lastTime: new Date().getTime(),
                items:Util.handleArrayObject(action.res),
                lastFetchingScrollDownId: null,
                pullRefreshing:false
            }
            break;
        case ML_SCROLL_DOWN_REQ:
            newObj = {
                lastFetchingScrollDownId: action.lastId,
            }
            break;
        case ML_SCROLL_DOWN_SUC:
            const newMatch = Util.handleArrayObject(action.res)
            newObj =  {
                lastTime: new Date().getTime(),
                items: Util.mergeTwoArrayObject(oldObj.items, newMatch)
            }
            break;
        case ML_PULL_REQ:
            newObj = {
                pullRefreshing:true,
            }
            break;
        case ML_PULL_SUC:
            const newMatch = Util.handleArrayObject(action.res)
            newObj = {
                lastTime: new Date().getTime(),
                items:Util.mergeTwoArrayObject(newMatch, oldObj.items),
                pullRefreshing:false,
            }
            break;
    }

    if (newObj == null) {
        return state
    } else {
        const tmp = {}
        tmp[typeStr] = newObj
        return {...state, ...tmp}
    }
}