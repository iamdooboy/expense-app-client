import React from 'react';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export const CustomIconButton = styled(IconButton)({
    // '& .MuiButtonBase-root-MuiIconButton-root': {
    //     color: 'red',
    // },
    'margin': 0,
    '&:hover': {
        backgroundColor: 'transparent',
    },
});

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
                    paddingLeft: '20px',
                    marginRight: '0px',
                }}>
                <Typography variant='h6'>{props.title}</Typography>
                <Box>
                    <Typography variant='h6'>{`$${props.amount.toFixed(
                        2
                    )}`}</Typography>
                </Box>
            </ListItemButton>
            <CustomIconButton
                marginRight='0px'
                edge='end'
                aria-label='delete'
                sx={{ padding: '20px' }}>
                <DeleteOutlineSharpIcon />
            </CustomIconButton>
        </ListItem>
    );
};
