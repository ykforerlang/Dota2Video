/**
 * Created by yk on 2016/9/8.
 */
import FetchNetData from '../common/FetchNetData'
import {MD_INIT_SUC} from '../common/ActionConstant'

export default function matchDetail(state, action) {
    const matchId = action.matchId + ""

    switch (action.type) {
        case MD_INIT_SUC:
            const tmp = {}
            tmp[matchId] = {
                videoId: res.videoId,
                ...res.detail
            }
            return {
                ...state, ...tmp
            }
        default:
            return state
    }

}