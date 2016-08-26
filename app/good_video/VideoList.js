/**
 * Created by pwrd on 16/8/24.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Dimensions,
} from 'react-native';

import Orientation from 'react-native-orientation'
import commonComponent from '../common/commonComponent'

export  default class VideoList extends React.Component {
    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({
            rowHasChanged: ((r1, r2) => r1 !== r2),
            sectionHeaderHasChanged: ((s1, s2) => s1 !== s2),
        })
        this.state = {dataSource: ds.cloneWithRowsAndSections({})}
        this._rc = <RefreshControl
            refreshing={false}/>

        this._originalVideo = {}
    }

    componentDidMount() {

        FetchNetData.getVideoList(null, null, (err, res) => {
            if (err) {
                //TODO 处理错误
            } else {
                this._handlerVideoList(res)
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRowsAndSections(this._originalVideo)
                })
            }
        })
    }

    render() {
        if (this.state.leagueList.getRowCount() == 0) {
            return commonComponent.loadData()
        }

        return (
            <ListView
                contentContainerStyle={styles.content}
                initialListSize={10}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                renderSectionHeader={(sectionData, sectionID) => this._renderHeader(sectionData, sectionID)}
                showsVerticalScrollIndicator={true}
                removeClippedSubviews={true}
                onEndReachedThreshold={300}
                onEndReached={this._endReached.bind(this)}
                scrollRenderAheadDistance={500}
                pageSize={2}
            />
        )
    }

    _renderRow(rowData) {
        return (
            <TouchableHighlight onPress={(rowData) => this._renderVideo(rowData)} style={styles.thouchVideo}>
                <View style={styles.video}>
                    <Image source={{uri: rowData.thumb}}
                           style={styles.thumb}/>
                    <Text style={styles.title} numberOfLines={2}>{rowData.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    _renderHeader(sectionData, sectionID) {
        return <Text style={styles.sectionTitle}>{sectionID}</Text>
    }

    _endReached() {
        //TODO
    }

    _handlerVideoList(res) {
        for (let i = 0; i < res.length; i++) {
            const ele = res[i]

            const videoArray = this._originalVideo[ele.startDay]
            if (videoArray) {
                this._originalVideo[ele.startDay].push(ele)
            } else {
                this._originalVideo[ele.startDay] = [ele]
            }
        }
    }

}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    thouchVideo: {
        overflow: 'hidden',
    },
    video: {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
        overflow: 'hidden',
    },
    videoLastPlace: {
        marginRight: 5,
        marginLeft: 5,
        opacity: 0,
    },
    thumb: {
        height: 80,
        width: 140,
    },
    title: {
        width: 140,
    }

})