import React, { Component } from 'react';
import '../css/editor.css';

class Editor extends Component {
    render() {
        return (
            <div className="editor">
                <button title="Add an episode"  onClick={this.props.incrementEpOnClick}><i className="icon-plus-episode"></i></button>
                <button title="Remove an episode"  onClick={this.props.decrementEpOnClick}><i className="icon-minus-episode"></i></button>
                <button title="Add a season"  onClick={this.props.incrementSOnClick}><i className="icon-plus-season"></i></button>
                <button title="Remove a season"  onClick={this.props.decrementSOnClick}><i className="icon-minus-season"></i></button>
            </div>
        )
    }
}

export default Editor;