import React from 'react';
import List from '@mui/material/List';
import { BudgetItem } from './BudgetItem';

export const BudgetList = (props) => {
    return (
        <List>
            {props?.budgets?.map((budget) => (
                <BudgetItem
                    key={budget._id}
                    title={budget.title}
                    amount={0}
                    id={budget._id}
                />
            ))}
        </List>
    );
};
