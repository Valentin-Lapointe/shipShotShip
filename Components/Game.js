import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
class Game extends React.Component{

  render(){
    const {navigate} = this.props.navigation;
    return(
      <View>


      </View>
    )
  }
}
const styles = StyleSheet.create({
  titre:{
    textAlign: 'center',
    fontSize: 20,
    marginLeft: 5,
    marginRight: 5,
    marginTop:'12%',
    height: 100,
    paddingLeft: 5
  },

  scanButtonView : {
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
}
})

export default Game
