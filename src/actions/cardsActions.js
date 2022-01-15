import {
  SET_CARDS,
  ADD_CARD,
  REMOVE_CARD,
  EDIT_CARD,
  TOGGLE_ACTIVE,
} from "./actionTypes";

export const setCards = cards => {
  return { type: SET_CARDS, payload: { cards } };
};

export const addCard = card => {
  return { type: ADD_CARD, payload: { card } };
};

export const removeCard = id => {
  return { type: REMOVE_CARD, payload: { id } };
};

export const editCard = (id, name, description) => {
  return { type: EDIT_CARD, payload: { id, name, description } };
};

export const toggleActive = id => {
  return { type: TOGGLE_ACTIVE, payload: { id } };
};
