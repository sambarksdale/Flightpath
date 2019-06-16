import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'

class Formsp1 extends Component {
    render(){
        return(
            
            <div>
            {  
                this.props.state.p1_signIn ? 
                    <Login 
                        p1ViewLogin={this.props.p1ViewLogin}
                        p1ViewSignup={this.props.p1ViewSignup}
                        userLogin={this.props.userLogin}
                        player={this.props.player}
                    />
                :
                    <Signup
                        p1ViewLogin={this.props.p1ViewLogin}
                        p1ViewSignup={this.props.p1ViewSignup}
                        userSignup={this.props.userSignup}
                        player={this.props.player}
                    />
            }
            </div>
        )
    }
}

export default Formsp1