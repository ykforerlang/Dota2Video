/**
 * Created by yk on 2016/9/8.
 */
import FetchNetData from '../common/FetchNetData'
import {MD_INIT_SUC} from '../common/ActionConstant'


export default initReq = (matchId) => (dispatch) => {

    FetchNetData.getMatchDetail(matchId, (err, res) => {
        if (err) {
            //TODO 错误处理
        } else {
            dispatch(initSuc(matchId, res))
        }
    })
}

export default initSuc = (matchId, res) => ({type:MD_INIT_SUC, matchId, res})