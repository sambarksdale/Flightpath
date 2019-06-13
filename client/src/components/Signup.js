import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Signup extends Component {

    getUserData = (event)=>{
        let user = {}
        event.preventDefault()
        let username = document.getElementById("p1-signup-username").value
        // let email = document.getElementById("p1-signup-email").value
        let password = document.getElementById("p1-signup-password").value
        user.username = username
        // user.email = email
        user.password = password
        this.props.userSignup(user,this.props.player.p1_userName)
    }

    render(){
        const useStyles = makeStyles(theme => ({

            textField: {
              marginLeft: theme.spacing(1),
              marginRight: theme.spacing(1),
              width: 200,
            },
            button: {
                margin: theme.spacing(1),
                color: 'purple',
            },
          }));
          
        return(
            <form onSubmit={this.getUserData}>
                <div>
                    <TextField
                        id="p1-signup-username"
                        label="Name"
                        className={useStyles.textField}
                        margin="normal"
                    />
                </div>
                {/* <div>
                    <TextField
                        id="p1-signup-email"
                        label="eMail"
                        className={useStyles.textField}
                        value="mail@mail"
                        type="email"
                        margin="normal"
                    />
                </div> */}
                <div>
                    <TextField
                        id="p1-signup-password"
                        label="Password"
                        className={useStyles.textField}
                        type="password"
                        autoComplete="current-password"
                        value="password"
                        margin="normal"
                    />
                <div>
                    <Button type="submit" variant="contained" color="primary" className={useStyles.button}>Submit</Button>
                </div>
                </div>
            </form>

        )
    }
}

export default Signup