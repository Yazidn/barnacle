import React, { Component } from 'react';
import Editor from './editor';
import '../css/card.css';

class Card extends Component {
    render() {
        return(
            <div style={{
                backgroundImage:`url("${this.props.poster}")`,
                backgroundSize:'cover', backgroundColor: this.props.backColor}}  className="card">
                <div className="data-container">
                    <p className="card-title">{this.props.title}</p>
                    <p className="card-season">Season <span>{this.props.currentSeason}</span></p>
                    <div className="card-next-episode-number-container">
                    <p className="card-next-episode-number" title="Set the episode manually" onClick={this.props.customepnmbr}>{this.props.nextEpisodeNumber}</p>    
                    <input onChange={this.props.customEpInputOnChange} type="text" onKeyDown={this.props.confirmEpEdit}/>
                    </div>
                    <button className="card-delete-button" onClick={this.props.cardDeleteOnClick}></button>
                    <Editor 
                      incrementEpOnClick={this.props.incrementEpOnClick}
                      decrementEpOnClick={this.props.decrementEpOnClick}
                      incrementSOnClick={this.props.incrementSOnClick}
                      decrementSOnClick={this.props.decrementSOnClick}
                    />
                </div>
            </div>
        );
    }
}

export default Card;