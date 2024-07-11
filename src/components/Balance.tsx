import {Typography} from "@mui/material";

interface BalanceProps{
    balance:number
}

export const Balance=({balance}:BalanceProps)=>{
    return(
        <Typography variant="h5" gutterBottom>
            Balance: ${balance.toFixed(2)}
        </Typography>
    )
}