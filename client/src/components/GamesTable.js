import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getTableData } from '../util'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class GamesTable extends Component {

  state = {
    tableRows: []
  }

  componentDidMount(){
    let id = {id:this.props.user.match.params.id}
    getTableData(id)
      .then(tableRows=>{
        this.setState({tableRows})
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

    
    return (
      <div className="table-container">
        <Paper className={useStyles.root}>
        <Table className={useStyles.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Game</TableCell>
              <TableCell align="center">Opponent</TableCell>
              <TableCell align="center">Result</TableCell>
              <TableCell align="center">Detail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.tableRows.map((row,index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.game_type}</TableCell>
                <TableCell align="center">{row.opponent}</TableCell>
                <TableCell align="center">{row.result == this.props.user.match.params.id ? "Win" : "Loss"}</TableCell>
                <TableCell align="center"><a href={`game/${row.game_id}`}>detail</a></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Paper>
      </div>
      )
  }
}

export default GamesTable