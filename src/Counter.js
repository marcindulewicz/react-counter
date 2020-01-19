import React, { Component } from 'react';
import './Counter.css'
import { Card } from 'react-bootstrap';
import Button3 from './button/Button'


class Counter extends Component {
    constructor(props) {
        super(props);
        let number = 0;
        if (isNaN(this.props.initValue) == false) {
            number = parseInt(this.props.initValue)
        }
        else if (this.props.initValue == undefined) {
            number = number
        }
        else {
            alert('Podaj liczbe w propsie a nie mi takie farmazony wypisujesz')
        }
        this.state = {
            counterView: number,
            counterViewInitiale: number,
            krok: 1
        }
    }
    resetCounter = () => {

        this.setState({
            counterView: 0
        })
    }
    addCounter = () => {

        if (this.state.counterView == 0) {
            this.setState({
                counterView: this.state.counterView + this.state.krok,
                counterInitiale: this.state.counterView + this.state.krok
            })
        }
        else {
            this.setState({
                counterView: this.state.counterView + this.state.krok,
                counterInitiale: this.state.counterInitiale + this.state.krok
            })
        }

    }
    comeBack = () => {
        this.setState({
            counterView: this.state.counterInitiale

        })
    }

    resetToProps = () =>  {
        this.setState({
            counterView: this.state.counterViewInitiale

        })
    }
    resetProps = () =>  {
        this.setState({
            krok: parseInt(document.getElementById('inputer').value)
            

        })
    }
  
    


    render() {

        return (
            <div className='main_div'>
                <Card>
                    <Card.Body ><span className="bolded">Licznik:</span><span className="licznik_liczba"> {this.state.counterView}</span>
                        <Button3   resetToPropsProps = {this.resetToProps}comeBackProps={this.comeBack} addCounterProps={this.addCounter} resetCounteProps={this.resetCounter} />
                    <br></br>
                    <input id='inputer' type='number' onChange={this.resetProps}></input>
                    </Card.Body>
                </Card>
                

            </div>
        )
    }
}
export default Counter;


/*
            <div style={{height: this.props.height }}>
                <Card>
                     <Card.Body  className={this.props.classe}>{this.props.name + " wartość początkowa licznika: " +(this.state.counterView +1)}
                        <Button3/>

                     </Card.Body>
                </Card>

            </div>




*/