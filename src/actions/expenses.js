import uuid from 'uuid';
import database from "../firebase/firebase"

// ADD_EXPENSE
export const addExpense = (expense) => {
  return{
    type: "ADD_EXPENSE",
    expense
  }
}

//sends an expense to firebase db and then dispatches our add expense action creator
export const startAddExpense = ({description = "", note = "", amount = 0, createdAt = 0}) => {
  return (dispatch) => {
    const expense = { description, note, amount, createdAt }

    return database.ref("expenses").push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}


// REMOVE_EXPENSE
export const removeExpense = (id) => {
  return{
    type: "REMOVE_EXPENSE",
    id
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => {
  return{
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
}

