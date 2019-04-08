/* @flow */
import React from "react";
import { connect } from "react-redux";

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
import { equipmentInfo, getEquipmentByTracking} from "../../data/modules/equipment";
import type { AuthState } from "../../data/modules/auth";

type Props = {
  authState: AuthState,
  equipmentInfo: () => void,
  getEquipmentByTracking: ()=> void,
//  books: Array<Book>
};

type State = {
    regitemSubsubtypes: number, 
    regitemSubtypes: number, 
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
        trackingNo: 0
    };
  }
  componentDidMount() {
    this.props.getEquipmentByTracking();
  }


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  displayRegistrations() {
    const { registrations } = this.props;
    console.log("registrations")

    console.log(registrations)
    if (registrations) {
      const loadedregistrations = registrations.map(item => {
        return (
          <tr key={item.trackingNo}>
            <th scope="row">{item.trackingNo}</th>
            <td>{item.trackingNo}</td>
            </tr>
        );
      });

      return (
        <Container className="mt-2 col-md-12">
          <Table striped bordered>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>{loadedregistrations}</tbody>
          </Table>
        </Container>
      );
    }

    return null;
  }

  render() {
    const { authState } = this.props;
const{ regitemSubsubtypes, 
    regitemSubtypes, 
    trackingNo} = this.state
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
              <Label for="bookName" sm={2}>
                Book Name
              </Label>
              <Col sm={10}>
                <Input
                  type="bookName"
                  name="bookName"
                  id="bookName"
                  placeholder="Name of Book"
                 
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10 }}>
                <Button onClick={e => this.handleAddBook(e)}>Submit</Button>
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
    registrations: state.data
  };
}

export default connect(
  mapStateToProps,
  { equipmentInfo, getEquipmentByTracking }
)(EquipmentSwitch);
