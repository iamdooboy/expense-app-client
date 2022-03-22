import React from 'react';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const BudgetItem = (props) => {
    return (
        <ListItem
            sx={{
                pt: '8px',
                pb: '8px',
            }}
            disablePadding>
            <ListItemButton
                disableGutters
                sx={{
                    'display': 'flex',
                    'alignItems': 'center',
                    'justifyContent': 'space-between',
                    'padding': '20px',
                    'marginRight': '0px',
                    '&:hover': {
                        color: 'white',
                    },
                }}>
                <Typography variant='h6'>{props.title}</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingRight: '15px',
                        marginRight: '0px',
                    }}>
                    <Typography variant='h6'>{`$${props.amount.toFixed(
                        2
                    )}`}</Typography>
                </Box>
            </ListItemButton>
        </ListItem>
    );
};
