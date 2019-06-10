import React, {Component} from 'react'
import {cricketGameDetail} from '../util'
import Cricket_board from './Cricket_board'
import Cricket_input from './Cricket_input'

class Cricket extends Component {
    state = {
        p1:[{id:20,marks:3,score:20},{id:19,marks:3,score:57},{id:18,marks:3,score:36},{id:17,marks:3,score:0},{id:16,marks:3,score:48},{id:15,marks:3,score:0},{id:25,marks:3,score:0}],
    }

    handleP1Input = ()=>{
        let array = {...this.state.p1}
        array[0].marks = array[0].marks += 1
        this.setState({p1:array}, ()=>{console.log(this.state.p1)})

        
    }

    exportResults = ()=>{
        cricketGameDetail(this.state.p1)
    }

    render(){
        return(
            <div>
                <Cricket_board state={this.state}/>
                <Cricket_input handleInput={this.handleP1Input}/>
                <button onClick={this.exportResults}>try</button>
            </div>
        )
    }
}

export default Cricket;