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

export  default class VideoList extends React.Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.leagueid !== r2.leagueid})
        this.state = {dataSource: ds.cloneWithRows([1,2,3,4,5,6,7,8,9,10,11,12,13,14])}

    }

    componentDidMount() {
        Orientation.unlockAllOrientations()
    }

    render() {
        return (
            <ListView
                contentContainerStyle={styles.content}
                initialListSize={10}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                showsVerticalScrollIndicator={true}
                removeClippedSubviews={true}
                onEndReachedThreshold={300}
                scrollRenderAheadDistance={500}
                pageSize={2}
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
    video: {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
        overflow:'hidden',
    },
    videoLastPlace: {
        marginRight: 5,
        marginLeft: 5,
        opacity: 0,
    }

})