import React, {Component} from 'react'
import './Cricket_board.css'

class Cricket_board extends Component {

    render(){
        return(
            <div className="board-container">
                <div>PLAYER 1</div>
                <div>CRICKET</div>
                <div>PLAYER 2</div>
                <div>{this.props.state.p1["20-marks"] > 0 ? <img alt="" src={'images/' + this.props.state.p1["20-marks"] + ".png"}/> : null}</div>
                <div>20</div>
                <div>{this.props.state.p2["20-marks"] > 0 ? <img alt="" src={'images/' + this.props.state.p2["20-marks"] + ".png"}/> : null}</div>

                <div>{this.props.state.p1["nineteen-marks"] > 0 ? <img alt="" src={'images/' + this.props.state.p1["nineteen-marks"] + ".png"}/> : null}</div>
                <div>19</div>
                <div>{this.props.state.p2["nineteen-marks"] > 0 ? <img alt="" src={'images/' + this.props.state.p2["nineteen-marks"] + ".png"}/> : null}</div>

                <div>{this.props.state.p1["eighteen-marks"] > 0 ? <img alt="" src={'images/' + this.props.state.p1["eighteen-marks"] + ".png"}/> : null}</div>
                <div>18</div>
                <div>{this.props.state.p2["eighteen-marks"] > 0 ? <img alt="" src={'images/' + this.props.state.p2["eighteen-marks"] + ".png"}/> : null}</div>

                <div>{this.props.state.p1["seventeen-marks"] > 0 ? <img alt="" src={'images/' + this.props.state.p1["seventeen-marks"] + ".png"}/> : null}</div>
                <div>17</div>
                <div>{this.props.state.p2["seventeen-marks"] > 0 ? <img alt="" src={'images/' + this.props.state.p2["seventeen-marks"] + ".png"}/> : null}</div>

                <div>{this.props.state.p1["sixteen-marks"] > 0 ? <img alt="" src={'images/' + this.props.state.p1["sixteen-marks"] + ".png"}/> : null}</div>
                <div>16</div>
                <div>{this.props.state.p2["sixteen-marks"] > 0 ? <img alt="" src={'images/' + this.props.state.p2["sixteen-marks"] + ".png"}/> : null}</div>

                <div>{this.props.state.p1["fifteen-marks"] > 0 ? <img alt="" src={'images/' + this.props.state.p1["fifteen-marks"] + ".png"}/> : null}</div>
                <div>15</div>
                <div>{this.props.state.p2["fifteen-marks"] > 0 ? <img alt="" src={'images/' + this.props.state.p2["fifteen-marks"] + ".png"}/> : null}</div>
                
                <div>{this.props.state.p1["bull-marks"] > 0 ? <img alt="" src={'images/' + this.props.state.p1["bull-marks"] + ".png"}/> : null}</div>
                <div>bull</div>
                <div>{this.props.state.p2["bull-marks"] > 0 ? <img alt="" src={'images/' + this.props.state.p2["bull-marks"] + ".png"}/> : null}</div>
            </div>
        )
    }
}

export default Cricket_board;