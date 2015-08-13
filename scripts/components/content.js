// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'
import TableOfContents from 'components/tableOfContents'
import Chapter from 'components/chapter'
import SubChapter from 'components/subChapter'
import SectionContent from 'components/sectionContent'
import SubsectionContent from 'components/subsectionContent'

//static section content imports
import IntroductionContent from 'components/content/introductionContent'
import GalleriesContent from 'components/content/galleriesContent'
import FoldersContent from 'components/content/foldersContent'
import AssetsContent from 'components/content/assetsContent'
import AnalyticsContent from 'components/content/analyticsContent'
import CustomizeContent from 'components/content/customizeContent'
import MembersContent from 'components/content/membersContent'
import GallerySettingsContent from 'components/content/gallerySettingsContent'

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentChapter: "introduction"
        }
        this.calculateBreakpoints = this.calculateBreakpoints.bind(this)
    }
    getContent() {
        let sections=[
            {title: "Introduction", ref: "introduction", content: <IntroductionContent />}, 
            {title: "Galleries", ref: "galleries", content: <GalleriesContent />},
            {title: "Folders", ref: "folders", content: <FoldersContent />},
            {title: "Assets", ref: "assets", content: <AssetsContent />},
            {title: "Analytics", ref: "analytics", content: <AnalyticsContent />},
            {title: "Customize", ref: "customize", content: <CustomizeContent />},
            {title: "Members", ref: "members", content: <MembersContent />},
            {title: "Gallery Settings", ref: "gallerysettings", content: <GallerySettingsContent />},
        ]
        let sectionsRender = _.map(sections, (section)=>{
            console.log(section)
            let content = section.content
            console.log(content)
            return (
                <SectionContent title={section.title} id={section.ref} ref={section.ref} key={section.ref}>
                    {content}
                </SectionContent>
            )
        })
        return(sectionsRender)
    }
   showContent(contentRef) {
        this.setState({currentChapter: contentRef})
        this.refs[contentRef].show()
    }
    getRelevantSection(breakpoints) {
        let currPosition = window.pageYOffset
        let currentChapter = _.filter(breakpoints, (breakpoint)=>{
            return (currPosition>=breakpoint.lowerBound && currPosition<=breakpoint.upperBound)
        })
        if(currentChapter.length){
            this.setState({ currentChapter: currentChapter[0].chapterName})
        }       
    }
    calculateBreakpoints(elements) {
        let sum=0
        let scaleFactor=.5
        let firstRun = true
        let breakpoints = _.map(elements, (section)=>{
            console.log(section)
            let height = React.findDOMNode(this.refs[section.ref]).clientHeight
            let lowerBound = sum
            let upperBound = lowerBound+height
            if (section.ref=="members"){upperBound=lowerBound+height*.7}
            if (firstRun){upperBound = upperBound*scaleFactor; firstRun=false}
            console.log(lowerBound, upperBound)
            sum = upperBound
            return {
                lowerBound: lowerBound,
                upperBound: upperBound,
                chapterName: section.ref,
            }
        })
        this.getRelevantSection(breakpoints)
        window.addEventListener("scroll", (event)=>{
            console.log(window.pageYOffset)
            this.getRelevantSection(breakpoints)
        })      
    }
    componentDidMount() {
        this.calculateBreakpoints(this.refs.contentContainer.props.children)
    }
    isTimelineChapterDisplayed(chapterTitle) {
        return chapterTitle===this.state.currentChapter
    }
    // render the component
    render() {
        let elements = this.getContent()
        console.log(elements)
        return (
            <div>
                <TableOfContents>
                    <Chapter href="#introduction" showChapters={this.isTimelineChapterDisplayed("introduction")} 
                                onClick={this.showContent.bind(this,"introduction")} title="1. Introduction">
                        <SubChapter href="#signingup" title="Signing Up" />
                        <SubChapter href="#interface" title="The Interface" />
                        <SubChapter href="#profile" title="Editing Profile" />
                    </Chapter>
                    <Chapter href="#galleries" showChapters={this.isTimelineChapterDisplayed("galleries")} 
                                onClick={this.showContent.bind(this,"galleries")} title="2. Galleries">
                        <SubChapter href="#creategal" title="Creating a Gallery" />
                        <SubChapter href="#previewgal" title="Previewing a Gallery" />
                        <SubChapter href="#sortgal" title="Sorting Galleries" />
                    </Chapter>
                    <Chapter href="#folders" showChapters={this.isTimelineChapterDisplayed("folders")} 
                                onClick={this.showContent.bind(this,"folders")} title="3. Folders">
                        <SubChapter href="#creategal" title="Creating a Gallery" />
                        <SubChapter href="#previewgal" title="Previewing a Gallery" />
                        <SubChapter href="#sortgal" title="Sorting Galleries" />
                    </Chapter>
                    <Chapter href="#assets" showChapters={this.isTimelineChapterDisplayed("assets")} 
                                onClick={this.showContent.bind(this,"assets")} title="4. Assets">
                        <SubChapter href="#creategal" title="Creating a Gallery" />
                        <SubChapter href="#previewgal" title="Previewing a Gallery" />
                        <SubChapter href="#sortgal" title="Sorting Galleries" />
                    </Chapter>                              
                    <Chapter href="#analytics" showChapters={this.isTimelineChapterDisplayed("analytics")} 
                                onClick={this.showContent.bind(this,"analytics")} title="5. Analytics" >
                        <SubChapter href="#creategal" title="Creating a Gallery" />
                        <SubChapter href="#previewgal" title="Previewing a Gallery" />
                        <SubChapter href="#sortgal" title="Sorting Galleries" />
                    </Chapter>
                    <Chapter href="#customize" showChapters={this.isTimelineChapterDisplayed("customize")} 
                                onClick={this.showContent.bind(this,"customize")} title="6. Customize" >
                        <SubChapter href="#creategal" title="Creating a Gallery" />
                        <SubChapter href="#previewgal" title="Previewing a Gallery" />
                        <SubChapter href="#sortgal" title="Sorting Galleries" />
                    </Chapter>                              
                    <Chapter href="#members" showChapters={this.isTimelineChapterDisplayed("members")} 
                                onClick={this.showContent.bind(this,"members")} title="7. Members" >
                        <SubChapter href="#creategal" title="Creating a Gallery" />
                        <SubChapter href="#previewgal" title="Previewing a Gallery" />
                        <SubChapter href="#sortgal" title="Sorting Galleries" />
                    </Chapter>                              
                    <Chapter href="#gallerysettings" showChapters={this.isTimelineChapterDisplayed("gallerysettings")} 
                                onClick={this.showContent.bind(this,"gallerysettings")} title="8. Gallery Settings" >
                        <SubChapter href="#creategal" title="Creating a Gallery" />
                        <SubChapter href="#previewgal" title="Previewing a Gallery" />
                        <SubChapter href="#sortgal" title="Sorting Galleries" />
                    </Chapter>                              
                </TableOfContents>
                <div className="col-md-9" id="contentContainer" ref="contentContainer">
                    {elements}
                </div>
        	</div>
        )
    }
}

let styles = StyleSheet.create({

})

export default Content
// end of file