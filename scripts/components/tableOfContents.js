// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'

class TableOfContents extends React.Component {
    // render the component
    render() {
        return (
	        <div className="col-md-2" >
	        	<div className="well" style={styles.toc}>
					<a href="#intro"><h4 style={styles.header}>1. Introduction</h4></a>
				 	
					<a href="#galleries"><h4 style={styles.header}>2. Galleries</h4></a>

				  	<a href="#folders"><h4 style={styles.header}>3. Folders</h4></a>

				   	<a href="#assets"><h4 style={styles.header}>4. Assets</h4></a>

				  	<a href="#analytics"><h4 style={styles.header}>5. Analytics</h4></a>

				   	<a href="#customize"><h4 style={styles.header}>6. Customize</h4></a>

				   	<a href="#members"><h4 style={styles.header}>7. Members</h4></a>

				  	<a href="#gallerysettings"><h4 style={styles.header}>8. Gallery Settings</h4></a>
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
	},
	'@media (min-width : 667px)': {
		toc: {
			position: 'fixed',
		}
	},
	header: {
		marginTop: 8,
		marginBottom: 8,
	}
})

export default TableOfContents
// end of file