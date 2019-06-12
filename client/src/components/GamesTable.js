import React, { Component } from 'react';
import './GamesTable.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class GamesTable extends Component {

    func = ()=>{console.log(this.props.rows)}

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
          
          function createData(name, calories, fat, carbs, protein) {
            return { name, calories, fat, carbs, protein };
          }
          
          const rows = [
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
          ];


        return (
            <div className="table-container">
            <button onClick={this.func}></button>
            <p>{this.props.rows}</p>
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
          );
    }
}

export default GamesTable