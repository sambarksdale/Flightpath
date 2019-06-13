import React, {Component} from 'react'
import {cricketGameDetail} from '../util'
import CricketBoard from './CricketBoard'
import CricketInput from './CricketInput'

class Cricket extends Component {
    state = {
        p1:[{id:20,marks:0,score:0},{id:19,marks:0,score:0},{id:18,marks:0,score:0},{id:17,marks:0,score:0},{id:16,marks:0,score:0},{id:15,marks:0,score:0},{id:25,marks:0,score:0}],
        p2:[{id:20,marks:0,score:0},{id:19,marks:0,score:0},{id:18,marks:0,score:0},{id:17,marks:0,score:0},{id:16,marks:0,score:0},{id:15,marks:0,score:0},{id:25,marks:0,score:0}],
        dart1: "",
        dart2: "",
        dart3: "",
        dartCout: 0,
        isTurn: true,
    }

    componentDidMount(){
        this.takeSnapshot()
        this.state.isTurn ? document.getElementById("p1-name-plate").style.background = "red" :
        document.getElementById("p2-name-plate").style.background = "red"
    }

    componentDidUpdate(){
        if (this.state.isTurn === true){
            document.getElementById("p1-name-plate").style.background = "red"
            document.getElementById("p2-name-plate").style.background = "white"
        } else{
            document.getElementById("p1-name-plate").style.background = "white"
            document.getElementById("p2-name-plate").style.background = "red"
        }
    }

    p1Input = (index, multiplier, value)=>{
        let array = [...this.state.p1]
        for(let i = multiplier; i > 0; i--){
            if(array[index].marks < 3){
                array[index].marks = array[index].marks += 1
                } else if(array[index].marks === 3 && this.state.p2[index].marks !== 3){
                    array[index].score = array[index].score += value
                    }
        }
        this.setState({p1:array}, ()=>{console.log(this.state)})
    }

    p2Input = (index, multiplier, value)=>{
        let array = [...this.state.p2]
        for(let i = multiplier; i > 0; i--){
            if(array[index].marks < 3){
                array[index].marks = array[index].marks += 1
                } else if(array[index].marks === 3 && this.state.p1[index].marks !== 3){
                    array[index].score = array[index].score += value
                    }
        }
        this.setState({p2:array},()=>{console.log(this.state)})
    }

    dartsThrown = (multiplier, value, dartCount)=>{
        let dart = ""
        if(multiplier === 1){dart = value}else{dart = `${multiplier}x ${value}`}
        switch (dartCount) {
            case 1:
                this.setState({dart1: dart})
                break;
            case 2:
                this.setState({dart2: dart})
                break;
            case 3:
                this.setState({dart3: dart})
                break;
        }
    }

    changeTurn = ()=>{
        let notIsTurn = !this.state.isTurn
        this.setState({isTurn:notIsTurn, dart1: "", dart2: "", dart3: ""},)
    }

    takeSnapshot = ()=>{
        let snapshot = JSON.stringify(this.state)
        this.props.updateTurnLog(snapshot)
    }

    undoTurn = ()=>{
        let previousTurn = this.props.state.turnLog
        previousTurn.pop()
        let obj = JSON.parse(previousTurn[previousTurn.length-1])
        this.setState({p1:obj.p1, p2:obj.p2, dart1:obj.dart1, dart2:obj.dart2, dart3:obj.dart3, isTurn:obj.isTurn },)

    }


    exportResults = ()=>{
        cricketGameDetail(this.state.p1)
    }

    render(){
        
        return(
            <div>
                <CricketBoard state={this.state}/>
                <CricketInput p1Input={this.p1Input} p2Input={this.p2Input} undoTurn={this.undoTurn} changeTurn={this.changeTurn} takeSnapshot={this.takeSnapshot} dartsThrown={this.dartsThrown} state={this.state}/>
                <button onClick={this.exportResults}>try</button>
            </div>
        )
    }
}

export default Cricket;