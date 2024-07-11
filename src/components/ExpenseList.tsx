import {ExpenseItem} from "./ExpenseItem";
import {Expense} from "./types";
import {List} from "@mui/material";

interface ExpenseList{
    expenses:Expense[],
    removeExpense:(id:number)=>void
}

export const ExpenseList=({expenses, removeExpense}:ExpenseList)=>{
    return (
        <List>
            {expenses.map(expense=>(
                <ExpenseItem
                    key={expense.id}
                    expense={expense}
                    removeExpense={removeExpense}
                />
            ))}
        </List>
    )
}