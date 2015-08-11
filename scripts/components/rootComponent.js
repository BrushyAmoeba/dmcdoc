// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'
import TableOfContents from 'components/tableOfContents'
import SectionContent from 'components/sectionContent'
import SubsectionContent from 'components/subsectionContent'

class RootComponent extends React.Component {
	constructor(props) {
        super(props)
        // Bind callback methods to make `this` the correct context.
        this.showContent = this.showContent.bind(this)
    }
    // render the component
    showContent(contentRef) {
    	this.refs[contentRef].show()
    }
    render() {
        return (
        	<div className="container-fluid">
			    <TableOfContents showContent={this.showContent}/>
				<div className="col-md-9">
					<SectionContent title="Introduction" id="intro" ref="introduction">
	                    <SubsectionContent title="Signing Up">
							<p>To sign up, navigate your browser to <a target="_blank" href="http://digitalmediacenter.com">Digital Media Center</a> and click Sign up.</p>
					    	<p>Enter your full name, email, desired username, and desired password.</p>
					    	<p>After signing up, you will receive an email with confirmation instructions. You must confirm your account before you can sign in.</p>
					    	<p>{"If you're having trouble finding the confirmation email, check your spam folder. The subject of the email is 'Confirmation instructions.'"}</p>
	                    </SubsectionContent>
	                    <SubsectionContent title="The Interface">
			                <p style={styles.paragraph}>Once signed in, you will be presented with the DMC dashboard, which consists of:</p>
			                <ul>
			                    <li>main content area</li>
			                    <li>sidebar</li>
			                    <li>menu bar (at top)</li>
			                </ul>
			                <p style={styles.paragraph}>On the left side of the dashboard, you will find a sidebar consisting of four menu options:</p>
			                <ul style={styles.paragraph}>
			                    <li>Galleries (default)</li>
			                    <li>Analytics</li>
			                    <li>Customize</li>
			                    <li>Members</li>
			                </ul>
			                <p styles={[styles.indent]}><i>Selecting an option from this sidebar will change what module(?) appears in the main content area of the dashboard.</i></p>
			                <p style={styles.paragraph}>At the top of the dashboard, you will find a menu bar consisting of four menu options:</p>
			                <ul style={styles.paragraph}>
			                    <li>Upload Media (opens a new window on top of main content area)</li>
			                    <li>Preview (takes user to page representing how others will see their profile)</li>
			                    <li>My Profile (changes main content area)</li>
			                    <li>Logout</li>
			                </ul>
	                    </SubsectionContent>
	                    <SubsectionContent title="Editing Profile Information">
							<p>If you ever wish to change your email or password, simply click My Profile at the top of the dashboard, edit your information, and click save changes.</p>
			                <p>This is also where you can generate an API key; this will be discussed in more detail later.</p>
	                    </SubsectionContent>
					</SectionContent>
	                <SectionContent title="Galleries" id="galleries" ref="galleries">
	                    <SubsectionContent title="Creating a Gallery">
	                        <p>To create a gallery, navigate to the "Galleries" page.</p>  
	                        <p style={styles.paragraph}>Click "Add Gallery" in the top right-hand corner of the main content area. You will be prompted for:</p>
	                        <ul>
	                            <li>Gallery name</li>
	                            <li>Welcome message (description)</li>
	                            <li>Visibility to public</li>
	                            <li>Password Protection</li>
                            </ul>
                            <p style={styles.paragraph}>After adding a new gallery, observe that our list of galleries has been populated with our new addition. For each gallery we have created we can:</p>
	                        <ul>
	                            <li>Make first (set as default gallery for visitors to your portal)</li>
	                            <li>Edit (gives ability to edit the information we set when creating gallery)</li>
	                            <li>Delete</li>
	                        </ul>  
	                    </SubsectionContent>
	                    <SubsectionContent title="Previewing a Gallery">
	                    	<p>Previewing a gallery shows us what visitors will see when they view our profile.</p>
	                        <p>To preview, simply click Preview at the top of our dashboard.</p>
	                        <p>Try editing a gallery and unchecking "Visible for users?" Now, our video is private.</p>
	                        <p>To confirm this, click preview. The gallery we set to private should not be shown.</p>
	                    </SubsectionContent>
	                    <SubsectionContent title="Sorting Galleries">
                        	<p>{"Let's add a few more galleries so we can experiment with sorting."} Sorting determines the ordering of our galleries when people view our portal.</p>
                        	<p>Before performing any sorting operations, our galleries will be sorted with the oldest at the top and the newest at the bottom.</p>
                        	<p>To sort, click on the arrows to the left of a gallery item and drag the item to your desired position.</p>
	                    	<p>Now when we preview, the order of our galleries will reflect whatever sorting changes we have made.</p>
	                    </SubsectionContent>                        
	                </SectionContent>
	                <SectionContent title="Folders" id="folders" ref="folders">
	                	<SubsectionContent title="Adding Folders to Galleries">
	                		<p>{"Up until this point, we've experimented with creating, editing, sorting, and previewing galleries. Now, let's add content within a gallery."}</p>
	                		<p>When looking at the list of galleries, each gallery will have its name as a hyperlink. Clicking on one of these hyperlinks will take you to the gallery and display its contents.</p>
	                		<p>Assets must belong to a folder. If we add an asset before creating any folders, a folder named "default" will be created automatically, and our new asset will be added to this folder.</p>
	                		<p>To create our own folder, click "Manage Folders" at the top left of the main content area.</p>
	                		<p>Enter your desired name for the folder you are creating and click Add Folder when done.</p>
	                		<p style={styles.paragraph}>You are now able to edit and delete this folder. Editing allows you to:</p>
	                		<ul>
	                			<li>Rename folder</li>
	                			<li>Move to different gallery</li>
	                			<li>Modify default number of assets loaded per page</li>
	                			<li>Hide asset titles for folder</li>
	                			<li>Hide asset descriptions for folder</li>
	                			<li>Make folder private</li>
	                			<li>Add password protection</li>
	                		</ul>
                		</SubsectionContent>
                		<SubsectionContent title="Sorting Folders">
	                		<p>If we have multiple folders, we can also sort the folders in the same way we sorted galleries.</p>
	                		<p>{"Close the Manage Folders window by clicking the 'x' at the top-right. Observe that each folder we've created now has a tab associated with it."}</p>
	                		<p>{"The order in which we've sorted our folders determines the order of these tabs. Furthermore, the folder at the top of the list will be the default tab loaded."}</p>
	                	</SubsectionContent>
	                </SectionContent>
	                <SectionContent title="Assets" id="assets" ref="assets" >
						<SubsectionContent title="Adding Assets to Folders">
							<p>Assets can be uploaded from virtually anywhere within Digital Media Center, provided you are logged in.</p>
							<p style={styles.paragraph}>To upload an asset, click "Upload media" at the top of the dashboard. The settings for uploading assets are:</p>
							<ul>
								<li>Folder (if none created, will create "default")</li>
								<li>Title (limit 50 characters)</li>
								<li>Description (includes some basic editing options via a toolbar)</li>
								<li>Downloadable?</li>
								<li>Tags</li>
							</ul>
						</SubsectionContent>
						<SubsectionContent title="Uploading Multiple Assets at Once">
							<p>Below these settings you will find options to cancel upload and add additional files to the upload.</p>
							<p>You have the option to add multiple files at once, creating a "batch upload."</p>
							<p>All files uploaded in batch will be given the same settings as dictated above. They will all have the same title and description.</p>
						</SubsectionContent>
						<SubsectionContent title="Asset Options">
							<p style={styles.paragraph}>Every asset in a given folder will have a small cog wheel icon in the bottom right. Clicking this will bring up several options for an asset. These options include:</p>
							<ul>
								<li>Download</li>
								<li>Quick Link (allows you to generate a shortened URL for sharing assets. The link can be given an expiration date and you can designate whether or not you want visitors to be able to download the asset from the quicklink.</li>
								<li>Analytics</li>
								<li>Edit (title, description, downloadable?, tags, custom thumbnail)</li>
								<li>Delete</li>
							</ul>
						</SubsectionContent>
	                </SectionContent>
	                <SectionContent title="Analytics" id="analytics" ref="analytics">
	                	<SubsectionContent title="Viewing Analytics">
	                		<p style={styles.paragraph}>To view Analytics for your assets, click Analytics, located in the left sidebar. The Analytics module consists of:</p>
	                		<ul>
	                			<li>Events</li>
	                			<li>Downloads</li>
	                			<li>Graphs</li>
	                		</ul>
	                	</SubsectionContent>
	                </SectionContent>
	                <SectionContent title="Customize" id="customize" ref="customize">
	                	<p style={styles.paragraph}>The customize module, located in the left sidebar, allows you to customize what people will see when they visit your Digital Media Center. The module consists of three tabs:</p>
	                	<ul>
	                		<li>Page Settings</li>
	                		<li>Portal</li>
	                		<li>Theme</li>
	                	</ul>
	                	<SubsectionContent title="Page Settings">
	                		<h4>Logo Options</h4>
	                		<p>Logo Options allow you to customize the logo that appears in the top left of your Digital Media Center. By default, this logo is simply text representing the full name you gave in the registration process.</p>
	                		<p>The Logo section allows you to upload an image representing your logo. The image will be scaled to 50px heigh, preserving aspect ratio in the process.</p>
	                		<p>The logo will be shown at the top left of your own dashboard. Visitors to your portal will also see this logo. </p>
                			<p>The Logo URL designates a custom link location (ex: your website) when visitors click your logo.</p>
                			<p> Alternatively, you can set custom text to appear in place of a logo. This will replace the default text, which is given by the name you registered with.</p>
                			<h4>Subdomain Options</h4>
	                		<p>Subdomain Options allow you to designate the URL of your Digital Media Center. The URL is of the form "subdomain.digitalmediacenter.com"</p>
	                		<p>The default subdomain is given by the username you chose when registering your account.</p>
	                		<p>To change, click the text box below subdomain and enter your desired subdomain.</p>
	                		<p>"Allow subdomain indexing" will make your Digital Media Center visible to search engines, like Google.</p>
            				<p>"Enable password protection" will force visitors to enter a password before they are allowed to see your portal, galleries, folders, and assets.</p>
            				<p>"Subdomain password" will designate the password, if password protection is turned on.</p>
            				<p>{"When you've finished making changes, click Apply Changes."}</p>
        				</SubsectionContent>
	                	<SubsectionContent title="Portal">
	                		<p style={styles.paragraph}>The Portal module allows you to create a welcome page for visitors to your page. This page includes:</p>
	                		<ul>
	                			<li>Portal Title (large header text)</li>
	                			<li>Portal Header Image (image to be displayed below portal title, 1140x340px)</li>
	                			<li>Welcome message (if a welcome message is set, your portal will have a section that displays this welcome message)</li>
	                			<li>Restrictions message (if a restriction message is set, your portal will have a link in the bottom right that reads “Restrictions” and when clicked on, will display your restriction message)</li>
	                			<li>Copyrights (if set, this text will replace the “Digital Media Center” text in the bottom left of your portal)</li>
	                			<li>Announcements (if you’ve added any announcements, your portal will contain an announcement section. Visitors can see the date and time these were created)</li>
	                		</ul>
	                	</SubsectionContent>
	                	<SubsectionContent title="Theme">
	                		<p style={styles.paragraph}>The Theme tab allows you to change the colors of various elements of your portal. These include:</p>
	                		<ul>
	                			<li>Navigation bar background color</li>
	                			<li>Navigation link color</li>
	                			<li>Body background color</li>
	                			<li>Body font color</li>
	                			<li>Body links color</li>
	                			<li>Asset tile background color</li>
	                			<li>Button color</li>
	                			<li>Button font color</li>
	                			<li>Navigation dropdown link color</li>
	                			<li>Navigation dropdown link color active</li>
	                			<li>Navigation dropdown link background color active</li>
	                			<li>Navigation dropdown toggle open background color</li>
	                		</ul>
                		</SubsectionContent>
	                </SectionContent>
	                <SectionContent title="Members" id="members" ref="members">
	                	<SubsectionContent title="Adding Members">
	                		<p>The Members module allows you to create accounts for your team and subsequently set permission for these accounts.</p>
	                		<p>{"Click Add Member at the top left of the main content area. Enter the information for the team member in the resulting page."}</p>
	                		<p>In addition to setting registration information, the Add Member page also allows you to set permissions for the member you are adding. Click on "Account Permissions" and check the boxes for each permission you want the new member to have. You can also set permissions for individual galleries and folders.</p>
	                		<p>{"After you've finished entering registration information and setting permissions for the new team member, click Create User. Confirmation instructions will be sent to the email address of the new team member. This user will be unable to login to their account until they confirm via the email."}</p>
	                		<p>Roles allow us to create permission "presets" that we can use when adding members. Roles are useful when you are going to be adding many members that will all have the same permissions. To edit roles, click Manage Roles</p>
	                	</SubsectionContent>
	                	<SubsectionContent title="Managing Roles"></SubsectionContent>
	                </SectionContent>
	            	<SectionContent title="Gallery Settings" id="gallerysettings" ref="gallerysettings">
	            		<p style={styles.paragraph}>Gallery Settings allow you to:</p>
	            		<ul>
	            			<li>Rename your gallery</li>
	            			<li>Create external links that show up in the top menu bar when viewing a gallery</li>
	            			<li>Feature a gallery (includes a large image next to the gallery title in the portal page)</li>
	            			<li>Set featured image</li>
	            			<li>Add a custom message to be displayed below the gallery title (in smaller text) when viewing a specific gallery</li>
	            		</ul>
	            		<p>{"Gallery Settings can only be accessed by navigating to a gallery (for example, by clicking Galleries in the left sidebar and then clicking on a specific Gallery title). Once you've navigated to a gallery, the 'Gallery Settings' is now visible in the left sidebar."} </p>
	            	</SectionContent>
			    </div>
            </div>
        )
    }
}

let styles = StyleSheet.create({
    paragraph: {
        marginBottom: '0px',
    },
})

export default RootComponent
// end of file