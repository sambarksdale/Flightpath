import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends Component {

    getUserData = (event)=>{
        let user = {}
        event.preventDefault()
        let username = document.getElementById("p1-login-username").value
        let password = document.getElementById("p1-login-password").value
        user.username = username
        user.password = password
        this.props.userLogin(user,this.props.player.p1_userName)
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
                        id="p1-login-username"
                        label="Name"
                        className={useStyles.textField}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="p1-login-password"
                        label="Password"
                        className={useStyles.textField}
                        type="password"
                        autoComplete="current-password"
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

export default Login