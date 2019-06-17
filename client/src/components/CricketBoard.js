import React, {Component} from 'react'
import './CricketBoard.css'

class CricketBoard extends Component {

    render(){
        return(
            <div>                    
                <div className="board-container">

                    <div className="name-plate" id="p1-name-plate">PLAYER </div>
                    <div className="name-plate">VS</div>
                    <div className="name-plate" id="p2-name-plate">PLAYER 2</div>

                    <div></div>
                    <div> </div>
                    <div className="board-center" onClick={()=>{this.props.randomTurnOne()}}>CRICKET</div>
                    <div></div>
                    <div></div>

                    <div>{this.props.state.p1[0].score > 0 ? `${this.props.state.p1[0].score}` : null }</div>
                    <div>{this.props.state.p1[0].marks > 0 ? <img alt="" src={'images/' + this.props.state.p1[0].marks + ".png"}/> : null}</div>
                    <div className="board-center">20</div>
                    <div>{this.props.state.p2[0].marks > 0 ? <img alt="" src={'images/' + this.props.state.p2[0].marks + ".png"}/> : null}</div>
                    <div>{this.props.state.p2[0].score > 0 ? `${this.props.state.p2[0].score}` : null }</div>

                    <div>{this.props.state.p1[1].score > 0 ? `${this.props.state.p1[1].score}` : null }</div>
                    <div>{this.props.state.p1[1].marks > 0 ? <img alt="" src={'images/' + this.props.state.p1[1].marks + ".png"}/> : null}</div>
                    <div className="board-center">19</div>
                    <div>{this.props.state.p2[1].marks > 0 ? <img alt="" src={'images/' + this.props.state.p2[1].marks + ".png"}/> : null}</div>
                    <div>{this.props.state.p2[1].score > 0 ? `${this.props.state.p2[1].score}` : null }</div>

                    <div>{this.props.state.p1[2].score > 0 ? `${this.props.state.p1[2].score}` : null }</div>
                    <div>{this.props.state.p1[2].marks > 0 ? <img alt="" src={'images/' + this.props.state.p1[2].marks + ".png"}/> : null}</div>
                    <div className="board-center">18</div>
                    <div>{this.props.state.p2[2].marks > 0 ? <img alt="" src={'images/' + this.props.state.p2[2].marks + ".png"}/> : null}</div>
                    <div>{this.props.state.p2[2].score > 0 ? `${this.props.state.p2[2].score}` : null }</div>

                    <div>{this.props.state.p1[3].score > 0 ? `${this.props.state.p1[3].score}` : null }</div>
                    <div>{this.props.state.p1[3].marks > 0 ? <img alt="" src={'images/' + this.props.state.p1[3].marks + ".png"}/> : null}</div>
                    <div className="board-center">17</div>
                    <div>{this.props.state.p2[3].marks > 0 ? <img alt="" src={'images/' + this.props.state.p2[3].marks + ".png"}/> : null}</div>
                    <div>{this.props.state.p2[3].score > 0 ? `${this.props.state.p2[3].score}` : null }</div>

                    <div>{this.props.state.p1[4].score > 0 ? `${this.props.state.p1[4].score}` : null }</div>
                    <div>{this.props.state.p1[4].marks > 0 ? <img alt="" src={'images/' + this.props.state.p1[4].marks + ".png"}/> : null}</div>
                    <div className="board-center">16</div>
                    <div>{this.props.state.p2[4].marks > 0 ? <img alt="" src={'images/' + this.props.state.p2[4].marks + ".png"}/> : null}</div>
                    <div>{this.props.state.p2[4].score > 0 ? `${this.props.state.p2[4].score}` : null }</div>

                    <div>{this.props.state.p1[5].score > 0 ? `${this.props.state.p1[5].score}` : null }</div>
                    <div>{this.props.state.p1[5].marks > 0 ? <img alt="" src={'images/' + this.props.state.p1[5].marks + ".png"}/> : null}</div>
                    <div className="board-center">15</div>
                    <div>{this.props.state.p2[5].marks > 0 ? <img alt="" src={'images/' + this.props.state.p2[5].marks + ".png"}/> : null}</div>
                    <div>{this.props.state.p2[5].score > 0 ? `${this.props.state.p2[5].score}` : null }</div>

                    <div>{this.props.state.p1[6].score > 0 ? `${this.props.state.p1[6].score}` : null }</div>
                    <div>{this.props.state.p1[6].marks > 0 ? <img alt="" src={'images/' + this.props.state.p1[6].marks + ".png"}/> : null}</div>
                    <div className="board-center">bull</div>
                    <div>{this.props.state.p2[6].marks > 0 ? <img alt="" src={'images/' + this.props.state.p2[6].marks + ".png"}/> : null}</div>
                    <div>{this.props.state.p2[6].score > 0 ? `${this.props.state.p2[6].score}` : null }</div>

                    <div></div>
                    <div>{this.props.state.dart1}</div>
                    <div>{this.props.state.dart2}</div>
                    <div>{this.props.state.dart3}</div>
                    <div></div>

                </div>
            </div>
        )
    }
}

export default CricketBoard;