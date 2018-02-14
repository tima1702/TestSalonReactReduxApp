import React from 'react'
import { bindActionCreators, createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Router, Route, browserHistory } from 'react-router'
import {fetchSalons} from "../actions/action";
import Home from "../routes/Home/containers/Home";
import Details from '../routes/Details/containers/DetailsContainer'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducers from '../reducers'

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store);

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: bindActionCreators(fetchSalons, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    // saloons: state.saloons,
    // page: state.page
  }
}

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }



  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={history}>
            <Route path="/" component={Home} />
            <Router path="details/:id" component={Details}/>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
