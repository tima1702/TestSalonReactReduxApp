import Home from '../components/Home'
import {fetchSalons} from "../../../actions/action";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return {
    salons: state.salons,
    total: state.total,
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSalons: bindActionCreators(fetchSalons, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
