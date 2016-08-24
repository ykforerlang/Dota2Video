/**
 * Created by pwrd on 16/8/2.
 */
const baseUrl = "http://192.168.1.120:3000/"
const commonConf = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}

export default class FetchNetData {
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

    static getMatchVideo(matchId, cb) {
        let url = `${baseUrl}match/video?matchId=${matchId}`

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
