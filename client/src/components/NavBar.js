import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import './NavBar.css'
import Formsp1 from './Formsp1'
import Formsp2 from './Formp2'

class UserSelect extends Component {
    
    state = {
        p1_signIn: true,
        p2_signIn: true,
    }

    p1ViewLogin=()=>{
        this.setState({p1_signIn: true})
    }

    p1ViewSignup=()=>{
        this.setState({p1_signIn: false})
    }

    p2ViewLogin=()=>{
        this.setState({p2_signIn: true})
    }

    p2ViewSignup=()=>{
        this.setState({p2_signIn: false})
    }

    p1View

    render(){

        const p1Forms = ()=>(<Formsp1 
            state={this.state}
            p1ViewLogin={this.p1ViewLogin}
            p1ViewSignup={this.p1ViewSignup}
            userLogin={this.props.userLogin}
            userSignup={this.props.userSignup}
            player={this.props.state.player1}
        />)

        const p2Forms = ()=>(<Formsp2
            state={this.state}
            p2ViewLogin={this.p2ViewLogin}
            p1ViewSignup={this.p2ViewSignup}
            userLogin={this.props.userLogin}
            userSignup={this.props.userSignup}
            player={this.props.state.player2}
        />)

        return(
            <div className="navbar">
                <div className="player1">
                {
                    this.props.state.player1.loggedIn ?
                    <div className="login-container">
                        <div>
                            <div>Logged in as:{this.props.state.player1.p1_userName}</div>
                        </div>
                        <div class="dropdown">
                            <div onClick={this.getUserData} class="dropbtn">Menu</div>
                            <div class="dropdown-content">
                                <Link to={`/user/${this.props.state.player1.p1_id}`}><div>edit user</div></Link>
                                <a href="#">New User</a>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <Route render={p1Forms}/>
                    </div>
                }
                </div>

                <Link to={`/`}>
                    <div>PLay Cricket</div>
                </Link>

                <div className="player2">
                {
                    this.props.state.player2.loggedIn ?
                    <div className="login-container">
                        <div class="dropdown">
                            <div onClick={this.getUserData} class="dropbtn">Menu</div>
                            <div class="dropdown-content">
                                <Link to={`/user/${this.props.state.player2.p2_id}`}><div>edit user</div></Link>
                                <a href="#">New User</a>
                            </div>
                        </div>
                        <div>
                            <div>Logged in as:{this.props.state.player2.p2_userName}</div>
                        </div>
                        
                    </div>
                    :
                    <div>
                        <Route render={p2Forms}/>
                    </div>
                }
                </div>
            </div>
        )
    }
}

export default UserSelect