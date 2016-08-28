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

const {width} = Dimensions.get('window');
export  default class VideoList extends React.Component {
    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({rowHasChanged: ((r1, r2) => r1 !== r2),
            sectionHeaderHasChanged: ((s1, s2) => s1 !== s2),
        })
        this.state = {dataSource: ds.cloneWithRowsAndSections({
            "2016年8月12日":[1,2,3,4,5,6,7,8],
            "2016年8月13日":[1,2,3,4,5,6,7, 8],
            "2016年8月14日":[1,2,3,4,5,6,7,8,9,10],
            "2016年8月15日":[1,2,3,4,5, 6],
        })}

    }

    componentDidMount() {
        Orientation.unlockAllOrientations()
    }

    render() {
        return (
            <ListView
                style={{marginTop:30,}}
                contentContainerStyle={styles.content}
                initialListSize={10}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                renderSectionHeader={(sectionData, sectionID) => this._renderHeader(sectionData, sectionID)}
                showsVerticalScrollIndicator={true}
                removeClippedSubviews={true}
                onEndReachedThreshold={300}
                scrollRenderAheadDistance={500}
                pageSize={2}
                automaticallyAdjustContentInsets={false}
            />
        )
    }

    _renderRow(rowData) {
        return (
            <View style={styles.video}>
                <Image source={{uri:'http://r3.ykimg.com/0542040857B01A7E6A0A4A051B9753AE'}}
                       style={{height:80,width:140}}/>
                <Text style={{width:140}} numberOfLines={2}>Wings vs DC Ti6 总决赛 Bo5 第四场</Text>
            </View>
        )
    }

    _renderHeader(sectionData, sectionID) {
        if (sectionID == "__s1") return null
        return <Text style={styles.sectionTitle}>{sectionID}</Text>
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
        paddingBottom:40,
    },
    video: {
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
        overflow:'hidden',
        backgroundColor:'#e0e0e0',
    },
    videoLastPlace: {
        marginRight: 5,
        marginLeft: 5,
        opacity: 0,
        backgroundColor:'#e0e0e0',
    },
    sectionTitle:{
        width:width - 20,
        overflow:'hidden',
        fontSize:15,
        fontWeight:'600',
        padding:10,
        backgroundColor:'#c0c0c0',
        marginBottom:5,
    },

})