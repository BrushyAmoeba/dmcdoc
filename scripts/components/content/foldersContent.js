// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'
import SubsectionContent from 'components/subsectionContent'

class FoldersContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
    }
    // render the component
    render() {
        return (
            <div>
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
        	</div>
        )
    }
}

let styles = StyleSheet.create({
    paragraph: {
        marginBottom: '0px',
    },
})

export default FoldersContent
// end of file