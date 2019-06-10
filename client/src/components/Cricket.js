import React, {Component} from 'react'
import Cricket_board from './Cricket_board'
import Cricket_input from './Cricket_input'

class Cricket extends Component {
    state = {
        p1:[{id:20,marks_20:0,score_20:0},{id:19,marks_19:0,score:0},{id:18,marks_18:0,score_18:0}],
    }

    handleP1Input = (index, multiplier, value)=>{
        let array = {...this.state.p1}
        array[0].marks = array[0].marks += 1
        this.setState({p1:array}, ()=>{console.log(this.state.p1)})

        
    }

    exportResults = ()=>{
        let array = this.state.p1
        let results = {}
        for(let i = 0; i < array.length; i++){
            let id= array[i].id
            Object.keys(array[i]).forEach(e => {
                // console.log(`key=${e}  value=${array[i][e]}`)
                results[`${e}`] = array[i][e]
            })
        }
        console.log(results)
    }
    render(){
        return(
            <div>
                {/* <Cricket_board state={this.state}/> */}
                <Cricket_input handleInput={this.handleP1Input}/>
                <button onClick={this.exportResults}>try</button>
            </div>
        )
    }
}

export default Cricket;