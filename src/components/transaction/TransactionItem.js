import React from 'react';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export const TransactionItem = (props) => {
    return (
        <ListItem>
            <ListItemButton>
                <Typography variant='h4'>{props.type}</Typography>
                <Typography variant='h5'>{props.text}</Typography>
                <Typography variant='h6'>{props.amount}</Typography>
            </ListItemButton>
        </ListItem>
    );
};
