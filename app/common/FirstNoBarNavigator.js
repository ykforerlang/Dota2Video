/**
 * Created by yk on 2016/7/21.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Dimensions,
    Navigator,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class FirstNoBarNavigator extends Component {

    render() {
        const initialRoute = this.props.initialRoute
        initialRoute.__isFirst = true

        return (
            <Navigator {...this.props}
                navigationBar={null}
                initialRoute={initialRoute}
                renderScene={(route, navigator) =>this._wrapperRender(route, navigator)}
            />
        )

    }

    _wrapperRender(route, navigator) {
        let fatherNavigator = navigator
        if (route.__isFirst) {
            return this.props.renderScene(route, navigator)
        } else {
            return (
                <Navigator {...this.props}
                    initialRoute={route}
                    sceneStyle={styles.scene}
                    navigationBar={
                       <Navigator.NavigationBar
                           routeMapper={{
                             LeftButton: (route, navigator, index, navState) => this._leftButton(route, navigator, index, navState,fatherNavigator),
                             RightButton: () => null,
                             Title: (route) => (route.naviTitle ?
                             <Text numberOfLines={1} style={[styles.barTitle, this.props.titleStyle]}>{route.naviTitle}</Text>
                              : null),
                           }}
                           style={[styles.bar,this.props.barStyle]}
                         />
                    }
                />
            )
        }
    }
    _leftButton(route, navigator, index, navState, fatherNavigator) {
       return (
           <View style={[styles.back,this.props.backStyle]}>
               <Icon name="ios-arrow-back" size={30}/>
               <Text style={styles.backText}
                   onPress={() =>this._backPress(route, navigator, index, fatherNavigator)}>{route.naviBack ? route.naviBack : '返回'}
               </Text>
           </View>
       )
    }
    _backPress(route, navigator, index, fatherNavigator) {
        if (index === 0) {
            fatherNavigator.pop() // father navigator pop
        } else {
            navigator.pop() // sub navigator pop
        }
    }
}


const styles = StyleSheet.create({
    scene:{
        paddingTop:64,
    },
    bar:{
        alignItems:'center',
        justifyContent:'center',
    },
    barTitle: {
        fontSize:16,
        overflow:'hidden',
        textAlign:'auto',
        height:36,
        width:160,
        paddingTop:9,
    },
    back:{
        marginLeft:15,
        flexDirection:'row',
        alignItems:'center',
        height:36,
    },
    backText: {
        marginLeft:5,
        fontSize:16,
    },

})

