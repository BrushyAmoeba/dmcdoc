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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dui at ipsum rhoncus tempor ac ac magna. Proin viverra, nisl a malesuada efficitur, sem quam posuere purus, nec feugiat nunc lorem eu ante. Pellentesque hendrerit pellentesque auctor. Nam in laoreet quam. Sed tempor neque lectus, sed rhoncus eros rhoncus eu. Maecenas cursus porta congue. Phasellus euismod ante ligula. Vestibulum tincidunt ut lorem nec pulvinar. Etiam mattis tortor eu eros molestie tincidunt. Donec vitae nisi turpis. Donec vehicula nunc nec est elementum volutpat. Aenean tristique pellentesque porttitor. Integer vulputate rhoncus mauris, in scelerisque leo scelerisque ac. Proin euismod ac libero id vestibulum. Cras sit amet porttitor orci, ut feugiat mi. Duis fermentum felis vel hendrerit tempor.</p>
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