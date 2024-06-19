import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { fetchData } from '../helpers'
import Table from '../components/Table'

export function expensesLoader() {
    
    const expenses = fetchData("expenses")
    return { userName, budgets,expenses }
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