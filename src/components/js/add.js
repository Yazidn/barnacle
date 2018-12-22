import React, { Component } from 'react';
import '../css/add.css';
import MoviePreview from './moviePreview';
import TitlePreviewer from './titlePreviewer';

class Add extends Component {
    constructor() {
        super();
        this.state = {
            previewIsHidden : true
        }
    }

    openHidePreview = (event) => {   
        if (this.props.title !== '') {
            this.props.connectToServer(this.props.title, event);
            this.setState({
                previewIsHidden: !this.state.previewIsHidden
            })
        } else {alert('Nothing is selected.');}
    }

    render() {
        return this.state.previewIsHidden ? (
            <div className="add-window">
                    <div className="inputs-container">
                    <input onChange={this.props.createInputOnChange} type="text" placeholder="Search for a movie, TV series, anime.."/>
                    <div className="add-buttons-container">
                    
                    <TitlePreviewer foundTitle={this.props.foundTitle}/>
                    <button title="Cancel" className="home" onClick={this.props.closeAddPage}><i className="fas fa-times"></i></button>
                    <button title="Preview before adding" id="preview-button" onClick={this.openHidePreview}><i className="fas fa-align-left"></i></button>
                    <button title="Add the card" className="create" onClick={this.props.createNewCardOnClick}><i className="fas fa-plus"></i></button>
                    </div>
                    
                </div>
            </div>
        ) : (
            <MoviePreview 
            openHidePreview={this.openHidePreview}
            title={this.props.info.Title}
            year={this.props.info.Year}
            rated={this.props.info.Rated}
            released={this.props.info.Released}
            runtime={this.props.info.Runtime}
            genre={this.props.info.Genre}
            writer={this.props.info.Writer}
            actors={this.props.info.Actors}
            plot={this.props.info.Plot}
            ratingsValue={this.props.info.imdbRating}
            poster={this.props.info.Poster}
            />
        )
    }
}

export default Add;