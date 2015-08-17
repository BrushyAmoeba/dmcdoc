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
	        	<div className="container-fluid" style={styles.container}>
	        		{this.props.content}
	            </div>
	        </div>
        )
    }
}

let styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10,
	}
})

export default RootComponent
// end of file