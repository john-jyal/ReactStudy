import React, { Component, PropTypes } from 'react';
import "./ValidationSample.css"

class RefSapmle extends Component {
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }

    render() {
        return(
            <div>
                <input ref={this.input}/>
            </div>
        );
    }
}

export default RefSapmle;