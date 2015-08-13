// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'

class SubChapter extends React.Component {
    constructor(props) {
        super(props)
        // Bind callback methods to make `this` the correct context.
        this.introChapters = this.introChapters.bind(this)
    }
	introChapters() {
    	return(
			<div>
		 		<a href="#signingup"><h5 style={styles.subsection}>Signing Up</h5></a>
			 	<a href="#interface"><h5 style={styles.subsection}>The Interface</h5></a>
			 	<a href="#profileinfo"><h5 style={styles.subsection}>Editing Profile</h5></a>
		 	</div>
		)	
	}
    // render the component
    render() {
        return (
        	<div>
				<a href={this.props.href}><h5 style={styles.subsection}>{this.props.title}</h5></a>	    
        	</div>
        )
    }
}

let styles = StyleSheet.create({
	subsection: {
		marginLeft: 20,
		marginTop: 5,
		marginBottom: 5,
	},
})

export default SubChapter
// end of file