import React from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import {gameStyles} from "../styles/gameStyles";
import Grid from './Grid.js';
import Score from './Score';


export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      gridPlayer: [],
      gridIA: [],
      shipsPlayer: [],
      shipsIA: [],
      modalVisible: false,
      placedShips: false
    };

    this.props = {
      col: 10,
      row: 10,
    };

    for (let i = 0; i < this.props.row; i++) {
      this.state.gridPlayer.push([]);
      this.state.gridIA.push([]);

      for (let j = 0; j < this.props.col; j++) {
        this.state.gridPlayer[i].push(
            {row: i, col: j, content: '', ship: -1, bColor: 'blue'}
        );
        this.state.gridIA[i].push(
            {row: i, col: j, content: '', ship: -1, bColor: 'green'}
        );
      }
    }

    let newShips = [
      {
        size: 3,
        destroy: false,
        placed: false,
        positions: [
          {row: -1, col: -1, touch: false},
          {row: -1, col: -1, touch: false},
          {row: -1, col: -1, touch: false}
        ]
      },
      {
        size: 2,
        destroy: false,
        placed: false,
        positions: [
          {row: -1, col: -1, touch: false},
          {row: -1, col: -1, touch: false}
        ]
      },
      {
        size: 2,
        destroy: false,
        placed: false,
        positions: [
          {row: -1, col: -1, touch: false},
          {row: -1, col: -1, touch: false}
        ]
      },
      {
        size: 2,
        destroy: false,
        placed: false,
        positions: [
          {row: -1, col: -1, touch: false},
          {row: -1, col: -1, touch: false}
        ]
      },
    ];

    this.state.shipsPlayer = newShips;
    this.state.shipsIA = newShips;
  }

  // checkCaseAround = (grid, row, col, direction = null) => {
  //   let centerCell = grid[row][col];
  //   let caseAround = [
  //     {row: row - 1, col: col, position: 'top'},
  //     {row: row, col: col + 1, position: 'right'},
  //     {row: row + 1, col: col, position: 'bottom'},
  //     {row: row, col: col - 1, position: 'left'}
  //   ];
  //   let ship = null;
  //   for (let cell of caseAround) {
  //     if (direction === null || cell.position === direction) {
  //       if (cell.row > 0) {
  //         ship = grid[cell.row][cell.col].ship === centerCell.ship ? cell : ship;
  //       }
  //       if (cell.row < this.props.row - 1) {
  //         ship = grid[cell.row][cell.col].ship === centerCell.ship ? cell : ship;
  //       }
  //       if (cell.col > 0) {
  //         ship = grid[cell.row][cell.col].ship === centerCell.ship ? cell : ship;
  //       }
  //       if (cell.col < this.props.col - 1) {
  //         ship = grid[cell.row][cell.col].ship === centerCell.ship ? cell : ship;
  //       }
  //     }
  //   }
  //   return ship;
  // };

  onPressCellGridIA = (row, col) => {
    let newGrid = this.state.gridIA;
    let cell = newGrid[row][col];
    if (cell.ship === -1) {
      cell.bColor = 'white';
      cell.content = 'X';
    } else {
      cell.bColor = 'red';
      cell.content = 'X';
    }
    this.setState({gridIA: newGrid});
  };

  onPressCellGridPlayer = (row, col) => {
    let newGrid = this.state.gridPlayer;
    let cell = newGrid[row][col];
    let newShip = this.state.shipsPlayer;

    if (!this.state.placedShips) {

      console.log('ici');
      let key = 0;
      let index = 0;
      for (let ship of newShip) {
        if (!ship.placed) {
          console.log('a');
          index = 0;
          for (let shipPart of ship.positions) {
            if (shipPart.col === -1) {
              console.log('b');
              if (index === ship.positions.length - 1) {
                ship.placed = true;
                this.setState({shipPlayer: newShip});
              }
              shipPart.col = col;
              shipPart.row = row;
              cell.ship = key;
              cell.bColor = 'green';
              console.log('c');
              break;
            }
            index++;
          }
          break;
        }
        key++;
      }

      this.setState({gridPlayer: newGrid});
    }
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
        <View style={gameStyles.container}>
          <Score/>
          <Grid
              grid={this.state.gridPlayer}
              onPressCell={this.onPressCellGridPlayer}
          />
          <Modal
              visible={this.state.modalVisible}
              animationType="slide"
              transparent={false}>
            <Score/>
            <Grid
                grid={this.state.gridIA}
                onPressCell={this.onPressCellGridIA}

            />
          </Modal>
        </View>
    )
  }
}

const styles = StyleSheet.create({});
