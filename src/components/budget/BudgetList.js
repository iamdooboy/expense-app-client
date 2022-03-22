import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import { BudgetItem } from './BudgetItem';

export const BudgetList = (props) => {
    return (
        <Container component='main' maxWidth='md'>
            <List disableGutters disablePadding>
                {props.budgetList &&
                    props.budgetList.docs.map((budget) => (
                        <BudgetItem
                            title={budget.title}
                            amount={0}
                            id={budget._id}
                        />
                    ))}
            </List>
        </Container>
    );
};
