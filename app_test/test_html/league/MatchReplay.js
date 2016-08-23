/**
 * Created by yk on 2016/7/29.
 */

class MatchReplay extends Component {

    componentDidMount() {
        this._loadData(() => {
            //setInterval to get data per secondes
        })
    }


    render() {
        return (
            <View>
                <View></View>
                <View>
                    <Hero></Hero>

                </View>
                <View></View>
            </View>
        )
    }


}

class Hero extends Component {
    constructor(props) {
        super(props)
        this.x = new Animated.Value(0)
        this.y = new Animated.Value(0)
        this.hp = new Animated.Value(0)
        this.heroImage = "http://cdn.dota2.com/apps/dota2/images/miniheroes/leshrac.png" //TODO  get ...
    }

    setHeroPro(opts) {
        this.x.setValue(opts.x)
        this.y.setValue(opts.y)
        this.hp.setValue(opts.hp)
    }

    render() {
        return (
            <Animated.View style={{
               position:'absolute',
               left: this.x,
               top:this.y,
            }}>
                <Image source={{uri:this.heroImage}} style={styles.heroImage}></Image>
            </Animated.View>
        )
    }
}


const styles = StyleSheet.createClass({
    heroImage: {
        width:32,
        height:32,
    }
})