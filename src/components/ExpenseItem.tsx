import {Expense} from "./types";
import {IconButton, ListItem, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


interface ExpenseItemProps{
    expense: Expense;
    removeExpense:(id:number)=>void;
}

export const ExpenseItem=({expense, removeExpense}:ExpenseItemProps)=>{
    return (
        <ListItem
            secondaryAction={
            <IconButton edge='end' aria-label='delete' onClick={()=>removeExpense(expense.id)}>
                <DeleteIcon />
            </IconButton>
            }
        >
            <ListItemText primary={`${expense.description}: ${expense.amount.toFixed(2)}`}/>
        </ListItem>
    )
}