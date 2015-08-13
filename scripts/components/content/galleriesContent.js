// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'
import SubsectionContent from 'components/subsectionContent'

class GalleriesContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
    }
    // render the component
    render() {
        return (
            <div>
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
        	</div>
        )
    }
}

let styles = StyleSheet.create({
    paragraph: {
        marginBottom: '0px',
    },
})

export default GalleriesContent
// end of file