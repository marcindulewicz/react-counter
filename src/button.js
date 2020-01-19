import React, {Component} from 'react';
class Button extends Component {

    render() {

        return (
            <div>
                <button class="btn btn-primary">{this.props.napis1}</button>
            </div>
        )

    }
}
export default Button;