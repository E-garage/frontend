import axios from "axios";

const url = process.env.REACT_APP_API_URL;

const apiCards = axios.create({
  baseURL: `${url}/family-cards`,
});

export default {
  getAllCards: () => apiCards.get("/"),
  addCard: card => apiCards.post("/", card),
  updateCard: (id, card) => apiCards.put(`/${id}`, card),
  deleteCard: id => apiCards.delete(`/${id}`),
  toggleActive: (id, isActive) =>
    apiCards.patch(`/${id}`, {
      isActive: !isActive,
    }),
};
