import React, { Component } from 'react';
import './titlePreviewer.css';

class TitlePreviewer extends Component {
    render() {
        return (
        <div className="title-previewer">
            <p>Selected: <span>{this.props.foundTitle || 'None'}</span></p>
        </div>
        )
    }
}

export default TitlePreviewer;