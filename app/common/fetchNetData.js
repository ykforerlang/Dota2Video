/**
 * Created by pwrd on 16/8/2.
 */
const baseUrl = "http://127.0.0.1:3000/"
const commonConf = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}

class FetchNetData {
    static getLeagueList(maxItemdef, minItemdef, type, cb) {
        let url = `${baseUrl}league/getList?type=${type}`
        url += (maxItemdef ? "&maxItemdef=" + maxItemdef : "")
        url += (minItemdef ? "&minItemdef=" + minItemdef : "")

        FetchNetData._innerFetch(url, cb)
    }

    static getMatchList(maxId, minId, leagueId, cb) {
        let url = `${baseUrl}league/matchList?leagueId=${leagueId}`
        url += (maxId ? "&maxId=" + maxId: "")
        url += (minId ? "&minId=" + minId: "")

        FetchNetData._innerFetch(url, cb)
    }

    static getMatchDetail(matchId, cb) {
        let url = `${baseUrl}match/detail?matchId=${matchId}`

        FetchNetData._innerFetch(url, cb)
    }

    static getVideoList(maxId, minId, cb) {
        let url = `${baseUrl}video/list`
        url += (maxId ? "?maxId=" + maxId : "")
        url += (minId ? "?minId=" + minId : "")

        FetchNetData._innerFetch(url, cb)
    }


    static _innerFetch(url, cb) {
        console.log("will fetch:", url)
        fetch(url, commonConf)
            .then(res => {
                if (!res.ok) {
                    cb("fetch url:" + url + " error!", null)
                    return
                }
                return res.json()
            })
            .then(res => {
                cb(null, res)
            })
            .catch(err => {
                cb(err, null)
            })
    }
}
module.exports = FetchNetData


//TODO test....
const fetch = require('node-fetch')
FetchNetData.getVideoList(null, null,(err, res) => {
    console.log(res)
})