/**
 * Created by yk on 2016/7/15.
 */

class Match extends React.Component {

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.brief}>
                    <View style={styles.player}>
                        <Image source={require("../../app/image/player/514364.jpg")}/>
                        <Text style={styles.briefText}>天穹守望者</Text>
                    </View>
                    <View style={styles.hero}>
                        <Image source={require("../../app/image/hero/1.png")}/>
                        <Text style={styles.briefText}>天穹守望者</Text>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemLine}>
                            <Image source={require("../../app/image/item/1.png")}/>
                            <Image source={require("../../app/image/item/2.png")}/>
                            <Image source={require("../../app/image/item/3.png")}/>
                        </View>

                        <View style={styles.itemLine}>
                            <Image source={require("../../app/image/item/4.png")}/>
                            <Image source={require("../../app/image/item/5.png")}/>
                            <Image source={require("../../app/image/item/6.png")}/>
                        </View>
                    </View>
                </View>
                <View>

                </View>
            </View>
        )
    }

}
/*const width = Dimensions.get('width')
const height = Dimensions.get('height')*/
const styles = StyleSheet.createClass({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },

    brief: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    player: {
        flex: 1,
        flexDirection: 'row',
        width: 10,
        overflow: 'hidden',
        alignItems: 'center'
    },

    hero: {
        flex: 1,
        flexDirection: 'row',
        width: 10,
        overflow: 'hidden',
        marginLeft: 5,
        alignItems: 'center',
    },

    items: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        width: 10,
        overflow: 'hidden',
        paddingTop: 5,
        paddingBottom: 5,
    },

    briefText:{
        fontSize: 13,
    },
    itemLine:{
        flexDirection:'row'
    }


})

ReactDOM.render(
    <Match/>,
    document.getElementById('container')
);


// set span/text height

$("span").each(function() {
    let thiz = $(this)
    console.log(thiz.attr("data-numberOfLines"))
    if (!thiz.attr("data-numberOfLines")) return
    console.log("hi")
    thiz.height(13 * thiz.attr("data-numberOfLines"))
})
