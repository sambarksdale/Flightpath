import React, {Component} from 'react'
import './Cricket_input.css'

class Cricket_input extends Component {
    state = {
        value: 0,
        multiplier: 1,
    }
    userInput = ()=>{
        let index = this.getIndex(this.state.value)
        this.props.handleInput(index, this.state.multiplier, this.state.value) 
    }
    getIndex = (value)=>{
        switch(value){
            case 20:
                return 0
                break;
            case 19:
                return 1
                break;
            case 18:
                return 2
                break;
            case 17:
                return 3
                break;
            case 16:
                return 4
                break;
            case 15:
                return 5
                break;
            case 25:
                return 6
                break;

        } 
    }
    render(){
        return(
            <div className="input-container">
                <div onClick={()=>{this.setState({value: 20})}}>20</div>
                <div onClick={()=>{this.setState({value: 19})}}>19</div>
                <div onClick={()=>{this.setState({value: 18})}}>18</div>
                <div onClick={()=>{this.setState({value: 17})}}>17</div>
                <div onClick={()=>{this.setState({value: 16})}}>16</div>
                <div onClick={()=>{this.setState({value: 15})}}>15</div>
                <div onClick={()=>{this.setState({value: 25})}}>Bull</div>
                <div>0</div>
                <div>undo</div>
                <div onClick={()=>{this.setState({multiplier: 2})}}>2x</div>
                <div onClick={()=>{this.setState({multiplier: 3})}}>3x</div>
                <div onClick={this.userInput}>submit</div>
            </div>
        )
    }
}

export default Cricket_input;