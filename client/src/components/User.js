import React, {Component} from 'react'
import {getGamesByUser} from '../util'
import './User.css'
import GamesTable from './GamesTable'
import './GamesTable.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class User extends Component {
    state = {
        games: [],
        username: "Sam",
        tableRows: []
    }
    componentDidMount(){
        let id = {id:this.props.user.match.params.id}
        getGamesByUser(id)
            .then(results => {
                let games= results.data
                this.setState({games})
            })
    }
    createTableData = (data)=>{
        let games = [...data]
        let gameData = this.setOpponents(games)
        let tableRows = this.createTableRows(gameData)
        return tableRows
    }
    setOpponents = (data)=>{
        data.map((game,index)=>{
          if(game.p1_username !== this.state.username){
            game.opponent = game.p1_username
          } else {game.opponent = game.p2_username}
            })
        return data
    }

    createTableRows = (data)=>{
        let rows = []
        data.map((game, index) => rows.push({date:"date",game_type:game.game_type,opponent:game.opponent,result:game.result,id:game.id}))
        return rows
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

        const rows = this.createTableData(this.state.games);
        return(
            <div className="table-container">
            <Paper className={useStyles.root}>
            <Table className={useStyles.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Game</TableCell>
                  <TableCell align="right">Opponent</TableCell>
                  <TableCell align="right">Result</TableCell>
                  <TableCell align="right">Detail</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.date}
                    </TableCell>
                    <TableCell align="right">{row.game_type}</TableCell>
                    <TableCell align="right">{row.opponent}</TableCell>
                    <TableCell align="right">{row.result}</TableCell>
                    <TableCell align="right">{row.id}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          </div>
        )
    }
}

export default User;