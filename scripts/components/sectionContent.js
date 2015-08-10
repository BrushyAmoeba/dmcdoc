// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'

class SectionContent extends React.Component {
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
            <div className="well" style={styles.well}>
                {this.props.children}
            </div>  
        )
    }  	
    render() {
        return (
        	<div id={this.props.id} style={styles.section}>
                <div className="well" style={styles.well}>
                    <h1 style={styles.bigHeader} onClick={this.handle_click}>{this.props.title}</h1>
                </div>
                { this.state.showContent ? this.getContent() : null }
            </div>
        )
    }
}

let styles = StyleSheet.create({
    well: {
        border: 'none',
        padding: 18,
        backgroundColor: 'rgba(245, 245, 245, 0.85)',
    },
    bigHeader: {
        marginTop: 0,
        marginBottom: 0,
    },
    section: {
        padding: 7,
    },
})

export default SectionContent
// end of file