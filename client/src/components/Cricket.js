import React, {Component} from 'react'
import {cricketGameDetail, newGame} from '../util'
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
        result: 1
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
        this.checkWinCondition()
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

    checkWinCondition = ()=>{
        let p1Marks = this.getMarks(this.state.p1)
        let p1Score = this.getScore(this.state.p1)
        let p2Marks = this.getMarks(this.state.p2)
        let p2Score = this.getScore(this.state.p2)

        if(p1Marks === 21 && p1Score >= p2Score){
            alert("p1 wins")
            this.setState({result:this.props.state.player1.p1_id})
        }
        if(p2Marks === 21 && p2Score >= p1Score){
            alert("p2 Wins")
            this.setState({result:this.props.state.player2.p2_id})
        }
    }

    getMarks = (arr)=>{
        const reducer = (accumulator, currentvalue)=> accumulator + currentvalue
        let newArr = []
        arr.forEach(el=>{newArr.push(el.marks)})
        let marks = newArr.reduce(reducer)
        return marks
    }

    getScore = (arr)=>{
        const reducer = (accumulator, currentvalue)=> accumulator + currentvalue
        let newArr = []
        arr.forEach(el=>{newArr.push(el.score)})
        let score = newArr.reduce(reducer)
        return score
    }

    createGameInstance = ()=>{
            let newGame={
                game_type: "This is a test",
                p1_id: this.props.state.player1.p1_id,
                p2_id: this.props.state.player2.p2_id,
                result: this.state.result
            }
            return newGame
    }

    exportResults = ()=>{
        if(this.props.state.player1.loggedIn || this.props.state.player2.loggedIn){
            let game = this.createGameInstance()
         newGame(game)
            .then(game_id => {
                if(this.props.state.player1.loggedIn){
                    let gameData = {
                        "id":"",
                        "user_id": this.props.state.player1.p1_id,
                        "game_id": game_id[0].id
                    }
                    let copy = JSON.stringify(this.state.p1)
                    let obj = JSON.parse(copy)
                    obj.unshift(gameData)
                    console.log(obj)
                    cricketGameDetail(obj)
                }
            })
        }
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