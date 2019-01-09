import {connect} from 'react-redux';
import App from '../components/App'

function mapStateToProps(currentStoreState) {
    return currentStoreState
}

function mapDispatchToProps() {
    return {};
}

// function mergeProps() {
//     return {
//     };
// }

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    // mergeProps,
    // options
)(App);