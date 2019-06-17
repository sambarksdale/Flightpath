import React, { Component } from 'react'
import P2Login from './P2Login'
import P2Signup from './P2Signup'

class Formsp1 extends Component {
    render(){
        return(
            
            <div>
            {  
                this.props.state.p2_signIn ? 
                <P2Login
                    p2ViewLogin={this.props.p2ViewLogin}
                    p2ViewSignup={this.props.p2ViewSignup}
                    userLogin={this.props.userLogin}
                    player={this.props.player}
                />
                :
                <P2Signup
                    p2ViewLogin={this.props.p2ViewLogin}
                    p2ViewSignup={this.props.p2ViewSignup}
                    userSignup={this.props.userSignup}
                    player={this.props.player}
                />
            }
            </div>
        )
    }
}

export default Formsp1