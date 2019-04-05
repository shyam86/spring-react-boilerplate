/* @flow */
import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import type { AuthState } from "../../data/modules/auth";
import { logout } from "../../data/modules/auth";
import { socketsSubscribe } from "../../middleware/socketActions";
import type { SocketState } from "../../data/modules/websockets";

import * as Names from "../../constants/names";

type Props = {
  auth: AuthState,
  socketState: SocketState,
  socketsSubscribe: (topic: string) => void,
  logout: () => void
};

type State = {
  subscriptionActive: boolean
};

class AppNav extends React.Component<Props, State> {
  props: Props;
  state: State;

  constructor(props) {
    super(props);
    this.state = {
      subscriptionActive: false
    };
  }

  authLink(signedIn) {
    if (!signedIn) {
      return (
        <NavItem>
          <NavLink className="nav-link" href="/signin">
            <span className="fa fa-list fa-lg" /> Sign In
          </NavLink>
        </NavItem>
      );
    }

    return (
      <NavItem>
        <NavLink>
          <a href="#" onClick={() => this.props.logout()}>
            Sign Out
          </a>
        </NavLink>
      </NavItem>
    );
  }

  userLink(signedIn, username) {
    if (signedIn) {
      return (
        <NavItem>
          <NavLink>
            <div className="text-info">{username}</div>
          </NavLink>
        </NavItem>
      );
    }

    return null;
  }

  roleLink(signedIn, roles) {
    if (signedIn && roles.some(item => Names.ROLE_ADMIN === item)) {
      return (
        <NavItem>
          <NavLink>
            <a href="#">AdminMenu</a>
          </NavLink>
        </NavItem>
      );
    }

    return null;
  }

  socketLink() {
    const { connected } = this.props.socketState;

    if (connected && !this.state.subscriptionActive) {
      this.props.socketsSubscribe("/topic/update");
      this.setState({ subscriptionActive: true });
    }

    if (connected && this.state.subscriptionActive) {
      return (
        <NavItem>
          <NavLink>
            <a href="#">{this.props.socketState.message}</a>
          </NavLink>
        </NavItem>
      );
    }

    return null;
  }

  render() {
    const { signedIn, username } = this.props.auth;

    return (
      <React.Fragment>
        <Navbar color="dark" dark expand={true} fixed="top" className="mb-5">
          <div className="container">
            <NavbarBrand href="/"> Home </NavbarBrand>
            <Nav className="d-flex ml-auto" navbar>
              {/* {this.socketLink()} */}
              {/* {this.roleLink(signedIn, roles)} */}
              <NavItem>
                <NavLink className="nav-link" href="/about-us">
                  <span className="fa fa-list fa-lg" /> About
                </NavLink>
              </NavItem>
              {this.userLink(signedIn, username)}

              {this.authLink(signedIn)}
            </Nav>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  socketState: state.websockets
});
const mapDispatchToProps = { logout, socketsSubscribe };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppNav)
);
