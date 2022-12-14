const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const pizzaActions = require("./features/pizza/pizzaSlice").actions;
const getUsers = require("./features/user/userSlice").getUsers;

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  // console.log("Updated State", store.getState());
});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(pizzaActions.ordered());
// store.dispatch(pizzaActions.ordered());
// store.dispatch(pizzaActions.ordered());
// store.dispatch(pizzaActions.restocked(3));

store.dispatch(getUsers());

unsubscribe();
