// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'

class TableOfContents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        	showSearch: false,
        }
        // Bind callback methods to make `this` the correct context.
    }
    componentDidMount() {
	    let availableTags = [
	    	{value: "Signing Up", href: "#signingup" },
	    	{value: "Interface", href: "#interface" },
	    	{value: "Profile", href: "#profile" },
	    	{value: "Galleries", href: "#galleries" },
	    	{value: "Creating a Gallery", href: "#creategal" },
	    	{value: "Previewing a Gallery", href: "#previewgal" },
	    	{value: "Sorting Galleries", href: "#sortgal" },
	    	{value: "Folders", href: "#folders" },
	    	{value: "Adding Folders", href: "#addfolders" },
	    	{value: "Sorting Folders", href: "#sortfolders" },
	    	{value: "Adding Assets", href: "#addassets" },
	    	{value: "Batch Upload", href: "#batchupload" },
	    	{value: "Uploading Multiple Files at Once", href: "#batchupload" },
	    	{value: "Asset Options", href: "#assetoptions" },
	    	{value: "Analytics", href: "#analytics" },
	    	{value: "Viewing Analytics", href: "#analytics" },
	    	{value: "Page Settings", href: "#pagesettings" },
	    	{value: "Portal", href: "#portal" },
	    	{value: "Theme", href: "#theme" },
	    	{value: "Members", href: "#members" },
	    	{value: "Adding Members", href: "#addmembers" },
	    	{value: "Managing Roles", href: "#manageroles" },
	    	{value: "Gallery Settings", href: "#gallerysettings" },
	    ]
	    $( "#tags" ).autocomplete({
	    	source: availableTags,
	    	select: (event, ui)=>{
	    		let url = ui.item.href
	    		location.href = url
	    		console.log(this)
	    		$("#tags").val("")
	    		return false
	      	},
	    })
    }
    showSearch() {
    	this.setState({showSearch: !this.state.showSearch})
    }
    // render the component
    render() {
        return (
	        <div className="col-md-2" style={styles.container} >
	        	<div className="well" style={styles.toc}>
	        		{this.props.children}
			  	</div>
			  	<div>
			  		<i className="icon-search" style={styles.icon} onClick={this.showSearch.bind(this)}></i>
					{this.state.showSearch ? <input id="tags" placeholder="Search" style={styles.search} /> : <input id="tags" style={styles.hidden} /> }
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
		width: '13.5%',
	},
	container: {
		paddingTop: 7,
	},
	search: {
		position: 'fixed',
		top: 340,
		left: 70,
		height: 30,
		border: 'none',
		paddingLeft: 5,
		width: '10%',
	},
	hidden: {
		display: 'none',
	},
	icon: {
		fontSize: 30,
		position: 'fixed',
		top: 340,
		color: 'rgba(133, 195, 118, 1)',
	}
})

export default TableOfContents
// end of file