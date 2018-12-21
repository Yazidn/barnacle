import React, { Component } from 'react';
import './editor.css';

class Editor extends Component {
    render() {
        return (
            <div className="editor">

                {/* <button title="Increment Episode"  onClick={this.props.incrementEpOnClick}><img alt="increment-episode" src={require('/home/yazid/Desktop/episodi/src/icons/plus-episode.png')}/></button>
                <button title="Decrement Episode"  onClick={this.props.incrementEpOnClick}><img alt="decrement-episode" src={require('/home/yazid/Desktop/episodi/src/icons/minus-episode.png')}/></button>

                

                <button title="Increment Season"  onClick={this.props.incrementEpOnClick}><img alt="increment-season" src={require('/home/yazid/Desktop/episodi/src/icons/plus-season.png')}/></button>
                <button title="Decrement Season"  onClick={this.props.incrementEpOnClick}><img alt="increment-season" src={require('/home/yazid/Desktop/episodi/src/icons/minus-season.png')}/></button> */}

                <button title="Add an episode"  onClick={this.props.incrementEpOnClick}><i className="icon-plus-episode"></i></button>
                <button title="Remove an episode"  onClick={this.props.decrementEpOnClick}><i className="icon-minus-episode"></i></button>

                

                <button title="Add a season"  onClick={this.props.incrementSOnClick}><i className="icon-plus-season"></i></button>
                <button title="Remove a season"  onClick={this.props.decrementSOnClick}><i className="icon-minus-season"></i></button>

            </div>
        )
    }
}

export default Editor;