import React, { Component } from "react";
import PropTypes from "prop-types";
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
import {
  equipmentInfo,
  getEquipmentByTracking,
  getEquipmentByTrackingNo,
  updateRegTypesByTrackingNo
} from "../../data/modules/equipment";

import type {
  SearchByTracking,
  UpdateRegdetails
} from "../../data/modules/books";

type Props = {
  updateRegdetails: (updateRegdetails: UpdateRegdetails) => void
};

const regsubtypes = [
  { label: "Apple", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Netflix", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 }
];
class UpdateEquipment extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      regitemSubsubtypes: 0,
      regitemSubtypes: 0,
      certificateNo: 0,
      trackingNo: 0
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    console.log("this.state.value");

    console.log(this.state.value);
    console.log(this.getRegSubType.value);
    console.log(this.getRegSubSubType.value);
  };

  onSubmit = e => {
    e.preventDefault();
    const regitemSubtypes = this.getRegSubType.value;
    const regitemSubsubtypes = this.getRegSubSubType.value;
    const trackingNo = this.props.registrations.trackingNo;
    const updateRegdetails: UpdateRegdetails = {
      trackingNo,
      regitemSubtypes,
      regitemSubsubtypes
    };
    console.log(updateRegdetails);
    this.props.updateRegTypesByTrackingNo(updateRegdetails);
  };

  displayreg() {
    const { registrations } = this.props;
    console.log("update weq");

    console.log(registrations);
    if (registrations) {
      return (
        <div>
          <div className="row">
            <Container className="mt-2 col-md-12">
              <h4 align="center">Switch equipment</h4>

              <div style={{ marginTop: 0 }}>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Tracking No: </label>
                    <input
                      id="trackingNo"
                      type="number"
                      disabled="disabled"
                      className="form-control"
                      defaultValue={registrations.trackingNo}
                    />
                  </div>

                  {/* <div className="form-group">
                    <label>Reg Type: </label>
                    <input
                      id="regitemSubtypes"
                      type="number"
                      className="form-control"
                      ref={input => (this.getRegSubType = input)}
                      onChange={this.onChange}
                      defaultValue={registrations.regitemSubtypes}
                    />
                  </div> 
                  <div className="form-group">
                    <label>Reg SubType: </label>
                    <input
                      id="regitemSubsubtypes"
                      type="number"
                      className="form-control"
                      ref={input => (this.getRegSubSubType = input)}
                      onChange={this.onChange}
                      defaultValue={registrations.regitemSubsubtypes}
                    />
                  </div>
*/}
                  <div className="form-group">
                    <label>Reg Type: </label>
                    <select
                      type="select"
                      className="form-control"
                      id="regitemSubtypes"
                      defaultValue={registrations.regitemSubtypes}
                      ref={select => (this.getRegSubType = select)}
                      onChange={this.onChange}
                    >
                      <option value="1">Compression Ignition (Diesel)</option>
                      <option value="2">Spark Ignition</option>
                      <option value="3">
                        Sand & Gravel Screening and Rock Crushing
                      </option>
                      <option value="4">Concrete Batch Plant</option>
                      <option value="5">Abrasive Blasting</option>
                      <option value="7">Tactical Support Equipment</option>
                      <option value="8">Miscellaneous</option>
                      <option value="9">Pile Driver</option>
                      <option value="10">Wood Processing</option>
                      <option value="11">Storage Silo</option>
                      <option value="12">Rock Drill</option>
                      <option value="13">Slurry Mixer</option>
                      <option value="14">
                        Road Surface Processing (Pavement Crushing & Recycling)
                      </option>
                      <option value="15">Converted Data</option>
                      <option value="16">Unknown</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Reg Sub Sub Type: </label>
                    <select
                      type="select"
                      className="form-control"
                      id="regitemSubsubtypes"
                      defaultValue={registrations.regitemSubsubtypes}
                      ref={select => (this.getRegSubSubType = select)}
                      onChange={this.onChange}
                    >
                      <option value="1">Tub Grinder</option>
                      <option value="2">Trommel Screen</option>
                      <option value="3">Hammer Mill</option>
                      <option value="4">Horizontal Grinder</option>
                      <option value="5">Wood Chipper</option>
                      <option value="8">Transfer Conveyor</option>
                      <option value="10">Compost Turner</option>
                      <option value="11">Shredder</option>
                      <option value="12">Cement Slurry Mixer</option>
                      <option value="13">Lime Slurry Mixer</option>
                      <option value="14">Crushing plant</option>
                      <option value="15">Screening plant</option>
                      <option value="16">Grinder </option>
                      <option value="17">Planer</option>
                      <option value="18">Truck Mix</option>
                      <option value="19">Central Mix</option>
                      <option value="20">Trenching Machine</option>
                      <option value="21">Cold Planer</option>
                      <option value="22">Crushing and screening plant</option>
                      <option value="23">Wood/Misc Processing Screen</option>
                      <option value="24">Milling Machine</option>
                      <option value="25">Pavement Grinder</option>
                      <option value="26">Conveyor</option>
                      <option value="27">Aggregate Slurry Mixer</option>
                      <option value="28">Reclaimer Machine</option>
                      <option value="29">Mixing Plant</option>
                      <option value="30">Stump Cutter</option>
                      <option value="31">Soil Stabilizer</option>
                      <option value="32">Radial Stacker</option>
                      <option value="33">Blending Plant</option>
                      <option value="34">Rip Rap Plant</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <input
                      type="submit"
                      value="Update"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </Container>
          </div>
        </div>
      );
    }
  }
  render() {
    const { authState } = this.props;
    const {
      regitemSubsubtypes,
      regitemSubtypes,
      certificateNo,
      trackingNo
    } = this.state;

    return <div>{this.displayreg()}</div>;
  }
}

const mapStateToProps = state => ({
  authState: state.auth,
  registrations: state.registrationItems.data
});

export default connect(
  mapStateToProps,
  { getEquipmentByTrackingNo, updateRegTypesByTrackingNo }
)(UpdateEquipment);
