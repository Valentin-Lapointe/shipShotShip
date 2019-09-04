import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../Components/Search.js'
import Game from '../Components/Game.js'

const SearchStackNavigator = createStackNavigator({
  Search:{
    screen:Search,
    navigationOptions:{
    title:"Menu"
    }
  },

  Game:{
    screen:Game,
    navigationOptions:{
    title:"Game"
    }
  },
},

/*enlever tout les header*/

{
    headerMode: 'none'
}

)

export default createAppContainer(SearchStackNavigator)
