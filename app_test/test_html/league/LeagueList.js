/**
 * Created by yk on 2016/7/19.
 */
class LeagueList extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }

    render() {
        return (
            <ListView
                contentContainerStyle={styles.container}
                dataSource={this.state.dataSource}
                initialListSize={1}
                renderRow={(rowData) => (<Text>{rowData}</Text>)}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center'
    }
})
module.exports = LeagueList

/*add */
let Comp = module.exports
ReactDOM.render(
    <Comp/>,
    document.getElementById('container')
);