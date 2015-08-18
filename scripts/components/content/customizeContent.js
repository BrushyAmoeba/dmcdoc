// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'
import SubsectionContent from 'components/subsectionContent'

class CustomizeContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
    }
    // render the component
    render() {
        return (
            <div>
                <SubsectionContent title="">
                    <p style={styles.paragraph}>The customize module, located in the left sidebar, allows you to customize what people will see when they visit your Digital Media Center. The module consists of three tabs:</p>
                    <ul>
                        <li>Page Settings</li>
                        <li>Portal</li>
                        <li>Theme</li>
                    </ul>
                </SubsectionContent>
                <SubsectionContent title="Page Settings" id="pagesettings">
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
                <SubsectionContent title="Portal" id="portal">
                    <p style={styles.paragraph}>The Portal module allows you to create a welcome page for visitors to your page. This page includes:</p>
                    <ul>
                        <li>Portal Title (large header text)</li>
                        <li>Portal Header Image (image to be displayed below portal title, 1140x340px)</li>
                        <li>Welcome message (if a welcome message is set, your portal will have a section that displays this welcome message)</li>
                        <li>Restrictions message (if a restriction message is set, your portal will have a link in the bottom right that reads “Restrictions” and when clicked on, will display your restriction message)</li>
                        <li>Copyrights (if set, this text will replace the “Digital Media Center” text in the bottom left of your portal)</li>
                        <li>{"Announcements (if you've added any announcements, your portal will contain an announcement section. Visitors can see the date and time these were created)"}</li>
                    </ul>
                </SubsectionContent>
                <SubsectionContent title="Theme" id="theme">
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
        	</div>
        )
    }
}

let styles = StyleSheet.create({
    paragraph: {
        marginBottom: '0px',
    },
})

export default CustomizeContent
// end of file