// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'

class TableOfContents extends React.Component {
    // render the component
    showContent(contentRef) {
    	this.props.showContent(contentRef)
    }
    render() {
        return (
	        <div className="col-md-2" >
	        	<div className="well" style={styles.toc}>
					<a href="#intro" onClick={this.showContent.bind(this,"introduction")}><h4 style={styles.header}>1. Introduction</h4></a>
				 	
					<a href="#galleries" onClick={this.showContent.bind(this,"galleries")}><h4 style={styles.header}>2. Galleries</h4></a>

				  	<a href="#folders" onClick={this.showContent.bind(this,"folders")}><h4 style={styles.header}>3. Folders</h4></a>

				   	<a href="#assets" onClick={this.showContent.bind(this,"assets")}><h4 style={styles.header}>4. Assets</h4></a>

				  	<a href="#analytics" onClick={this.showContent.bind(this,"analytics")}><h4 style={styles.header}>5. Analytics</h4></a>

				   	<a href="#customize" onClick={this.showContent.bind(this,"customize")}><h4 style={styles.header}>6. Customize</h4></a>

				   	<a href="#members" onClick={this.showContent.bind(this,"members")}><h4 style={styles.header}>7. Members</h4></a>

				  	<a href="#gallerysettings" onClick={this.showContent.bind(this,"gallerysettings")}><h4 style={styles.header}>8. Gallery Settings</h4></a>
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
	header: {
		marginTop: 8,
		marginBottom: 8,
	}
})

export default TableOfContents
// end of file