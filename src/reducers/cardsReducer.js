import {
  SET_CARDS,
  ADD_CARD,
  REMOVE_CARD,
  EDIT_CARD,
  TOGGLE_ACTIVE,
} from "../actions/actionTypes";

const initialState = {
  cards: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CARDS:
      return { cards: action.payload.cards };
    case ADD_CARD:
      return { cards: [...state.cards, action.payload.card] };
    case REMOVE_CARD:
      return {
        cards: state.cards.filter(card => card.id !== action.payload.id),
      };
    case EDIT_CARD:
      console.log(action.payload)
      return {
        cards: state.cards.map(card =>
          card.id === action.payload.id
            ? {
                ...card,
                name: action.payload.name,
                description: action.payload.description,
              }
            : card
        ),
      };
    case TOGGLE_ACTIVE:
      return {
        cards: state.cards.map(card =>
          card.id === action.payload.id
            ? { ...card, isActive: !card.isActive }
            : card
        ),
      };
    default:
      return state;
  }
}
