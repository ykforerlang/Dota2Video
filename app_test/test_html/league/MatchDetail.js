/**
 * Created by yk on 2016/7/29.
 */


class MatchDetail extends React.Component {

    render() {
        return (
            <View style={styles.content}>
                {this._title()}
                {[1, 2, 3,].map(() => {
                    return this._renderRow()
                })}
            </View>
        )
    }

    _title() {
        return (
            <View style={styles.title}>
                <View style={commonStyles.flexRow}>
                    <Text style={commonStyles.fs14Flex}>比赛id: 123234455</Text>
                    <Text style={commonStyles.fs14Flex}>时长: 45分45秒</Text>
                </View>
                <View style={[commonStyles.flexRow, styles.titleSecondLine]}>
                    <Text style={commonStyles.fs14Flex}>人头: 33/40</Text>
                    <View style={commonStyles.flexRowFlex}>
                        <Text style={commonStyles.fs14Flex}>观看视频</Text>
                        <Text style={commonStyles.fs14Flex}>观看录像</Text>
                    </View>
                </View>
            </View>
        )
    }

    _renderRow() {
        return (
            <View style={styles.playerRow}>
                <View style={styles.playerBrief}>
                    <View style={styles.player}>
                        <Image source={require("player.jpg")}/>
                        <Text style={commonStyles.fs13}>xxxdd</Text>
                    </View>
                    <View style={styles.hero}>
                        <Image source={require("../../../app/images/hero/hero_1.png")} style={styles.heroIcon}/>
                        <Text style={commonStyles.fs13}>天穹守望者</Text>
                    </View>
                    <View style={styles.items}>
                        <View style={commonStyles.flexRow}>
                            <Image source={require("../../../app/images/item/item_1.png")} style={styles.itemIcon}/>
                            <Image source={require("../../../app/images/item/item_2.png")} style={styles.itemIcon}/>
                            <Image source={require("../../../app/images/item/item_3.png")} style={styles.itemIcon}/>
                        </View>

                        <View style={commonStyles.flexRow}>
                            <Image source={require("../../../app/images/item/item_4.png")} style={styles.itemIcon}/>
                            <Image source={require("../../../app/images/item/item_5.png")} style={styles.itemIcon}/>
                            <Image source={require("../../../app/images/item/item_6.png")} style={styles.itemIcon}/>
                        </View>
                    </View>
                </View>

                <View style={styles.detail}>
                    <View style={styles.detailLeft}>
                        <Text style={commonStyles.fs12}>等级: 11</Text>
                        <Text style={commonStyles.fs12}>金钱: 1678</Text>
                        <Text style={commonStyles.fs12}>K/D/A: 10/22/3</Text>
                        <Text style={commonStyles.fs12}>治疗: 2000(30%)</Text>
                    </View>
                    <View style={styles.detailRight}>
                        <Text style={commonStyles.fs12}>正/反补: 200/20</Text>
                        <Text style={commonStyles.fs12}>GPM/XPM: 780/560</Text>
                        <Text style={commonStyles.fs12}>对塔伤害: 5000(30%)</Text>
                        <Text style={commonStyles.fs12}>对英雄伤害: 5000(30%)</Text>
                    </View>
                </View>
            </View>
        )
    }

}
/*const width = Dimensions.get('width')
 const height = Dimensions.get('height')*/
const commonStyles = StyleSheet.create({
    flexRow: {flexDirection: 'row'},
    flexRowFlex: {flexDirection: 'row', flex:1},
    fs12Flex: {fontSize: 12, flex: 1},
    fs12Flex2: {fontSize: 12, flex: 2},
    fs12: {fontSize: 12,},
    fs13: {fontSize: 13,},
    fs13Flex: {fontSize: 13, flex: 1},
    fs14Flex: {fontSize: 14, flex: 1},
    fs13Flex2: {fontSize: 13, flex: 2},

})
const styles = StyleSheet.create({
    content: {
        flex: 1,
    },

    title: {
        backgroundColor: '#A9A9A9',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },

    titleSecondLine: {
        paddingTop: 10,
    },


    playerRow: {
        marginTop: 10,
        overflow: 'hidden',
    },
    playerBrief: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5DC',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    player: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center'
    },

    hero: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        marginLeft: 5,
        alignItems: 'center',
    },

    items: {
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },

    detail: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
    },

    detailLeft: {
        flex: 1,
        padding: 5,
    },
    detailRight: {
        flex: 1,
        padding: 5,
        borderLeftWidth: 1,
        borderLeftColor: '#D3D3D3',
        borderLeftStyle: 'solid',
    },

    itemIcon: {
        width:35,
        height:20,
    },
    heroIcon: {
        width:30,
        height:40,
    },
})

ReactDOM.render(
    <MatchDetail/>,
    document.getElementById('container')
);