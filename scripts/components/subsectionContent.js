// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'

class SubsectionContent extends React.Component {
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
        if (this.state.showContent){
            return (       
                <div style={styles.content} className="slidedown">
                    {this.props.children}
                </div> 
            )
        }
        else {
            return (       
                <div style={styles.content} className="slideup">
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
        	<div>
	        	<h3 onClick={this.handle_click} style={styles.header}>{this.getAccordion()}{this.props.title}</h3>
                {this.getContent()}
	        	{/* this.state.showContent ? this.getContent() : null */}
	        </div>
        )
    }
}

let styles = StyleSheet.create({
    content: {
        paddingTop: 3,
        marginLeft: 35,
    },
    header: {
    	marginTop: 5,
        marginBottom: 10,
    },
    icon: {
        fontSize: 18,
        marginLeft: 0,
        paddingRight: 8,
        verticalAlign: '9%',
    },
})

export default SubsectionContent
// end of file