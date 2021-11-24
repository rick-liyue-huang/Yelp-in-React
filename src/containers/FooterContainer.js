import {Footer} from "../todos/Footer";
import {connect} from "react-redux";
import {setFilterAction} from "../actions";


const mapStateToProps = state => ({
  filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: filter => dispatch(setFilterAction(filter))
});

export const FooterContainer  = connect(mapStateToProps, mapDispatchToProps)(Footer);
