import React from 'react';

class Accordion extends React.Component {
    // Need to set default prop for sections?
    
    state = {
        currentSectionIndex: 0
    };
    
    handleButtonClick(index) {
        this.setState({currentSectionIndex: index})
    } 
    
    renderSections() {
        const currentSection = this.props.sections[this.state.currentSectionIndex]
        
        return this.props.sections.map((section, index) => (
            <li>
                <button key={index} onClick={this.handleButtonClick(index)}>{section.title}</button>
            </li>
        ))
    }
    
    render() {
        return (
            <ul>
                {this.renderSections()}
            </ul>
        );
    }
}

export default Accordion;