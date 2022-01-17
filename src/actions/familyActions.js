import {
  SET_FAMILIES,
  SET_FAMILY,
  ADD_FAMILY,
  REMOVE_FAMILY,
  SET_FAMILY_CARS,
  ADD_FAMILY_CAR,
  REMOVE_FAMILY_CAR,
  UPDATE_FAMILY_CAR,
  EDIT_FAMILY,
  ADD_MEMBER,
  REMOVE_MEMBER
} from "./actionTypes";

export const setFamilies = families => {
  return { type: SET_FAMILIES, payload: { families } };
};

export const setFamily = family => {
  return { type: SET_FAMILY, payload: { family } };
};

export const addFamily = family => {
  return { type: ADD_FAMILY, payload: { family } };
};

export const removeFamily = id => {
  return { type: REMOVE_FAMILY, payload: { id } };
};

export const editFamily = (id, name, description) => {
  return { type: EDIT_FAMILY, payload: { id, name, description } };
};


export const addMember = member => {
  return { type: ADD_MEMBER, payload: { member } }

}

export const removeMember = id => {
  return { type: REMOVE_MEMBER, payload: { id } }
}

export const setFamilyCars = cars => {
  return { type: SET_FAMILY_CARS, payload: { cars } }
}

export const addFamilyCar = car => {
  return { type: ADD_FAMILY_CAR, payload: { car } }
}

export const removeFamilyCar = car => {
  return { type: REMOVE_FAMILY_CAR, payload: { car } }
}

export const updateFamilyCar = car => {
  return { type: UPDATE_FAMILY_CAR, payload: { car } } 
}
