import React from 'react';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';

export const BudgetItem = (props) => {
    return (
        <ListItem
            disablePadding
            sx={{
                boxShadow: '4px 4px',
                border: '1px solid',
                margin: '10px 0 10px',
                color: 'primary.main',
            }}>
            <ListItemButton
                disableGutters
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px',
                    marginRight: '0px',
                }}>
                <Typography variant='h6'>{props.title}</Typography>
                <Box>
                    <Typography variant='h6'>{`$${props.amount.toFixed(
                        2
                    )}`}</Typography>
                </Box>
            </ListItemButton>
        </ListItem>
    );
};
