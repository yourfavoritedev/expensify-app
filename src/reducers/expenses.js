// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
    //use filter, an array method that checks each item in the array for a certain condition.
    //we call each item an expense and check if it's id field matches our action id.
      return state.filter((expense) => {
        return expense.id !== action.id //if false (same id), then do not include that item in our new state.
      })
    case 'EDIT_EXPENSE':
    //use map to go over each expense, checking if the expense.id matches our action.id
    //if true then create a new state, overriding the properties with the desired updates
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};
