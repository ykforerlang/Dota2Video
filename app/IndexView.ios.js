/**
 * Created by pwrd on 16/6/11.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
    NavigatorIOS,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import LeagueNavigator from './league/LeagueNavigator'
import Search from './Search'
import TeamRanking from './TeamRanking'

const Item = TabBarIOS.Item

export default class IndexView extends Component {
    constructor() {
        super()
        this.state = {type: 'league'}
        this.itemList = [
            {
                title: "锦标赛",
                type: 'league',
                iconName: "ios-trophy-outline",
                selectedIconName: "ios-trophy",
                comp: LeagueNavigator,
            },
            {
                title: '发现',
                type: 'found',
                iconName: "ios-eye-outline",
                selectedIconName: "ios-eye",
                comp: TeamRanking
            }, {
                title: "我的",
                type: "myInfo",
                iconName: "ios-person-outline",
                selectedIconName: "ios-person",
                comp: Search,
            }]
    }

    render() {

        return (
            <TabBarIOS>
                {this.itemList.map( (value) => {

                    return (<Icon.TabBarItemIOS
                        title={value.title}
                        key={value.title}
                        iconName={value.iconName}
                        selectedIconName={value.selectedIconName}
                        selected={this.state.type === value.type}
                        onPress={() => {
                            this.setState({
                                type: value.type,
                            });
                          }}
                       >
                        {React.createElement(value.comp, {})}
                    </Icon.TabBarItemIOS> )
                })}
            </TabBarIOS>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
