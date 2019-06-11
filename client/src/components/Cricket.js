import React, {Component} from 'react'
import {cricketGameDetail} from '../util'
import CricketBoard from './CricketBoard'
import CricketInput from './CricketInput'

class Cricket extends Component {
    state = {
        p1:[{id:20,marks:0,score:0},{id:19,marks:0,score:0},{id:18,marks:0,score:0},{id:17,marks:0,score:0},{id:16,marks:0,score:0},{id:15,marks:0,score:0},{id:25,marks:0,score:0}],
        p2:[{id:20,marks:1,score:20},{id:19,marks:3,score:57},{id:18,marks:3,score:36},{id:17,marks:3,score:0},{id:16,marks:3,score:48},{id:15,marks:3,score:0},{id:25,marks:3,score:0}],
        dartCount: 0,
        dart1: "",
        dart2: "",
        dart3: ""
    }

    handleInput = (index, multiplier, value, dartCount)=>{
        let array = [...this.state.p1]
        for(let i = multiplier; i > 0; i--){
            if(array[index].marks < 3){
                array[index].marks = array[index].marks += 1
                } else if(array[index].marks === 3 && this.state.p2[index].marks !== 3){
                    array[index].score = array[index].score += value
                    } else;
        }
        this.setState({p1:array})
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


    exportResults = ()=>{
        cricketGameDetail(this.state.p1)
    }

    render(){
        return(
            <div>
                <CricketBoard state={this.state}/>
                <CricketInput handleInput={this.handleInput} dartsThrown={this.dartsThrown} state={this.state}/>
                <button onClick={this.exportResults}>try</button>
            </div>
        )
    }
}

export default Cricket;