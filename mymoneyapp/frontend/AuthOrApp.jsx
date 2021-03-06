import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from 'root/app';
import AuthView from 'root/auth/auth';
import { validateToken } from 'root/auth/actions';

import 'common/dependences';

class AuthOrApp extends React.Component {
    componentWillMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token);
        }
    }
    render() {
        const { user, validToken } = this.props.auth;
        if (user && validToken) {
            axios.defaults.headers.common['authorization'] = user.token;
            return <App>{this.props.children}</App>;
        } else if (!user && !validToken) {
            return <AuthView />;
        } else {
            return false;
        }
    }
}
const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch =>
    bindActionCreators({ validateToken }, dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthOrApp);
