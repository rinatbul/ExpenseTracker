import {Balance} from "./Balance";
import {ExpenseForm} from "./ExpenseForm";
import {ExpenseList} from "./ExpenseList";
import {useState} from "react";
import {Expense} from "./types";
import {Container, Paper, Typography} from "@mui/material";

export const ExpenseTracker=()=>{
    const [expenses, setExpenses] = useState<Expense[]>([])

    const getBalance=()=>{
        return expenses.reduce((total,expense)=>total+expense.amount, 0)
    };

    const addExpense=(description:string, amount:number)=>{
        const newExpense: Expense={
            id: Date.now(),
            description,
            amount
        };
        setExpenses([...expenses, newExpense])
    }

    const removeExpense =(id:number)=>{
        setExpenses(expenses.filter(expense=>expense.id !==id))
    }

    return(
        <Container>
            <Paper elevation={3} style={{padding:'20px', marginTop:'20px'}}>
                <Typography variant='h4' gutterBottom>
                    Expense Tracker
                </Typography>
                <Balance balance={getBalance()}/>
                <ExpenseForm addExpense={addExpense}/>
                <ExpenseList expenses={expenses} removeExpense={removeExpense}/>
            </Paper>
        </Container>
    )
}