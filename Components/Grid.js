import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import {gameStyles} from "../styles/gameStyles";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <View
            style={gameStyles.grid}>
          {this.props.grid.map(
              (row, indexRow) => {
                return (
                    <View
                        style={gameStyles.row}>
                      {row.map(
                          (cell, indexCol) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                      this.props.onPressCell(indexRow, indexCol)
                                    }}
                                    style={[gameStyles.cell, {backgroundColor: cell.bColor}]}>
                                  <Text>{cell.content}</Text>
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