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
    RefreshControl,
    TouchableHighlight,
} from 'react-native';

import Orientation from 'react-native-orientation'
import Video from './Video'

import commonComponent from '../common/commonComponent'
import FetchNetData from '../common/FetchNetData'
import Util from '../common/Util'

const {width} = Dimensions.get('window');
export  default class VideoList extends React.Component {
    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({
            rowHasChanged: ((r1, r2) => r1 !== r2),
            sectionHeaderHasChanged: ((s1, s2) => s1 !== s2),
        })
        this.state = {
            dataSource: ds.cloneWithRowsAndSections({}),
            refreshing: false,
        }

        this._rc = <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
        />

        this._holdSpace = <View style={styles.videoLastPlace}>
            <Text style={styles.title}/>
        </View>

        this.navigator = props.navigator

        this._originalVideo = {}
        this._lastCallParam = null
    }

    componentDidMount() {

        FetchNetData.getVideoList(null, null, (err, res) => {
            if (err) {
                //TODO 处理错误
            } else {
                this._originalVideo = Util.handleArrayObject(res)
                const standVideoList = VideoList.resizeEle(this._originalVideo)
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRowsAndSections(standVideoList)
                })
            }
        })
    }

    render() {
        if (this.state.dataSource.getRowCount() == 0) {
            return commonComponent.loadData()
        }

        return (
            <ListView
                style={{marginTop:30,}}
                contentContainerStyle={styles.content}
                initialListSize={30}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                renderSectionHeader={(sectionData, sectionID) => this._renderHeader(sectionData, sectionID)}
                showsVerticalScrollIndicator={true}
                removeClippedSubviews={true}
                onEndReachedThreshold={300}
                scrollRenderAheadDistance={500}
                onEndReached={this._endReached.bind(this)}
                pageSize={2}
                automaticallyAdjustContentInsets={false}
                refreshControl = {this._rc}
            />
        )
    }

    _renderRow(rowData) {
        if (rowData == "__holdSpace") {
            return this._holdSpace
        }

        return (
            <TouchableHighlight onPress={() => this._renderVideo(rowData)}
                                style={styles.thouchVideo}
                                underlayColor="#888888"
            >
                <View>
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

    _renderVideo(rowData) {
        this.navigator.push({
            component:Video,
            videoId: rowData.videoId
        })
    }

    _onRefresh() {
        const oriKeys = Object.keys(this._originalVideo)

        this.setState({refreshing: true});
        const firstOri = this._originalVideo[oriKeys[0]]
        const firstId = firstOri[0].videoId

        FetchNetData.getVideoList(null, firstId, (err, res) => {
            if (err || res.length == 0) {
                this.setState({refreshing: false});
            } else {
                const newVideo = Util.handleArrayObject(res)
                this._originalVideo = Util.mergeTwoArrayObject(newVideo, this._originalVideo)
                const standVideoList = VideoList.resizeEle(this._originalVideo)
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRowsAndSections(standVideoList),
                    refreshing: false
                })
            }
        })
    }

    _endReached() {
        const oriKeys = Object.keys(this._originalVideo)
        const lastOri = this._originalVideo[oriKeys[oriKeys.length - 1]]
        const lastId = lastOri[lastOri.length - 1].videoId

        if (this._lastCallParam == lastId) {
            return
        } else {
            this._lastCallParam = lastId
        }

        FetchNetData.getVideoList(lastId, null, (err, res) => {
            if (err || res.length == 0) {
            } else {
                const newMatch = Util.handleArrayObject(res)
                this._originalVideo = Util.mergeTwoArrayObject(this._originalVideo, newMatch)

                const standVideoList = VideoList.resizeEle(this._originalVideo)
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRowsAndSections(standVideoList)
                })
            }
        })
    }

    static resizeEle(ele) {
        const result = {}
        for (let key in ele) {
            if (ele[key].length % 2 != 0) {
                result[key] = ele[key].concat(["__holdSpace"])
            } else {
                result[key] = ele[key]
            }
        }
        return result
    }

}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 40,
    },
    thouchVideo: {
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
        overflow: 'hidden',
        backgroundColor: '#e0e0e0',
    },
    videoLastPlace: {
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
        overflow: 'hidden',
        opacity: 0,
    },
    sectionTitle: {
        width: width - 20,
        overflow: 'hidden',
        fontSize: 15,
        fontWeight: '600',
        padding: 10,
        backgroundColor: '#c0c0c0',
        marginBottom: 5,
    },
    thumb: {
        height: 80,
        width: 140,
    },
    title: {
        width: 140,
    }

})