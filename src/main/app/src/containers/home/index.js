/* @flow */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import type { AuthState } from "../../data/modules/auth";

type Props = {
  authState: AuthState
};

class Home extends React.Component<Props, State> {
  render() {
    const { authState } = this.props;
    console.log(this.props);
    if (!authState.signedIn) {
      return (
        <div>
          <h1> You need to sign in to continue</h1>
        </div>
      );
    }
    return (
      <div>
        <h1>You are successfully Logged in !!</h1>

        <div className="container">
          <div className="col-12 center">
            <Link to="/equipmentswitch">Equipment Unit Switch</Link>{" "}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    authState: state.auth
  };
}
export default connect(mapStateToProps)(Home);
