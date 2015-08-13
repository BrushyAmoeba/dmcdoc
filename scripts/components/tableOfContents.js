// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'

class TableOfContents extends React.Component {
    constructor(props) {
        super(props)
        // Bind callback methods to make `this` the correct context.
    }
    // render the component
    render() {
        return (
	        <div className="col-md-2" >
	        	<div className="well" style={styles.toc}>
	        		{this.props.children}
			  	</div>
		    </div>
        )
    }
}

let styles = StyleSheet.create({
    toc: {
		paddingTop: 15,
		paddingBottom: 10,
		backgroundColor: 'rgba(245, 245, 245, 0.5)',
		border: 'none',
		position: 'fixed',
	},
})

export default TableOfContents
// end of file