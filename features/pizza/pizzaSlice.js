const createSlice = require("@reduxjs/toolkit").createSlice;

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: { numOfPizzas: 10 },
  reducers: {
    ordered: (state) => {
      state.numOfPizzas--;
    },
    restocked: (state, action) => {
      state.numOfPizzas += action.payload;
    },
  },
});

module.exports = pizzaSlice;
