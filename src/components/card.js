import React, { Component } from 'react';
import Editor from './editor';
import './card.css';

class Card extends Component {
    render() {
        return(
            <div style={{
                backgroundImage:`url("${this.props.poster}")`,
                backgroundSize:'cover', backgroundColor: this.props.backColor}}  className="card">
                <div className="data-container">
                    <p className="card-title">{this.props.title}</p>
                    {/* <p className="watch-next" >Next is</p> */}
                    <p className="card-season">Season <span>{this.props.currentSeason}</span></p>
                    <div className="card-next-episode-number-container">
                    <p className="card-next-episode-number" title="Set the episode manually" onClick={this.props.customepnmbr}>{this.props.nextEpisodeNumber}</p>    
                    <input onChange={this.props.customEpInputOnChange} type="text" onKeyDown={this.props.confirmEpEdit}/>
                    </div>
                    <button className="card-delete-button" onClick={this.props.cardDeleteOnClick}></button>

                    {/* <button title="Edit Card Preferences" className="card-edit" onClick={this.props.showEditor}><i className="fas fa-cookie-bite"></i></button> */}
                    <Editor 
                      incrementEpOnClick={this.props.incrementEpOnClick}
                      decrementEpOnClick={this.props.decrementEpOnClick}
                      incrementSOnClick={this.props.incrementSOnClick}
                      decrementSOnClick={this.props.decrementSOnClick}
                    />
                </div>

                {/* <div className="card-buttons-container">
                <button className="card-increment-episode-button" onClick={this.props.incrementEpOnClick}><i class="fas fa-plus"></i></button>
                <button className="card-increment-episode-button" onClick={this.props.incrementEpOnClick}><i class="fas fa-minus"></i></button>
                <button className="card-increment-episode-button" onClick={this.props.incrementEpOnClick}><i class="fas fa-folder-plus"></i></button>
                </div> */}
            </div>
        );
    }
}

export default Card;