/**
 * Created by yk on 2016/8/1.
 */

class WtTarBar extends Component {
    static propTypes = {
        ...View.protoTypes,

        initOpacity: React.PropTypes.number,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array.isRequired,
        goToPage: React.PropTypes.func.isRequired,
        underlineColor: React.PropTypes.string.isRequired,
        underlineHeight: React.PropTypes.number.isRequired,
    }

    constructor(props) {
        super(props)

        this.initOpacity = props.initOpacity || 0.7
        this.itemList = props.tabs


        this._scrollValueRange = this._initScrollValueRange(this.itemList.length)
        this._itemX =new Array(this.itemList.length)
        this._itemWidth = new Array(this.itemList.length)

        this._TouchAnimated = Animated.createAnimatedComponent(TouchableWithoutFeedback) //TODO how?
        this.state = {underLineAniStyle: null}
    }

    componentDidMount() {
        //TODO ?
        console.warn(this._itemX)
        const left = this.props.scrollValue.interpolate({
            inputRange: this._scrollValueRange,
            outputRange: this._itemX,
        })
        const width = this.props.scrollValue.interpolate({
            inputRange: this._scrollValueRange,
            outputRange: this._itemWidth,
        })
        this.setState({
            underLineAniStyle: {
                left,
                width,
                opacity:1,
            }
        })
    }

    render() {
        const underLineStyle = {
            position: 'absolute',
            buttom:0,
            height:this.props.underlineHeight,
            backgroundColor: this.props.underlineColor,
            opacity:0,
            width:1,
        }

        return (
            <View style={[styles.tarBar, this.props.style]}>
                {this.itemList.map((item, index) => {
                    return this._tarBarItem(index, item)
                })}

                <Animated.View style={[underLineStyle, this.state.underLineAniStyle]}/>
            </View>
        )
    }

    _tarBarItem(index, title) {
        const opa = this.props.scrollValue.interpolate({
            inputRange:this._scrollValueRange,
            outputRange: this._getOutputRange(this.itemList.length, index, this.initOpacity),
        })
        const Comp = this._TouchAnimated
        return  (
            <Comp
                style={{
                opacity: opa
                }}
                onPress={() => this.props.goToPage(index)}
                onLayout={(event) => this._onLayout(event, index)}
            >
                <Text>{title}</Text>
            </Comp>
        )
    }

    _initScrollValueRange(length) {
        if (length <= 0) {
            console.warn("tar item should >0")
            return
        }
        if (length == 1) return [0]
        if (length == 2) return [0, 1]
        if (length == 3) return [0, 1, 2]

        const r = []
        for (let i = 0; i< length; i++) {
            r.push(i)
        }
        return r
    }
    _getOutputRange(length, index, initOpa) {
        if (length <= 0) {
            console.warn("tar item should >0")
            return
        }

        const r = []
        for (let i = 0; i< length; i++) {
            if (i == index) {
                r.push(1)
            } else {
                r.push(initOpa)
            }
        }
        return r
    }


    _onLayout(event, index) {
        const layout = event.nativeEvent.layout
        this._itemX[index] = layout.x
        this._itemWidth[index] = layout.width
    }

}

const styles = StyleSheet.create({
    tarBar: {
        flexDirection:'row',
        justifyContent:'space-around',
    }
})