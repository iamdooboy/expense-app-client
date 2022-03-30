import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import { BudgetItem } from './BudgetItem';

export const BudgetList = (props) => {
    return (
        <List>
            {props?.budgets?.map((budget) => (
                <BudgetItem key={budget._id} title={budget.title} amount={0} />
            ))}
        </List>
    );
};
