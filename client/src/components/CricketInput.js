import React, {Component} from 'react'
import './CricketInput.css'

class CricketInput extends Component {
    state = {
        multiplier: 1,
        dartCount: 0,
    }

    incramentDartCount = ()=>{
        let dartCount = this.state.dartCount += 1
        this.setState({dartCount})
    }

    userInput = (value)=>{
        if(this.state.dartCount === 3){return}
        this.incramentDartCount()
        let index = this.getIndex(value)
        this.props.state.isTurn ? this.props.p1Input(index, this.state.multiplier, value) : this.props.p2Input(index, this.state.multiplier, value)
        this.props.dartsThrown(this.state.multiplier, value, this.state.dartCount)
        this.setState({value:0,multiplier:1},()=>{this.props.takeSnapshot()});
    }

    passTurn = ()=>{
        this.props.changeTurn()
        this.setState({dartCount:0})
    }

    undo = ()=>{
        this.props.undoTurn()
        let dartCount = this.state.dartCount -= 1
        this.setState({dartCount})

    }

    getIndex = (value)=>{
        switch(value){
            case 20:
                return 0
                // break;
            case 19:
                return 1
                // break;
            case 18:
                return 2
                // break;
            case 17:
                return 3
                // break;
            case 16:
                return 4
                // break;
            case 15:
                return 5
                // break;
            case 25:
                return 6
                // break;
        } 
    }
    render(){
        return(
            <div className="input-container">
                <div onClick={()=>{this.userInput(20)}}>20</div>
                <div onClick={()=>{this.userInput(19)}}>19</div>
                <div onClick={()=>{this.userInput(18)}}>18</div>
                <div onClick={()=>{this.userInput(17)}}>17</div>
                <div onClick={()=>{this.userInput(16)}}>16</div>
                <div onClick={()=>{this.userInput(15)}}>15</div>
                <div onClick={()=>{this.userInput(25)}}>Bull</div>
                <div>0</div>
                <div onClick={this.undo}>undo</div>
                <div onClick={()=>{this.setState({multiplier: 2})}}>2x</div>
                <div onClick={()=>{this.setState({multiplier: 3})}}>3x</div>
                <div onClick={this.passTurn}>pass turn</div>
            </div>
        )
    }
}

export default CricketInput;