// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'

class SubChapter extends React.Component {
    constructor(props) {
        super(props)
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