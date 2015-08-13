// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'
import _ from 'lodash'

class RootComponent extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
        	
        }
        // Bind callback methods to make `this` the correct context.
    }
 
    // render the component
    render() {
        return (
        	<div>
	        	<div className="container-fluid">
	        		{this.props.content}
	            </div>
	            <div style={styles.footer}>
		        	FOOTER
		        </div>
	        </div>
        )
    }
}

let styles = StyleSheet.create({
	footer: {

        backgroundColor: 'rgba(245, 245, 245, 0.85)',
		padding: 50,
		marginTop: 25,
		marginLeft: 255,
		marginRight: 185,
	}
})

export default RootComponent
// end of file