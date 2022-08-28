const createSlice = require("@reduxjs/toolkit").createSlice;
const cakeActions = require("../cake/cakeSlice").cakeActions;

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
    // extraReducers: {
    //   ["cake/ordered"]: (state) => {
    //     state.numOfPizzas--;
    //   },
    // },
    extraReducers: (builder) => {
      builder.addCase(cakeActions.ordered, (state) => {
        state.numOfPizzas--;
      });
    },
  },
});

module.exports = pizzaSlice;
