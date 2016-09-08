/**
 * Created by yk on 2016/8/22.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Util {
    static mergeTwoArrayObject(obj1, obj2) {
        const result = {}
        for (let key in obj2) {
            if (obj1[key]) {
                result[key] = obj1[key].concat(obj2[key])
            } else {
                result[key] = obj2[key]
            }
        }
        return result
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

    static ReduxComponent(stateToProps, actions, rawComp) {
        const mapDispatchToProps = (dispatch) => {
            return {
                actions: bindActionCreators(actions, dispatch)
            }
        }

        return connect(
            stateToProps,
            mapDispatchToProps
        )(rawComp);
    }
}
module.exports = Util
