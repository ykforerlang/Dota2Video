/**
 * Created by yk on 2016/8/23.
 */

class VideoList extends React.Component {

    render() {
        return (
            <View style={styles.content}>
                <View style={styles.video}>
                    <Image source={{uri:'http://r3.ykimg.com/0542040857B01A7E6A0A4A051B9753AE'}} style={{height:80,width:140}}></Image>
                    <Text>Wings vs DC Ti6</Text>
                    <Text>总决赛 Bo5 第四场</Text>
                </View>

                <View style={styles.video}>
                    <Image source={{uri:'http://r3.ykimg.com/0542040857B01A7E6A0A4A051B9753AE'}} style={{height:80,width:140}}></Image>
                    <Text>Wings vs DC Ti6</Text>
                    <Text>总决赛 Bo5 第四场</Text>
                </View>

                <View style={styles.video}>
                    <Image source={{uri:'http://r3.ykimg.com/0542040857B01A7E6A0A4A051B9753AE'}} style={{height:80,width:140}}></Image>
                    <Text>Wings vs DC Ti6</Text>
                    <Text>总决赛 Bo5 第四场</Text>
                </View>

                <View style={styles.video}>
                    <Image source={{uri:'http://r3.ykimg.com/0542040857B01A7E6A0A4A051B9753AE'}} style={{height:80,width:140}}></Image>
                    <Text>Wings vs DC Ti6</Text>
                    <Text>总决赛 Bo5 第四场</Text>
                </View>

                <View style={styles.video}>
                    <Image source={{uri:'http://r3.ykimg.com/0542040857B01A7E6A0A4A051B9753AE'}} style={{height:80,width:140}}></Image>
                    <Text>Wings vs DC Ti6</Text>
                    <Text>总决赛 Bo5 第四场</Text>
                </View>

                <View style={styles.video}>
                    <Image source={{uri:'http://r3.ykimg.com/0542040857B01A7E6A0A4A051B9753AE'}} style={{height:80,width:140}}></Image>
                    <Text>Wings vs DC Ti6</Text>
                    <Text>总决赛 Bo5 第四场</Text>
                </View>

                <View style={styles.video}>
                    <Image source={{uri:'http://r3.ykimg.com/0542040857B01A7E6A0A4A051B9753AE'}} style={{height:80,width:140}}></Image>
                    <Text>Wings vs DC Ti6</Text>
                    <Text>总决赛 Bo5 第四场</Text>
                </View>

                <View style={[styles.videoLastPlace, {width:140}]}>
                </View>

                <View style={styles.video}>
                    <Image source={{uri:'http://r3.ykimg.com/0542040857B01A7E6A0A4A051B9753AE'}} style={{height:80,width:140}}></Image>
                    <Text>Wings vs DC Ti6</Text>
                    <Text>总决赛 Bo5 第四场</Text>
                </View>

                <View style={styles.video}>
                    <Image source={{uri:'http://r3.ykimg.com/0542040857B01A7E6A0A4A051B9753AE'}} style={{height:80,width:140}}></Image>
                    <Text>Wings vs DC Ti6</Text>
                    <Text>总决赛 Bo5 第四场</Text>
                </View>

                <View style={styles.video}>
                    <Image source={{uri:'http://r3.ykimg.com/0542040857B01A7E6A0A4A051B9753AE'}} style={{height:80,width:140}}></Image>
                    <Text>Wings vs DC Ti6</Text>
                    <Text>总决赛 Bo5 第四场</Text>
                </View>


            </View>
        )
    }

}

const styles = StyleSheet.create({
    content: {
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'flex-start',
        justifyContent:'space-around',
        paddingLeft:10,
        paddingRight:10,
    },
    video: {
        marginTop:10,
        marginButtom:10,
        marginRight:5,
        marginLeft:5,
    },
    videoLastPlace: {
        marginRight:5,
        marginLeft:5,
        opacity:0,
    }

})

ReactDOM.render(
    <VideoList/>,
    document.getElementById('container')
);