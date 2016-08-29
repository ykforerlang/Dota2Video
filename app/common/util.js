/**
 * Created by yk on 2016/8/22.
 */

class Util {
    static mergeTwoArrayObject(obj1, obj2) {
        for (let key in obj2) {
            if (obj1[key]) {
                obj1[key] = obj1[key].concat(obj2[key])
            } else {
                obj1[key] = obj2[key]
            }
        }
        return obj1
    }

    static handleArrayObject(res) {
        const result = {}
        for (let i = 0; i < res.length; i++) {
            const ele = res[i]

            const array = result[ele.startDay]
            if (array) {
                result[ele.startDay].push(ele)
            } else {
                result[ele.startDay] = [ele]
            }
        }
        return result
    }
}
module.exports = Util
