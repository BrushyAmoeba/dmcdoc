// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'
import SubsectionContent from 'components/subsectionContent'

class MembersContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
    }
    // render the component
    render() {
        return (
            <div>
                <SubsectionContent title="Adding Members" id="addmembers">
                    <p>The Members module allows you to create accounts for your team and subsequently set permission for these accounts.</p>
                    <p>{"Click Add Member at the top left of the main content area. Enter the information for the team member in the resulting page."}</p>
                    <p>In addition to setting registration information, the Add Member page also allows you to set permissions for the member you are adding. Click on "Account Permissions" and check the boxes for each permission you want the new member to have. You can also set permissions for individual galleries and folders.</p>
                    <p>{"After you've finished entering registration information and setting permissions for the new team member, click Create User. Confirmation instructions will be sent to the email address of the new team member. This user will be unable to login to their account until they confirm via the email."}</p>
                    <p>Roles allow us to create permission "presets" that we can use when adding members. Roles are useful when you are going to be adding many members that will all have the same permissions. To edit roles, click Manage Roles</p>
                </SubsectionContent>
                <SubsectionContent title="Managing Roles" id="manageroles"></SubsectionContent>
        	</div>
        )
    }
}

let styles = StyleSheet.create({
    paragraph: {
        marginBottom: '0px',
    },
})

export default MembersContent
// end of file