import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state.gridP1 = [];
    this.state.gridP2 = [];

    this.props.col = 10;
    this.props.row = 10;

    for (let i = 0; i < this.props.row; i++) {
      for (let j = 0; j < this.props.col; j++) {
        this.state.gridP1[i].push(
            {row: i, col: j, value: '', bColor: ''}
        );
        this.state.gridP2[i].push(
            {row: i, col: j, value: '', bColor: ''}
        );
      }
    }
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
        <View
            style={gameStyles.grid}>
          {this.state.gridP1.map(
              (row) => {
                return (
                    <View
                        style={gameStyles.row}>
                      {row.map(
                          (col) => {
                            return (
                                <TouchableOpacity
                                    style={[gameStyles.cell,
                                      {backgroundColor: col.bColor}]}
                                    onPress={}>
                                  <Text>{col.value}</Text>
                                </TouchableOpacity>
                            )
                          }
                      )}
                    </View>
                )
              }
          )}
        </View>
    )
  }
}

const gameStyles = StyleSheet.create({
  titre: {
    textAlign: 'center',
    fontSize: 20,
    marginLeft: 5,
    marginRight: 5,
    marginTop: '12%',
    height: 100,
    paddingLeft: 5
  },
  scanButtonView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  scanButton: {
    backgroundColor: 'white',
    width: "90%",
    borderRadius: 20,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scanButtonText: {
    fontSize: 16,
  },

  grid: {
    width: '90%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    width: '9%',
    height: '9%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cell: {
    backgroundColor: "blue"
  },

});

export default Game
