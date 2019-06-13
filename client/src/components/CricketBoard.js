import React, {Component} from 'react'
import './CricketBoard.css'

class CricketBoard extends Component {

    render(){
        return(
            <div className="board-container">
                <div id="p1-name-plate">PLAYER 1</div>
                <div>CRICKET</div>
                <div id="p2-name-plate">PLAYER 2</div>
                <div>{this.props.state.p1[0].marks > 0 ? <img alt="" src={'images/' + this.props.state.p1[0].marks + ".png"}/> : null}</div>
                <div>20</div>
                <div>{this.props.state.p2[0].marks > 0 ? <img alt="" src={'images/' + this.props.state.p2[0].marks + ".png"}/> : null}</div>

                <div>{this.props.state.p1[1].marks > 0 ? <img alt="" src={'images/' + this.props.state.p1[1].marks + ".png"}/> : null}</div>
                <div>19</div>
                <div>{this.props.state.p2[1].marks > 0 ? <img alt="" src={'images/' + this.props.state.p2[1].marks + ".png"}/> : null}</div>

                <div>{this.props.state.p1[2].marks > 0 ? <img alt="" src={'images/' + this.props.state.p1[2].marks + ".png"}/> : null}</div>
                <div>18</div>
                <div>{this.props.state.p2[2].marks > 0 ? <img alt="" src={'images/' + this.props.state.p2[2].marks + ".png"}/> : null}</div>

                <div>{this.props.state.p1[3].marks > 0 ? <img alt="" src={'images/' + this.props.state.p1[3].marks + ".png"}/> : null}</div>
                <div>17</div>
                <div>{this.props.state.p2[3].marks > 0 ? <img alt="" src={'images/' + this.props.state.p2[3].marks + ".png"}/> : null}</div>

                <div>{this.props.state.p1[4].marks > 0 ? <img alt="" src={'images/' + this.props.state.p1[4].marks + ".png"}/> : null}</div>
                <div>16</div>
                <div>{this.props.state.p2[4].marks > 0 ? <img alt="" src={'images/' + this.props.state.p2[4].marks + ".png"}/> : null}</div>

                <div>{this.props.state.p1[5].marks > 0 ? <img alt="" src={'images/' + this.props.state.p1[5].marks + ".png"}/> : null}</div>
                <div>15</div>
                <div>{this.props.state.p2[5].marks > 0 ? <img alt="" src={'images/' + this.props.state.p2[5].marks + ".png"}/> : null}</div>
                
                <div>{this.props.state.p1[6].marks > 0 ? <img alt="" src={'images/' + this.props.state.p1[6].marks + ".png"}/> : null}</div>
                <div>bull</div>
                <div>{this.props.state.p2[6].marks > 0 ? <img alt="" src={'images/' + this.props.state.p2[6].marks + ".png"}/> : null}</div>

                <div>{this.props.state.dart1}</div>
                <div>{this.props.state.dart2}</div>
                <div>{this.props.state.dart3}</div>

            </div>
        )
    }
}

export default CricketBoard;