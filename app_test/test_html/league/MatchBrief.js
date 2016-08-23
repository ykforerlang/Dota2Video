/**
 * Created by yk on 2016/7/21.
 */

class MatchBrief extends Component {

    render() {
        let pr = this.props
        let heroes = pr.heroes

        let mb =  (
            <View style={styles.detail}>
                <View style={commonStyles.flexRow}>
                    <Text style={commonStyles.fs12Flex}>BO5/1</Text>
                    <Text style={commonStyles.fs12Flex2}>比赛ID: {pr.matchId}</Text>
                    <Text style={commonStyles.fs12Flex2}>开始时间: {pr.startTime}</Text>
                </View>
                <View style={styles.team}>
                    <View style={commonStyles.flexRow}>
                        <Text style={styles.teamNameRed}>LGD:</Text>
                        <View style={styles.heroIcon}>
                            <Image source={require("../../../app/images/hero/" + heroes[0] +".png")}/>
                            <Image source={require("../../../app/images/hero/" + heroes[1] +".png")}/>
                            <Image source={require("../../../app/images/hero/" + heroes[2] +".png")}/>
                            <Image source={require("../../../app/images/hero/" + heroes[3] +".png")}/>
                            <Image source={require("../../../app/images/hero/" + heroes[4] +".png")}/>
                        </View>
                    </View>
                    <View style={commonStyles.flexRow}>
                        <Text style={styles.teamNameBlue}>EHOME:</Text>
                        <View style={styles.heroIcon}>
                            <Image source={require("../../../app/images/hero/" + heroes[5] +".png")}/>
                            <Image source={require("../../../app/images/hero/" + heroes[6] +".png")}/>
                            <Image source={require("../../../app/images/hero/" + heroes[7] +".png")}/>
                            <Image source={require("../../../app/images/hero/" + heroes[8] +".png")}/>
                            <Image source={require("../../../app/images/hero/" + heroes[9] +".png")}/>
                        </View>
                    </View>
                </View>
            </View>
        )
        return (
            <View>
                {[mb, mb, mb, null, mb]}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    detail: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: 'grey',
        borderTopStyle: 'solid'
    },
    team: {paddingTop: 5},
    teamNameRed: {fontSize: 12, fontStyle: 'italic', flex: 1, color: 'red'},
    teamNameBlue: {fontSize: 12, fontStyle: 'italic', flex: 1, color: 'blue'},
    heroIcon: {flexDirection: 'row', flex: 1,}

})
const commonStyles = StyleSheet.create({
    flexRow: {flexDirection: 'row'},
    fs12Flex: {fontSize: 12, flex: 1},
    fs12Flex2: {fontSize: 12, flex: 2},
    fs12: {fontSize:12,}

})


module.exports = MatchBrief

/*add */
let fakeProps = {
    "heroes": [
        80,
        58,
        107,
        55,
        49,
        110,
        29,
        67,
        87,
        69
    ],
    "matchId": 2343557932,
    "startTime": "15时44分",
}
let Comp = module.exports
ReactDOM.render(
    <Comp {...fakeProps}/>,
    document.getElementById('container')
);