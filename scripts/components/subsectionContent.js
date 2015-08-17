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
        if (this.state.showContent){
            return (       
                <div style={styles.content} className="slidedown">
                    {this.props.children}
                </div> 
            )
        }
        else {
            return (       
                <div style={styles.content} className="slideup">
                    {this.props.children}
                </div> 
            )
        }
    }
    render() {
        return (
        	<div id={this.props.id}>
	        	<h3 style={styles.header}>{this.props.title}</h3>
                {this.getContent()}
	        	{/* this.state.showContent ? this.getContent() : null */}
	        </div>
        )
    }
}

let styles = StyleSheet.create({
    content: {
        paddingTop: 3,
        marginLeft: 15,
    },
    header: {
    	marginTop: 5,
        marginBottom: 10,
        marginLeft: 15,
    },
})

export default SubsectionContent
// end of file