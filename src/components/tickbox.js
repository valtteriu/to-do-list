import React from 'react';

class TickBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {status: null};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({status: event.target.value});
        console.log(event);
    }

    render() {
        return (
            <label>
                <input type="checkbox" name="Testiboxi" value={this.state.value} onChange={this.handleChange}></input>
                {this.state.status}
            </label>
        )
    }
}

export default TickBox;