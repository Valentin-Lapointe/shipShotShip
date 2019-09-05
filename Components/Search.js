import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
class Search extends React.Component{

  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.home}>
        <Text style={styles.titre1}>Bienvenue</Text>
        <Text style={styles.titre2}>dans</Text>
        <Text style={styles.titre2}>ShipShotShip !</Text>



        <View style={{flex:1,
        alignItems: 'center',
        justifyContent: 'center',}}>
         <Image
            resizeMode = 'contain'
           style={styles.image}
           source={{uri: 'https://cdn.megajogos.com.br/images/premium/game-logo/battleship-m_fr_FR.png'}}
         />
        </View>



        <View style={styles.scanButtonView}>
         <TouchableOpacity style={styles.scanButton} onPress={() => navigate('Game')}>
           <Text style={styles.scanButtonText}>Start Game</Text>
         </TouchableOpacity>
        </View>



      </View>
    )
  }
}
const styles = StyleSheet.create({
  home:{
    flex: 1,
    backgroundColor: '#056EB3',
  },

  titre1:{
    textAlign: 'center',
    fontSize: 20,
    marginLeft: 5,
    marginRight: 5,
    marginTop: '30%',
    fontSize: 30,
    height: 50,
    paddingLeft: 5
  },

  titre2:{
    textAlign: 'center',
    fontSize: 20,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 30,
    height: 50,
    paddingLeft: 5
  },

  image:{
    width: 300,
    height: 300,
    marginRight: '5%',
    marginLeft: '5%',
  },

  scanButtonView : {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
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

export default Search
