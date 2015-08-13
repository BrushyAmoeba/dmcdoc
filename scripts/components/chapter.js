// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'

class Chapter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          showChapters: true,
        }
    }
   componentWillReceiveProps(){
        this.setState({showChapters: this.props.showChapters})
    }
    // render the component
    render() {
        return (
            <div>
                <a href={this.props.href} onClick={this.props.onClick}><h4 style={styles.header}>{this.props.title}</h4></a>
                {this.state.showChapters ? this.props.children : null}
        	</div>
        )
    }
}

Chapter.defaultProps = {showChapters : false}

let styles = StyleSheet.create({
	header: {
		marginTop: 8,
		marginBottom: 8,
	},
})

export default Chapter
// end of file