import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
class Score extends React.Component{

  render(){
    return(
        <View style={styles.header}>
          <View style={styles.scorePlayer}>
            <Text>Joueur</Text>
            <Text>Score: 5</Text>
          </View>
          <View style={styles.scoreBot}>
            <Text>Ordi</Text>
            <Text>Score: 5</Text>
          </View>
        </View>
    )
  }
}
const styles = StyleSheet.create({
header : {
  flexDirection: 'row',
  width: '100%',
  height: 70,
  borderBottomWidth: 2,
},

scorePlayer : {
  flex: 1,
    borderRightWidth: 2,
},

scoreBot : {
  flex: 1,
},
})

export default Score
