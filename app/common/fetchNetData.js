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

/**
 *
 * @param optOrLeague league or opt
 * @param opt.leaugeId
 * @param opt.matchNum default is 10
 */
exports.getLeagueMatches = (optOrLeague, cb) => {
    let opt
    if(typeof optOrLeague != "object") {
        opt = {
            leagueId:optOrLeague,
            matchNum:10,
        }
    } else {
        opt = optOrLeague
    }

    const url = `${baseUrl}league/${opt.leagueId}/getMatches`
    fetch(url, commonConf)
        .then((res) => {

            console.log(res)
            if (res.status != 200) {
                cb("status != 200")
                return
            }
            return res.json()
        })
        .then((resJson) => {
            cb(null, resJson.data)
        })
        .catch((error)=> {
            cb(error)
        })
}

exports.getLeagueList = (type, maxId, minId, cb) => {

}