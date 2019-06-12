import React, {Component} from 'react'
import {getGamesByUser} from '../util'

class User extends Component {
    state = {
        games: []
    }
    componentDidMount(){
        let id = {id:this.props.user.match.params.id}
        getGamesByUser(id)
            .then(results => {
                let games= results.data
                this.setState({games})
            })
    }
    render(){
        return(
            <div>
            <h1>User Page</h1>
            {
                this.state.games.map((game,index)=>{
                    return(
                        <div key={index}>
                        <div>{game.winner}</div>
                        <div>{game.game_type}</div>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default User;