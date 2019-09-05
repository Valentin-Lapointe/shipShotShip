import React from 'react';
import {View, Modal} from 'react-native';
import {gameStyles} from "../styles/gameStyles";
import Grid from './Grid.js';
import Score from './Score';


export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      gridP1: [],
      gridP2: [],
      modalVisible: false
    };

    this.props = {
      col: 10,
      row: 10,
    };

    for (let i = 0; i < this.props.row; i++) {
      this.state.gridP1.push([]);
      this.state.gridP2.push([]);

      for (let j = 0; j < this.props.col; j++) {
        this.state.gridP1[i].push(
            {row: i, col: j, content: '', shot: 0, ship: 0, bColor: 'blue'}
        );
        this.state.gridP2[i].push(
            {row: i, col: j, content: '', shot: 0, ship: 0, bColor: 'green'}
        );
      }
    }
  }

  onPressCell = (grid, row, col) => {
    let newGrid = grid;
    newGrid[row][col].bColor = 'red';
    this.setState({[grid]: newGrid});
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
        <View style={gameStyles.container}>
          <Score/>
          <Grid
              grid={this.state.gridP1}
              onPressCell={this.onPressCell}
          />
          <Modal
              visible={this.state.modalVisible}
              animationType="slide"
              transparent={false}>
            <Score/>
            <Grid
                grid={this.state.gridP2}
                onPressCell={this.onPressCell}

            />
          </Modal>
        </View>
    )
  }
}

const styles = StyleSheet.create({});
