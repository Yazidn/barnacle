import React, { Component } from 'react';
import './Controls.css';
// import logo from './logo.png';

class Controls extends Component {
    render() {
        return (
            <div className="control-bar">
                {/* <img id="logo" src={logo} alt="logo"/> */}
                <button title="Add a new card" className="create-button" onClick={this.props.addOnClick}><i className="fas fa-sticky-note"></i></button>
                <button title="Remove a card" className="edit-button" onClick={this.props.editToggle}><i className="fas fa-trash-alt"></i></button>
                <button title="Backup the list cards" className="backup-button" onClick={this.props.backup}><i className="fas fa-download"></i></button>
                <button title="Restore a list of cards" className="restore-button" onClick={this.props.restore}><i className="fas fa-upload"></i></button>
                <input id="importFile" type="file" onChange={this.props.fileInputOnChange}/>
            </div>
        )
    }
}

export default Controls;