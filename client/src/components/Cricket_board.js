import React, {Component} from 'react'
import './Cricket_board.css'

class Cricket_board extends Component {
    state = {
        p1:{
            "twenty-marks": 0,
            "twenty-closed": false,
            "twenty-score": 0,
            "nineteen-marks": 0,
            "nineteen-closed": false,
            "nineteen-score": 0,
            "eighteen-marks": 0,
            "eighteen-closed": false,
            "eighteen-score": 0,
            "seventeen-marks": 0,
            "seventeen-closed": false,
            "seventeen-score": 0,
            "sixteen-marks": 0,
            "sixteen-closed": false,
            "sixteen-score": 0,
            "fifteen-marks": 0,
            "fifteen-closed": false,
            "fifteen-score": 0,
            "bull-marks": 0,
            "bull-closed": false,
            "bull-score": 0,
        },
        p2:{
            "twenty-marks": 0,
            "twenty-closed": false,
            "twenty-score": 0,
            "nineteen-marks": 0,
            "nineteen-closed": false,
            "nineteen-score": 0,
            "eighteen-marks": 0,
            "eighteen-closed": false,
            "eighteen-score": 0,
            "seventeen-marks": 0,
            "seventeen-closed": false,
            "seventeen-score": 0,
            "sixteen-marks": 0,
            "sixteen-closed": false,
            "sixteen-score": 0,
            "fifteen-marks": 0,
            "fifteen-closed": false,
            "fifteen-score": 0,
            "bull-marks": 0,
            "bull-closed": false,
            "bull-score": 0,
        },
    }
    render(){
        return(
            <div className="board-container">
                <div>PLAYER 1</div>
                <div>CRICKET</div>
                <div>PLAYER 2</div>
                <div>{this.state.p1["twenty-marks"]}</div>
                <div>20</div>
                <div>{this.state.p2["twenty-marks"]}</div>
                <div></div>
                <div>19</div>
                <div></div>
                <div></div>
                <div>18</div>
                <div></div>
                <div></div>
                <div>17</div>
                <div></div>
                <div></div>
                <div>16</div>
                <div></div>
                <div></div>
                <div>15</div>
                <div></div>
                <div></div>
                <div>bull</div>
                <div></div>
            </div>
        )
    }
}

export default Cricket_board;