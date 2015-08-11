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
        this.setState({ showContent: !this.state.showContent })
    }
    getContent(){
        if (this.state.showContent){
            return (       
                <div style={styles.extraPadding} className="slidedown">
                    {this.props.children}
                </div> 
            )
        }
        else {
            return (       
                <div className="slideup">
                    {this.props.children}
                </div> 
            )
        }
    }
    getAccordion(){
        if (this.state.showContent == false){
            return(
                <i className="icon-plus" style={styles.icon}></i>
            )
        }
        else{
            return(
                <i className="icon-minus" style={styles.icon}></i>
            )    
        }
    }    	
    render() {
        return (
        	<div id={this.props.id} style={styles.section}>
                <div className="well" style={styles.well}>
                    <div style={styles.headerWell} >
                        <h1 style={styles.bigHeader} onClick={this.handle_click}>{this.getAccordion()}{this.props.title}</h1>
                    </div>
                    {this.getContent()}
                    {/*<div style={styles.content} className="slidedown">
                        { this.state.showContent ? this.getContent() : null }
                    </div>*/}
                </div>
            </div>
        )
    }
}

let styles = StyleSheet.create({
    headerWell: {
        padding: 15,
        backgroundColor: '#77C5F7',
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
    },
    section: {
        padding: 7,
    },
    extraPadding:{
        padding: 20,
        paddingTop: 6,
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    icon: {
        fontSize: 24,
        paddingRight: 8,
        verticalAlign: '15%',
    },
})

export default SectionContent
// end of file