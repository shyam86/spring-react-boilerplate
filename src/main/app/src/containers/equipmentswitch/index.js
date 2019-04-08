/* @flow */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Table
} from "reactstrap";

import type { Book, BookAddRequest } from "../../data/modules/books";
import {
  equipmentInfo,
  getEquipmentByTracking,
  getEquipmentByTrackingNo
} from "../../data/modules/equipment";
import type { AuthState } from "../../data/modules/auth";

type Props = {
  authState: AuthState,
  equipmentInfo: () => void,
  getEquipmentByTracking: () => void,
  getEquipmentByTrackingNo: (searchByTracking: SearchByTracking) => void
};

type State = {
  regitemSubsubtypes: number,
  regitemSubtypes: number,
  certificateNo: number,
  trackingNo: number
};

class EquipmentSwitch extends React.Component<Props, State> {
  props: Props;
  state: State;

  constructor(props) {
    super(props);
    this.state = {
      regitemSubsubtypes: 0,
      regitemSubtypes: 0,
      certificateNo: 0,
      trackingNo: 0
    };
  }
  componentDidMount() {
    //  this.props.getEquipmentByTracking();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSearchByTracking(e) {
    e.preventDefault();

    const { trackingNo } = this.state;

    const searchByTracking: SearchByTracking = { tracking: trackingNo };

    this.props.getEquipmentByTrackingNo(searchByTracking);
  }

  displayRegistrations() {
    const { registrations } = this.props;
    console.log("registrations!!!!!!!!!!!!!!!!!!");

    console.log(registrations);
    if (registrations.length !== 0) {
      return (
        <Container className="mt-2 col-md-12">
          <Table striped bordered>
            <thead>
              <tr>
                <th>Tracking No</th>
                <th>Certificate No</th>
                <th>Regitem Subtypes</th>
                <th>Regitem Sub Subtypes</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* <tbody>{loadedregistrations}</tbody> */}

            <tbody>
              <tr key={registrations.trackingNo}>
                <th scope="row">{registrations.trackingNo}</th>
                <td>{registrations.certificateNo}</td>
                <td>{registrations.regitemSubtypes}</td>
                <td>{registrations.regitemSubsubtypes}</td>
                <th>
                  {" "}
                  <Link to="/updateequipment">Switch Equipment </Link>
                </th>
              </tr>
            </tbody>
          </Table>
        </Container>
      );
    }

    return (
      <Container className="mt-2 col-md-12">
        <div>Tracking not found</div>
      </Container>
    );
  }

  render() {
    const { authState } = this.props;
    const {
      regitemSubsubtypes,
      regitemSubtypes,
      certificateNo,
      trackingNo
    } = this.state;
    if (!authState.signedIn) {
      return (
        <div>
          <h1>Home</h1>
          Please sign in
        </div>
      );
    }

    return (
      <div>
        <h1>Home</h1>
        <Container>
          <Form>
            <FormGroup row>
              <Label for="trackingNo" sm={2}>
                Tracking NO
              </Label>
              <Col sm={10}>
                <Input
                  type="trackingNo"
                  name="trackingNo"
                  id="trackingNo"
                  placeholder="Please enter a tracking no"
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10 }}>
                <Button
                  type="submit"
                  onClick={e => this.handleSearchByTracking(e)}
                >
                  Search
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Container>
        {this.displayRegistrations()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authState: state.auth,
    registrations: state.registrationItems.data
  };
}

export default connect(
  mapStateToProps,
  { equipmentInfo, getEquipmentByTracking, getEquipmentByTrackingNo }
)(EquipmentSwitch);
