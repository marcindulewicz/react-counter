import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Button.css';
/*

class Button3 extends Component {
    render() {
        return (
            <div>
                <Button variant="primary" className='marginy'>Add</Button>
                <Button variant="warning" className='marginy'>Resetuj</Button>
                <Button variant="danger" className='marginy' onClick = {() =>props.resetCounteProps}>Resetuj do zera</Button>
            </div>
        )
    }
}
*/

const Button3 = (props) => {
    return (
        <div>
            <Button variant="primary" className='marginy' onClick = {props.addCounterProps}>Dodaj +1</Button>
            <Button variant="warning" className='marginy' onClick = {props.comeBackProps}>Resetuj do poprzedniej</Button>
            <Button variant="danger" className='marginy' onClick = {props.resetCounteProps}>Resetuj do zera</Button>
            <Button variant="info" className='marginy' onClick = {props.resetToPropsProps}>Resetuj do propsa</Button>
        </div>
    )

}

export default Button3;