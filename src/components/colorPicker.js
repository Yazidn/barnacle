import React, { Component } from 'react';
import './colorPicker.css';

class ColorPicker extends Component {

    renderColorPicker() {
        let colors = ['#ff4141', '#68994f', '#3a89a8', '#ffcc42', '#856fdb', '#ea64da', '#ed8a63', '#f79a2a', '#9bf27b'];
        let colorChoices = [];
        for (let i = 0; i < colors.length; i++) {
            colorChoices.push(
                <div key={i} onClick={this.props.setColor} className="color-div" style={{
                    backgroundColor: colors[i],
                }}></div>
            );
        }

        return colorChoices;
    }



    render() {
        return (
            <div className="color-picker">
                {this.renderColorPicker()}
            </div>
        )
    }
}

export default ColorPicker;