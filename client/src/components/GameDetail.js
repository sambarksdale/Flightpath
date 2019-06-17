import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {getDetails} from '../util'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class GameDetail extends Component {

    state = {
        details: [],
        playerDetails : [],
        opponentDetails: []
    }

    componentDidMount(){
        getDetails(this.props.user.match.params.game_id)
            .then(details=>{
                this.setState({details})
                details.forEach(detail => {
                    if(detail.user_id == this.props.user.match.params.id){
                        this.setState({playerDetails:detail})
                    } else {
                        this.setState({opponentDetails:detail})
                    }
                });
            })
        
    }
    render(){

        const useStyles = makeStyles(theme => ({
            root: {
                width: '100%',
                marginTop: theme.spacing(3),
                overflowX: 'auto',
            },
            table: {
                Width: 650,
            },
            }));

        return(
        <div>
            <div>
                <Link to={`/user/${this.props.user.match.params.id}`}>back</Link>
            </div>
            <div className="table-container">
                <Paper className={useStyles.root}>
                <Typography variant="h6" id="tableTitle">You</Typography>
                    <Table className={useStyles.table}>
                        <TableHead>
                            <TableRow>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center">20's</TableCell>
                            <TableCell align="center">19's</TableCell>
                            <TableCell align="center">18's</TableCell>
                            <TableCell align="center">17's</TableCell>
                            <TableCell align="center">16's</TableCell>
                            <TableCell align="center">15's</TableCell>
                            <TableCell align="center">Bull</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="center">Marks</TableCell>
                                <TableCell align="center">{this.state.playerDetails.marks20}</TableCell>
                                <TableCell align="center">{this.state.playerDetails.marks19}</TableCell>
                                <TableCell align="center">{this.state.playerDetails.marks18}</TableCell>
                                <TableCell align="center">{this.state.playerDetails.marks17}</TableCell>
                                <TableCell align="center">{this.state.playerDetails.marks16}</TableCell>
                                <TableCell align="center">{this.state.playerDetails.marks15}</TableCell>
                                <TableCell align="center">{this.state.playerDetails.marks25}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">Score</TableCell>
                                <TableCell align="center">{this.state.playerDetails.score20}</TableCell>
                                <TableCell align="center">{this.state.playerDetails.score19}</TableCell>
                                <TableCell align="center">{this.state.playerDetails.score18}</TableCell>
                                <TableCell align="center">{this.state.playerDetails.score17}</TableCell>
                                <TableCell align="center">{this.state.playerDetails.score16}</TableCell>
                                <TableCell align="center">{this.state.playerDetails.score15}</TableCell>
                                <TableCell align="center">{this.state.playerDetails.score25}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
            <div className="table-container">
                <Paper className={useStyles.root}>
                <Typography variant="h6" id="tableTitle">Opponent</Typography>
                    <Table className={useStyles.table}>
                        <TableHead>
                            <TableRow>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center">20's</TableCell>
                            <TableCell align="center">19's</TableCell>
                            <TableCell align="center">18's</TableCell>
                            <TableCell align="center">17's</TableCell>
                            <TableCell align="center">16's</TableCell>
                            <TableCell align="center">15's</TableCell>
                            <TableCell align="center">Bull</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="center">Marks</TableCell>
                                <TableCell align="center">{this.state.opponentDetails.marks20}</TableCell>
                                <TableCell align="center">{this.state.opponentDetails.marks19}</TableCell>
                                <TableCell align="center">{this.state.opponentDetails.marks18}</TableCell>
                                <TableCell align="center">{this.state.opponentDetails.marks17}</TableCell>
                                <TableCell align="center">{this.state.opponentDetails.marks16}</TableCell>
                                <TableCell align="center">{this.state.opponentDetails.marks15}</TableCell>
                                <TableCell align="center">{this.state.opponentDetails.marks25}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">Score</TableCell>
                                <TableCell align="center">{this.state.opponentDetails.score20}</TableCell>
                                <TableCell align="center">{this.state.opponentDetails.score19}</TableCell>
                                <TableCell align="center">{this.state.opponentDetails.score18}</TableCell>
                                <TableCell align="center">{this.state.opponentDetails.score17}</TableCell>
                                <TableCell align="center">{this.state.opponentDetails.score16}</TableCell>
                                <TableCell align="center">{this.state.opponentDetails.score15}</TableCell>
                                <TableCell align="center">{this.state.opponentDetails.score25}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        </div>
        )
    }
}

export default GameDetail;