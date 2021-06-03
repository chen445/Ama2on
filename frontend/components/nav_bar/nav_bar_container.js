import {connect} from 'react-redux';
import {signout} from '../../actions/session';
import NavBar from './nav_bar';

const mapStateToProps = (state) =>({
    currentUser: state.entities.users[state.session.id]
})


const mapDispatchToProps = dispatch => ({
    signout: ()=> dispatch(signout()),
    

})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);