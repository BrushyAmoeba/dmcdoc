// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'
import SubsectionContent from 'components/subsectionContent'

class IntroductionContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
    }
    // render the component
    render() {
        return (
            <div>
                <SubsectionContent title="Signing Up" id="signingup">
                    <p>To sign up, navigate your browser to <a target="_blank" href="http://digitalmediacenter.com">Digital Media Center</a> and click Sign up.</p>
                    <p>Enter your full name, email, desired username, and desired password.</p>
                    <p>After signing up, you will receive an email with confirmation instructions. You must confirm your account before you can sign in.</p>
                    <p>{"If you're having trouble finding the confirmation email, check your spam folder. The subject of the email is 'Confirmation instructions.'"}</p>
                </SubsectionContent>
                <SubsectionContent title="The Interface" id="interface">
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
                <SubsectionContent title="Editing Profile Information" id="profile">
                    <p>If you ever wish to change your email or password, simply click My Profile at the top of the dashboard, edit your information, and click save changes.</p>
                    <p>This is also where you can generate an API key; this will be discussed in more detail later.</p>
                </SubsectionContent>
        	</div>
        )
    }
}

let styles = StyleSheet.create({
    paragraph: {
        marginBottom: 0,
    }
})

export default IntroductionContent
// end of file