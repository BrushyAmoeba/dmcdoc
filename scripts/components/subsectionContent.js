// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'

class SubsectionContent extends React.Component {
  	constructor(props) {
	    super(props)
	    this.state = {
	      showContent: true,
	    }

	    // Bind callback methods to make `this` the correct context.
	    this.handle_click = this.handle_click.bind(this)
  	}
    handle_click() {
    	//toggle state
        this.setState({ showContent: !this.state.showContent });
    }
    getContent(){
    	return (
            <div>
                {this.props.children}
            </div>
		)
    }
    render() {
        return (
        	<div>
	        	<h3 onClick={this.handle_click} style={styles.header}>{this.props.title}</h3>
	        	{ this.state.showContent ? this.getContent() : null }
	        </div>
        )
    }
}

let styles = StyleSheet.create({
    header: {
    	marginTop: 5,
    }
})

export default SubsectionContent
// end of file