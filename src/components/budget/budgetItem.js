import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBudgetAction } from '../../redux/slices/budgets/budgetSlices';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import IconButton from '@mui/material/IconButton';

export const CustomIconButton = styled(IconButton)({
    'margin': 0,
    '&:hover': {
        backgroundColor: 'transparent',
    },
});

export const BudgetItem = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <ListItem
            disablePadding
            sx={{
                height: '60px',
                boxShadow: '4px 4px',
                border: '1px solid',
                margin: '10px 0 10px',
                color: 'primary.main',
            }}>
            <ListItemButton
                onClick={() =>
                    navigate('/transactions', {
                        replace: false,
                        state: {
                            budgetId: props.id,
                            title: props.title,
                        },
                    })
                }
                disableGutters
                sx={{
                    'height': '60px',
                    'display': 'flex',
                    'alignItems': 'center',
                    'justifyContent': 'space-between',
                    'paddingLeft': '20px',
                    'marginRight': '0px',
                    ':hover': {
                        backgroundColor: 'transparent',
                    },
                }}>
                <Typography variant='h6'>{props.title}</Typography>
                <Box>
                    <Typography variant='h6'>{`$${props.amount.toFixed(
                        2
                    )}`}</Typography>
                </Box>
            </ListItemButton>
            <CustomIconButton
                onClick={() => dispatch(deleteBudgetAction(props.id))}
                edge='end'
                aria-label='delete'
                sx={{ padding: '20px' }}>
                <DeleteOutlineSharpIcon />
            </CustomIconButton>
        </ListItem>
    );
};
