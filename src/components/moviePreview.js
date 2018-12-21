import React, { Component } from 'react';
import './moviePreview.css';

class MoviePreview extends Component {
    render() {
        return (
            <div className="movie-preview-container">
                <div className="text-info">
                <button id="hide-preview" onClick={this.props.openHidePreview}><i className="fas fa-times"></i></button>
                    <p>Title: <span>{this.props.title}</span></p>
                    <p>Year: <span>{this.props.year}</span></p>
                    <p>Rated: <span>{this.props.rated}</span></p>
                    <p>Released: <span>{this.props.released}</span></p>
                    <p>Duration: <span>{this.props.runtime}</span></p>
                    <p>Genre: <span>{this.props.genre}</span></p>
                    <p>Writer: <span>{this.props.writer}</span></p>
                    <p>Cast: <span>{this.props.actors}</span></p>
                    <p>Plot: <span>{this.props.plot}</span></p>
                    <p>Ratings: <span>{this.props.ratingsValue}</span></p>
                    
                </div>
                <div className="poster-info">
                    <img src={this.props.poster} alt="poster"/>
                </div>
            </div>
        )
    }
}

export default MoviePreview;