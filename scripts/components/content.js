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
            currentChapter: "introduction",
            onFirstSlide: true,
            onLastSlide: false,
        }
        this.calculateBreakpoints = this.calculateBreakpoints.bind(this)
    }
    getSections() {
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
            let content = section.content
            return (
                <SectionContent title={section.title} id={section.ref} ref={section.ref} key={section.ref}>
                    {content}
                </SectionContent>
            )
        })
        return(sectionsRender)
    }
    getChapters() {
        let chapters=[
            {title: "1. Introduction", ref: "introduction", href: "#introduction", subChapters: [
                {title: "Signing Up", href:"#signingup"}, 
                {title: "The Interface", href: "#interface"},
                {title: "Editing Profile", href:"#profile"}
            ]}, 
            {title: "2. Galleries", ref: "galleries", href: "#galleries", subChapters: [
                {title: "Creating a Gallery", href:"#creategal"}, 
                {title: "Previewing a Gallery", href: "#previewgal"},
                {title: "Sorting Galleries", href:"#sortgal"}
            ]}, 
            {title: "3. Folders", ref: "folders", href: "#folders", subChapters: [
                {title: "Adding Folders", href: "#addfolders"},
                {title: "Sorting Folders", href:"#sortfolders"}
            ]}, 
            {title: "4. Assets", ref: "assets", href: "#assets", subChapters: [
                {title: "Adding Assets", href: "#addassets"},
                {title: "Batch Upload", href:"#batchupload"},
                {title: "Asset Options", href:"#assetoptions"}
            ]}, 
            {title: "5. Analytics", ref: "analytics", href: "#analytics", subChapters: [
                {title: "Viewing Analytics", href: "#analytics"},
            ]},
            {title: "6. Customize", ref: "customize", href: "#customize", subChapters: [
                {title: "Page Settings", href: "#pagesettings"},
                {title: "Portal", href: "#portal"},
                {title: "Theme", href: "#theme"}
            ]}, 
            {title: "7. Members", ref: "members", href: "#members", subChapters: [
                {title: "Adding Members", href: "#addmembers"},
                {title: "Managing Roles", href: "#manageroles"}
            ]},   
            {title: "8. Gallery Settings", ref: "gallerysettings", href: "#gallerysettings", subChapters: [
                {title: "Editing Settings", href:"#gallerysettings"}
            ]}, 
        ]
        let chaptersRender = _.map(chapters, (chapter)=>{
            let subChapters = chapter.subChapters
            let i = 1
            let subChaptersRender = _.map(subChapters, (subChapter)=>{
                let key = `${chapter.ref}-${i++}`
                return (
                    <SubChapter href={subChapter.href} title={subChapter.title} key={key} />
                )
            })
            return (
                <Chapter href={chapter.href} showChapters={this.isTimelineChapterDisplayed(chapter.ref)} 
                            onClick={this.showContent.bind(this,chapter.ref)} title={chapter.title} key={chapter.ref}>
                    {subChaptersRender}
                </Chapter>
            )
        })
        return(chaptersRender)
    }
    showContent(contentRef) {
        this.setState({currentChapter: contentRef})
    }
    getRelevantSection(breakpoints) {
        let currPosition = window.pageYOffset
        let currentChapter = _.filter(breakpoints, (breakpoint)=>{
            return (currPosition>=breakpoint.lowerBound && currPosition<=breakpoint.upperBound)
        })
        if(currentChapter.length){
            this.setState({ currentChapter: currentChapter[0].chapterName})
        }
        if (currentChapter[0].chapterName=="gallerysettings"){
            this.setState({onLastSlide: true})
        }
        else{
            this.setState({onLastSlide: false})
        }
        if (currentChapter[0].chapterName=="introduction"){
            this.setState({onFirstSlide: true})
        }
        else{
            this.setState({onFirstSlide: false})
        }
    }
    calculateBreakpoints(elements) {
        let sum=0
        let scaleFactor=.5
        let firstRun = true
        let breakpoints = _.map(elements, (section)=>{
            let height = React.findDOMNode(this.refs[section.ref]).clientHeight
            let lowerBound = sum
            let upperBound = lowerBound+height

            //edge cases
            if (firstRun){upperBound = upperBound*scaleFactor; firstRun=false}
            if (section.ref=="analytics"){upperBound=lowerBound+height*2.2}
            if (section.ref=="customize"){upperBound=lowerBound+height*.7}
            if (section.ref=="members"){upperBound=lowerBound+height*1.2}
            sum = upperBound
            return {
                lowerBound: lowerBound,
                upperBound: upperBound,
                chapterName: section.ref,
            }
        })
        this.getRelevantSection(breakpoints)
        return breakpoints     
    }
    componentDidMount() {
        let breakpoints = this.calculateBreakpoints(this.refs.contentContainer.props.children)
        window.addEventListener("scroll", ()=>{
            this.getRelevantSection(breakpoints)
        });
    }
    isTimelineChapterDisplayed(chapterTitle) {
        return chapterTitle===this.state.currentChapter
    }
    getNextSection() {
        let chapters=["introduction", "galleries", "folders", "assets", "analytics", "customize", "members", "gallerysettings"]
        let i =chapters.indexOf(this.state.currentChapter)
        return (chapters[++i])
    }
    getPrevSection() {
        let chapters=["introduction", "galleries", "folders", "assets", "analytics", "customize", "members", "gallerysettings"]
        let i =chapters.indexOf(this.state.currentChapter)
        return (chapters[--i])
    }
    showNextSection() {
        let chapter=this.getNextSection()
        if (chapter!=null){
            React.findDOMNode(this.refs[chapter]).scrollIntoView()
            this.setState({currentChapter: chapter})           
        }
    }
    showPrevSection() {
        let chapter=this.getPrevSection()
        if (chapter!=null){
            React.findDOMNode(this.refs[chapter]).scrollIntoView()
            this.setState({currentChapter: chapter})           
        }
    }
    nextButton() {
        return(
            <div style={styles.nextSlide} onClick={this.showNextSection.bind(this)}>
                <div style={styles.niceGreen}> 
                    <i className="icon-down-open-big" style={styles.downIcon}></i>
                </div>
            </div>
        )
    }
    prevButton() {
        return(
            <div style={styles.prevSlide} onClick={this.showPrevSection.bind(this)}>
                <div style={styles.niceGreen}> 
                    <i className="icon-up-open-big" style={styles.upIcon}></i>
                </div>
            </div>
        )
    }
    // render the component
    render() {
        let chapters = this.getChapters()
        let sections = this.getSections()
        return (
            <div>
                <TableOfContents>
                    {chapters}
                </TableOfContents>
                <div className="col-md-9" id="contentContainer" ref="contentContainer">
                    {sections}
                </div>
                <div className="col-md-1" style={styles.container}>
                    {(!this.state.onFirstSlide) ? this.prevButton() : null}
                    {(!this.state.onLastSlide) ? this.nextButton() : null}
                </div>
        	</div>
        )
    }
}

let styles = StyleSheet.create({
    nextSlide: {
        position: 'fixed',
        width: 80,
        height: 80,
        bottom: 0,
        backgroundColor: 'rgba(245, 245, 245, 0.85)',
        marginLeft: '.9%',
        marginBottom: 15,
    },
    container: {
        width: '10%',
    },
    niceGreen: {
        backgroundColor: 'rgba(51, 162, 3, .55)',
        width: 80,
        height: 80,
    },
    prevSlide: {
        position: 'fixed',
        width: 80,
        height: 80,
        bottom: 0,
        backgroundColor: 'rgba(245, 245, 245, 0.85)',
        marginLeft: '.9%',
        top: 15,
    },
    downIcon: {
        position: 'fixed',
        bottom: 25,
        fontSize: 55,
    }, 
    upIcon: {
        position: 'fixed',
        top: 25,
        fontSize: 55,
    }
})

export default Content
// end of file