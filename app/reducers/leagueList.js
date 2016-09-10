/**
 * Created by yk on 2016/9/8.
 */

import Util from '../common/util'
import {LL_INIT_SUC,LL_PULL_REQ, LL_PULL_SUC, LL_FETCH_PULL_REQ, LL_FETCH_PULL_SUC, LL_FETCH_SCROLL_DOWN_REQ, LL_FETCH_SCROLL_DOWN_SUC, LL_SCROLL_DOWN_REQ, LL_SCROLL_DOWN_SUC} from '../common/ActionConstant'

export  default function leagueList(state ={}, action) {
    if (!action.leagueType) return state

    const typeStr = action.leagueType
    const oldObj = state[typeStr]

    let newObj = null;
    switch(action.type) {
        case LL_INIT_SUC:
            newObj = {
                lastTime: new Date().getTime(),
                items:action.res,
                lastFetchingScrollDownId: null,
                pullRefreshing:false
            }
            break;
        case LL_SCROLL_DOWN_REQ:
            newObj = {
                lastFetchingScrollDownId: action.lastId,
            }
            break;
        case LL_SCROLL_DOWN_SUC:
            if (action.res.length == 0) {
                newObj = {
                    lastTime: new Date().getTime(),
                }
            } else {
                newObj =  {
                    lastTime: new Date().getTime(),
                    items: oldObj.items.concat(action.res)
                }
            }
            break;
        case LL_PULL_REQ:
            newObj = {
                pullRefreshing:true,
            }
            break;
        case LL_PULL_SUC:
            if (action.res.length == 0) {
                newObj = {
                    lastTime: new Date().getTime(),
                    pullRefreshing:false,
                }
            } else {
                newObj = {
                    lastTime: new Date().getTime(),
                    items:action.res.concat(oldObj.items),
                    pullRefreshing:false,
                }
            }
            break;
    }

    if (newObj == null) {
        return state
    } else {
        const tmp = {}
        tmp[typeStr] = {...oldObj, ...newObj}
        return {...state, ...tmp}
    }
}