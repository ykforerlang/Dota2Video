/**
 * Created by pwrd on 16/6/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    ListView,
    RefreshControl,
    Image,
    Dimensions,
} from 'react-native';

import Orientation from 'react-native-orientation'

import CommonComponent from './common/commonComponent'
import leagueFake from '../fake_data/leagueList.json'
const leagueData = leagueFake.data

export default class LeagueList extends Component {
    constructor() {
        super()
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {leagueList: this.ds.cloneWithRows([])}
    }

    componentDidMount() {
        Orientation.lockToPortrait()

        //TODO get from http api?
        this.setState({
            leagueList: this.ds.cloneWithRows(leagueData)
        })
    }

    render() {
        if (!this.state.leagueList.getRowCount()) {
            return CommonComponent.loadData()
        }

        const window = Dimensions.get("window").width
        const iconStyle = {width: window * 0.25, height: window * 0.25 * 0.75}
        const introStyle = {width: window * 0.7, height: iconStyle.height}
        const refresh = <RefreshControl
            refreshing={false}
            onRefresh={() =>{}}
        />
        return (
            <ListView
                dataSource={this.state.leagueList}
                renderRow={(league) => this._renderLeague(league, iconStyle, introStyle)}
                refreshControl={refresh}
                showsVerticalScrollIndicator={true}
            />
        )
    }

    _renderLeague(league, iconStyle, introStyle) {

        //TODO
        return (
            <TouchableHighlight  underlayColor="rgb(210, 230, 255)"
                                 onPress={(league) => this._renderLeagueDetail(league)}>
                <View style={styles.league}>
                    <Image source={{uri: league.image}} style={iconStyle}></Image>


                    <View style={[introStyle,styles.intro]}>
                        <Text style={styles.title} numberOfLines={1}>
                            {league.name}
                        </Text>

                        <Text style={[{width:introStyle.width},styles.description]} numberOfLines={3}>
                            {league.description}
                        </Text>
                    </View>

                    <Text style={styles.pricePool}>
                        {league.pricePool ? "$" + league.pricePool : ""}
                    </Text>
                    <View style={styles.freeTab}>
                        <Text style={styles.freeTabText}>
                            {league.free_to_spectate ? "免费" : "门票"}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    _renderLeagueDetail(league) {
        //TODO
    }

}

const styles = StyleSheet.create({

    league: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 5,
        marginLeft: 10,
        marginBottom: 5,
    },

    intro: {
        flexDirection: "column",
        alignItems: 'flex-start',
        marginLeft: 5,
        justifyContent: 'flex-start',
    },
    title: {
        width: 150,
    },

    description: {
        color: 'grey',
        fontSize: 12,
    },

    pricePool: {
        position: 'absolute',
        right: 10,
        top: 0,
        fontStyle: 'italic',
        color: '#FFD700',
    },

    freeTab: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor:'#FF69B4',
    },
    freeTabText: {
        fontSize:13,
    }
})