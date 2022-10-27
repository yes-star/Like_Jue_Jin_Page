import React, {PureComponent} from 'react';
import {withRouter} from "react-router-dom";
import {renderRoutes} from 'react-router-config'
import routes from "./router";

import Header from "./components/Header";

class App extends PureComponent {
    state = {
        showSubNav: true,
    }

    componentDidMount() {
        if (this.props.location.pathname === '/pins' || this.props.location.pathname.includes('/artical')) {
            this.setState({
                showSubNav: false
            })
        } else {
            this.setState({
                showSubNav: true
            })
        }
    }

    componentDidUpdate() {
        if (this.props.location.pathname === '/pins' || this.props.location.pathname.includes('/artical')) {
            this.setState({
                showSubNav: false
            })
        } else {
            this.setState({
                showSubNav: true
            })
        }
    }

    render() {
        return (
            <div>
                <Header showSubNav={this.state.showSubNav}/>
                {renderRoutes(routes)}
            </div>
        );
    }
}

export default withRouter(App);
