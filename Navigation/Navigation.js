import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../Components/Search.js'

const SearchStackNavigator = createStackNavigator({
  Search:{
    screen:Search,
    navigationOptions:{
    title:"Menu"
    }
  },
},
)

export default createAppContainer(SearchStackNavigator)
