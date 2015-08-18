// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'

class TableOfContents extends React.Component {
    constructor(props) {
        super(props)
        // Bind callback methods to make `this` the correct context.
    }
    componentDidMount() {
	    let availableTags = [
	    	{value: "Sign up", href: "#signingup" },
	    	{value: "Interface", href: "#interface" },
	    	{value: "Profile", href: "#profile" },
	    	{value: "Edit profile", href: "#profile" },
	    	{value: "Galleries", href: "#galleries" },
	    	{value: "Create gallery", href: "#creategal" },
	    	{value: "Preview gallery", href: "#previewgal" },
	    	{value: "Sort galleries", href: "#sortgal" },
	    	{value: "Folders", href: "#folders" },
	    	{value: "Add folders", href: "#addfolders" },
	    	{value: "Sort folders", href: "#sortfolders" },
	    	{value: "Add assets", href: "#addassets" },
	    	{value: "Batch upload", href: "#batchupload" },
	    	{value: "Upload multiple files at once", href: "#batchupload" },
	    	{value: "Asset options", href: "#assetoptions" },
	    	{value: "Analytics", href: "#analytics" },
	    	{value: "View analytics", href: "#analytics" },
	    	{value: "Page settings", href: "#pagesettings" },
	    	{value: "Portal", href: "#portal" },
	    	{value: "Theme", href: "#theme" },
	    	{value: "Members", href: "#members" },
	    	{value: "Add members", href: "#addmembers" },
	    	{value: "Manage roles", href: "#manageroles" },
	    	{value: "Gallery settings", href: "#gallerysettings" },
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
    // render the component
    render() {
        return (
	        <div className="col-md-2" style={styles.container} >
			  	<div className="searchandicon">
			  		<i className="icon-search icon"></i>
					<input className="search" id="tags" placeholder="Search" /> 
				</div>
	        	<div className="well toc" style={styles.toc}>
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
		top: 70,
	},
	container: {
		paddingTop: 7,
	},
})

export default TableOfContents
// end of file