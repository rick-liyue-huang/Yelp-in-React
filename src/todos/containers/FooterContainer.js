import {Footer} from "../components/Footer";
import {connect} from "react-redux";
import {setFilterAction} from "../actions";
import {getFilter} from "../selectors";


const mapStateToProps = state => ({
  // filter: state.filter
  filter: getFilter(state)
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: filter => dispatch(setFilterAction(filter))
});

export const FooterContainer  = connect(mapStateToProps, mapDispatchToProps)(Footer);
