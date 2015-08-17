// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'

class SectionContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    getContent(){
        return (       
            <div style={styles.extraPadding}>
                {this.props.children}
            </div> 
        )
    }    	
    render() {
        return (
        	<div id={this.props.id} style={styles.section}>
                <div className="well" style={styles.well}>
                    <div style={styles.headerWell} >
                        <h1 style={styles.bigHeader}>{this.props.title}</h1>
                    </div>
                    {this.getContent()}
                </div>
            </div>
        )
    }
}

let styles = StyleSheet.create({
    headerWell: {
        padding: 15,
        backgroundColor: 'rgba(51, 162, 3, .55)',
    },
    well: {
        border: 'none',
        padding: 0,
        backgroundColor: 'rgba(245, 245, 245, 0.85)',
        marginBottom: 0,
    },
    bigHeader: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 15,
    },
    section: {
        paddingTop: 7,
        paddingBottom: 20,
    },
    extraPadding:{
        padding: 14,
        paddingTop: 6,
        paddingBottom: 6, 
    },
    noPadding:{
        padding: 14,
        paddingTop: 0,
        paddingBottom: 0, 
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
    },
})

export default SectionContent
// end of file