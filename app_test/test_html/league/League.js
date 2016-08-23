/**
 * Created by yk on 2016/7/19.
 */
const description = "锦标赛由8个预选赛区组成，最终\n集结16支顶尖队伍。预选赛将\n在2天内进行胜败者组的比";
class League extends React.Component {

    render() {
        return (
            <View style={styles.brief}>
                <View>
                    <Text style={styles.tag}>免费</Text>
                    <Image source={require("../../../app/images/league/2129.jpg")}></Image>
                </View>
                <View style={styles.desAndPrice}>
                    <View style={styles.nameAndPp}>
                        <Text style={styles.name}>第6届国际邀请赛第6届国际邀请赛第6届国际邀请赛</Text>
                        <Text style={styles.pricePool}>奖金:1000000$</Text>
                    </View>
                    <Text numberOfLines={3} style={styles.description}>{description}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    brief: {
        backgroundColor: '#f0f0f0',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    tag: {
        position: 'absolute',
        backgroundColor: '#DA70D6',
        fontSize: 11,
        fontStyle: 'italic',
    },
    desAndPrice: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 5,
    },
    description: {
        overflow: 'hidden',
        fontSize: 11,
        color:'grey',
        height:39,
    },
    pricePool: {
        flex:1,
        fontSize: 11,
        color: '#CD853F',
        fontStyle: 'italic',
        textAlign: 'right',
    },
    nameAndPp: {
        flexDirection:'row',
    },
    name: {
        flex:1,
        fontSize:12,
        overflow:'hidden',
        height:14,
    }
})

ReactDOM.render(
    <League/>,
    document.getElementById('container')
);

