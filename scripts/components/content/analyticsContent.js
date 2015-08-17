// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'
import SubsectionContent from 'components/subsectionContent'

class AnalyticsContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
    }
    // render the component
    render() {
        return (
            <div>
                <SubsectionContent title="Viewing Analytics" id="analytics">
                    <p style={styles.paragraph}>To view Analytics for your assets, click Analytics, located in the left sidebar. The Analytics module consists of:</p>
                    <ul>
                        <li>Events</li>
                        <li>Downloads</li>
                        <li>Graphs</li>
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

export default AnalyticsContent
// end of file