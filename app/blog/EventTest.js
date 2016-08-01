/**
 * Created by pwrd on 16/6/30.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
    NavigatorIOS,
} from 'react-native';

let moveCount = 0;
export default class EventTest extends Component {
    render() {
       return (
           <View style={{flex:1,
            backgroundColor:'grey',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            }}
           onTouchStart={e =>this.printObject(e, "view0")}
                 onStartShouldSetResponder={(e) =>this.printObject(e, "24")}  onResponderMove={(e) => this.printObjectMove(e, "24-1")}
                 onResponderRelease={(e) => this.printObjectMove(e, "24-2")}
           >
               <View style={{height:200, width:200, backgroundColor:'black',}} onTouchStart={e =>this.printObject(e, "view1")}
                     onMoveShouldSetResponder={(e) =>this.printObject(e, "27")}
                     onResponderMove={(e) => this.printObjectMove(e, "move28")}
               >
                   <Text>text1</Text>
               </View>
               <View style={{height:200, width:200}}>
                   <Text>text2</Text>
               </View>
           </View>
       )
    }

    printObject(e, view) {

        return view == 27
    }

    printObjectMove(e, view) {
        console.warn("move:", moveCount, "x:", e.nativeEvent.pageX, "y:", e.nativeEvent.pageY)
        moveCount = moveCount + 1
    }
}

