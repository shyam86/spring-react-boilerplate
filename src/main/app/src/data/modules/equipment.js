// @flow
import axios from "axios";
import type { Thunk } from "../";
import * as Names from "../../constants/names";

export type RegistrationItems = { regitemSubsubtypes: number, 
    regitemSubtypes: number, 
    trackingNo: number
};

type State = {
  status: "stale" | "loaded",
  data: registrationItems[]
};

type EquipmentByTrackingAction = {
  type: "GET_EQUIPMENT_BY_TRACKING",
  registrationItems: RegistrationItems[]
};

type Action = EquipmentByTrackingAction;

const defaultState: State = {
  status: "stale",
  data: []
};

export default function reducer(
  state: State = defaultState,
  action: Action
): State {
  switch (action.type) {
    case "GET_EQUIPMENT_BY_TRACKING":
      return {
        status: "loaded",
        data: action.registrationItems
      };

    default:
      return state;
  }
}

export function equipmentInfo(registrationItems: registrationItems[]): EquipmentByTrackingAction {
  return {
    type: "GET_EQUIPMENT_BY_TRACKING",
    registrationItems
  };
}

export function getEquipmentByTracking(): Thunk<EquipmentByTrackingAction> {
  // $FlowFixMe Flow complaining about the localstorage being null
  let headerToken = `Bearer ${localStorage.getItem(Names.JWT_TOKEN)}`;
  console.log(headerToken);
  return dispatch => {
    axios
      .get(`/api/registrations/registrations`, {
        headers: { Authorization: headerToken }
      })
      .then(
        success => {dispatch(equipmentInfo(success.data))
        
        console.log(success.data)},
        failure => console.log(failure)
      );
  };
}

