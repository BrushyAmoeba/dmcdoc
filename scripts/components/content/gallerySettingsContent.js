// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'
import SubsectionContent from 'components/subsectionContent'

class GallerySettingsContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
    }
    // render the component
    render() {
        return (
            <div>
                <SubsectionContent title="Editing Settings">
                    <p style={styles.paragraph}>Gallery Settings allow you to:</p>
                    <ul>
                        <li>Rename your gallery</li>
                        <li>Create external links that show up in the top menu bar when viewing a gallery</li>
                        <li>Feature a gallery (includes a large image next to the gallery title in the portal page)</li>
                        <li>Set featured image</li>
                        <li>Add a custom message to be displayed below the gallery title (in smaller text) when viewing a specific gallery</li>
                    </ul>
                    <p>{"Gallery Settings can only be accessed by navigating to a gallery (for example, by clicking Galleries in the left sidebar and then clicking on a specific Gallery title). Once you've navigated to a gallery, the 'Gallery Settings' is now visible in the left sidebar."} </p>
        	   </SubsectionContent>
                <SubsectionContent title="Editing Settings">
                    <p style={styles.paragraph}>Gallery Settings allow you to:</p>
                    <ul>
                        <li>Rename your gallery</li>
                        <li>Create external links that show up in the top menu bar when viewing a gallery</li>
                        <li>Feature a gallery (includes a large image next to the gallery title in the portal page)</li>
                        <li>Set featured image</li>
                        <li>Add a custom message to be displayed below the gallery title (in smaller text) when viewing a specific gallery</li>
                    </ul>
                    <p>{"Gallery Settings can only be accessed by navigating to a gallery (for example, by clicking Galleries in the left sidebar and then clicking on a specific Gallery title). Once you've navigated to a gallery, the 'Gallery Settings' is now visible in the left sidebar."} </p>
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

export default GallerySettingsContent
// end of file