/**
 * Created by yk on 2016/7/18.
 */
window.require = function(resources) {
    let index1 = resources.lastIndexOf("?")
    index1 = index1 == -1 ? resources.length : index1
    let index2 = resources.lastIndexOf(".")
    if (index2 != -1) {
        let suffix = resources.substring(index2 + 1, index1)
        if (suffix == "jpg" || suffix == "JPG" || suffix == "png" || suffix == "png" || suffix == "bmp" || suffix == "BMP" || suffix == "gif" || suffix == "GIF") {
            return {uri:resources}
        }
    }

    // do js logic
    console.log("do js logic")
}

window.StyleSheet = {
    createClass: obj => obj
}


window.View = 'div'

class Image extends React.Component {

    render() {
        const src = this.props.source.uri
        return (
            <img {...this.props} src={src}/>
        )
    }
}
window.Image = Image

window.Text = 'span'



