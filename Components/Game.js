import React from 'react'
import {StyleSheet, Text, View, Modal} from 'react-native'
import Score from './Score'
export default class Game extends React.Component{

  state = {
    modalVisible: false,
  }

  render(){
    const {navigate} = this.props.navigation;
    return(
      <View>
          <Score />

        <Modal
               animationType="slide"
               transparent={false}
               visible={this.state.modalVisible}>
             </Modal>

      </View>
    )
  }
}
const styles = StyleSheet.create({

})
