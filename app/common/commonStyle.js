/**
 * Created by pwrd on 16/7/25.
 */
import {StyleSheet} from 'react-native'

const commonStyles = StyleSheet.create({
    ofHidden:{overflow:'hidden'},
    flex:{flex:1},
    flexRow: {flexDirection: 'row'},
    flexRowJL: {flexDirection:'row', justifyContent:'flex-end'},
    flexRowFlex: {flexDirection: 'row', flex:1},
    fs12: {fontSize: 12,},
    fs13: {fontSize: 13,},
    fs14: {fontSize: 14,},
    fs12Flex1: {fontSize: 12, flex: 1, textAlign:'center'},
    fs12Flex2: {fontSize: 12, flex: 2, textAlign:'center'},
    fs13Flex1: {fontSize: 13, flex: 1, textAlign:'center'},
    fs14Flex1: {fontSize: 14, flex: 1, textAlign:'center'},
    fs13Flex2: {fontSize: 13, flex: 2, textAlign:'center'},
    fs14Flex1L: {fontSize: 14, flex: 1, textAlign:'left'},

})
module.exports = commonStyles