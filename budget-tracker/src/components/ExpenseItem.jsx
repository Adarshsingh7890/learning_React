import React from 'react'
import { formatCurrency, formatDateToLocaleString } from '../helpers'
import { getAllMatchingItems } from '../helpers';
import { Link } from 'react-router-dom';
function ExpenseItem({expense, budgets}) {
    const matchingBudget = budgets.find(budget => budget.id === expense.budgetId);
    const budget = getAllMatchingItems({
        category: "budgets",
        key:"id",
        value :expense.budgetId
    })[0];
  return (
    <>
        <td>{expense.name}</td>
        <td>{formatCurrency(expense.amount)}</td>
        <td>{formatDateToLocaleString( expense.createdAt)}</td>
        <td><Link to = {`/budget/${budget.id}`} style = {{"--accent": budget.color}}>{budget.name}</Link></td>
        <td>fetcher</td>
    </>
  )
}

export default ExpenseItem