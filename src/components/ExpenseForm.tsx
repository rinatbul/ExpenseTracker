import {useState} from "react";
import {Box, Button, TextField} from "@mui/material";

interface ExpenseFormProps{
    addExpense:(description: string, amount:number)=>void;
}

export const ExpenseForm=({addExpense}:ExpenseFormProps)=>{
    const[description, setDescription] = useState('')
    const[amount, setAmount] = useState(0);

    const onSubmitHandler=(e: React.FormEvent)=>{
        e.preventDefault();
        if (description.trim() && amount !==0){
            addExpense(description,amount);
            setDescription('')
            setAmount(0)
        }
    }

    return (
        <Box component='form' onSubmit={onSubmitHandler} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            <TextField
                label='Description'
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                variant='outlined'
                fullWidth
            />
            <TextField
                label='Amount'
                value={amount}
                onChange={(e)=>setAmount(Number(e.target.value))}
                variant='outlined'
                type='number'
            />
            <Button type='submit' variant='contained' color='primary'>
                Add Expense
            </Button>
        </Box>
    )
}