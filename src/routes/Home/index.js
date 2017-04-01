import { connect } from 'react-redux'
import HomeView from './components/HomeView'


// Sync route definition
export default {
  component : connect()(HomeView)
}
