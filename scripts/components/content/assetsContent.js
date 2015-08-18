// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'
import SubsectionContent from 'components/subsectionContent'

class AssetsContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
    }
    // render the component
    render() {
        return (
            <div>
                <SubsectionContent title="Adding Assets to Folders" id="addassets">
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
                <SubsectionContent title="Uploading Multiple Assets at Once" id="batchupload">
                    <p>Below these settings you will find options to cancel upload and add additional files to the upload.</p>
                    <p>You have the option to add multiple files at once, creating a "batch upload."</p>
                    <p>All files uploaded in batch will be given the same settings as dictated above. They will all have the same title and description.</p>
                </SubsectionContent>
                <SubsectionContent title="Asset Options" id="assetoptions">
                    <p style={styles.paragraph}>Every asset in a given folder will have a small cog wheel icon in the bottom right. Clicking this will bring up several options for an asset. These options include:</p>
                    <ul>
                        <li>Download</li>
                        <li>Quick Link (allows you to generate a shortened URL for sharing assets. The link can be given an expiration date and you can designate whether or not you want visitors to be able to download the asset from the quicklink.</li>
                        <li>Analytics</li>
                        <li>Edit (title, description, downloadable?, tags, custom thumbnail)</li>
                        <li>Delete</li>
                    </ul>
                </SubsectionContent>
        	</div>
        )
    }
}

let styles = StyleSheet.create({
    paragraph: {
        marginBottom: '0px',
    },
})

export default AssetsContent
// end of file