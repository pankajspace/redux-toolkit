const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const pizzaReducer = require("../features/pizza/pizzaSlice").reducer;

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    pizza: pizzaReducer,
  },
});

module.exports = store;
