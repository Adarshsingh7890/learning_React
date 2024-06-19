import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { deleteItem, fetchData } from '../helpers'
import Table from '../components/Table'
import { toast } from 'react-toastify'

export async function expensesLoader() {
    
    const expenses =  fetchData("expenses")
    return { userName, budgets,expenses }
}

export  const expenseAction = async() => {

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data)

  if (_action === "createExpense") {
    try {
      deleteItem({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      })
      return toast.success(`Expenses ${values.newExpense} created!`)
    } catch (e) {
      throw new Error("There was a problem creating your Expenses.")
    }
  }
}
function ExpensesPage() {
    const {expenses} = useLoaderData();

  return (
    <div className="grid-lg">
        <h1>All Expenses</h1>
        {
            expenses && expenses.length > 0?(
                <div className="grid-md">
                    <h2>Recent Expenses <small>({expenses.length} total)</small></h2>
                    <table expenses = {expenses}/>

                </div>
            ): (
                <p>No Expenses to Show</p>
            )
        }
    </div>
  )
}

export default ExpensesPage