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
                    amount={budget.amount}
                    id={budget._id}
                    edit={budget.edit}
                    disable={props.disable}
                />
            ))}
        </List>
    );
};
