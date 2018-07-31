import uuid from 'uuid';
import database from "../firebase/firebase"

// ADD_EXPENSE to our local redux
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

// REMOVE_EXPENSE from our local redux
export const removeExpense = (id) => {
  return{
    type: "REMOVE_EXPENSE",
    id
  }
}


//removes an expense from firebase and dispatches our remove expense action creator
export const startRemoveExpense = (id) => {
  return(dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense(id))
    })
  }
}


// EDIT_EXPENSE in our local redux
export const editExpense = (id, updates) => {
  return{
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
}

//edit an expense on firebase then dispatch our edit expense action creator
export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates))
    })
  }
}

//SET_EXPENSES to be displayed when the application loads
export const setExpenses = (expenses) => {
  return{
    type: "SET_EXPENSES",
    expenses
  }
}


//retrieves all expenses from firebase then dospatches our set expenses action creator
export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref("expenses").once("value").then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })

      dispatch(setExpenses(expenses))
    })
  }
}
