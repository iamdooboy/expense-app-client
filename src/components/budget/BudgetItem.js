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
import EditSharpIcon from '@mui/icons-material/EditSharp';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import {
    updateBudgetTitleAction,
    updateBudgetEditAction,
} from '../../redux/slices/budgets/budgetSlices';
import { changeDisableMode } from '../../redux/slices/budgets/disableSlice';
import InputBase from '@mui/material/InputBase';

export const CustomIconButton = styled(IconButton)({
    'margin': 0,
    '&:hover': {
        backgroundColor: 'transparent',
    },
});

export const BudgetItem = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let budgetObj;

    const updateBudget = (budgetTitle) => {
        if (budgetTitle) {
            budgetObj = {
                id: props.id,
                title: budgetTitle,
            };

            dispatch(updateBudgetTitleAction(budgetObj));
            dispatch(
                updateBudgetEditAction({
                    id: props.id,
                    edit: !props.edit,
                })
            );
            dispatch(
                changeDisableMode({
                    disableMode: !props.disable,
                })
            );
        }
    };

    const cancelEdit = () =>
        dispatch(
            changeDisableMode({
                disableMode: !props.disable,
            })
        );

    const handleClick = () => {
        const data = {
            _id: props.id,
            title: props.title,
            amount: props.amount,
        };
        localStorage.setItem('budgetId', JSON.stringify(data));
        navigate('/transactions', {
            replace: false,
        });
    };

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            updateBudget(event.target.value);
        }
    };
    const handleBlur = (event) => {
        updateBudget(event.target.value);
    };

    return (
        <>
            {props.edit ? (
                <ListItem
                    sx={{
                        transform: 'translateY(4px) translateX(4px)',
                        boxShadow: 'none',
                        backgroundColor: 'primary.main',
                    }}>
                    <InputBase
                        fullWidth
                        onBlur={handleBlur}
                        onKeyDown={handleEnter}
                        defaultValue={props.title}
                        sx={{ color: 'text.selected', fontSize: '1.25rem' }}
                        autoFocus
                    />
                    <CustomIconButton
                        onClick={(e) => cancelEdit}
                        sx={{
                            paddingLeft: '20px',
                            paddingRight: '10px',
                            color: 'text.selected',
                        }}>
                        <HighlightOffSharpIcon />
                    </CustomIconButton>
                    <CustomIconButton
                        sx={{
                            paddingLeft: '10px',
                            paddingRight: '6px',
                            color: 'text.selected',
                        }}>
                        <CheckCircleOutlineSharpIcon />
                    </CustomIconButton>
                </ListItem>
            ) : (
                <ListItem
                    disablePadding
                    sx={{
                        pointerEvents: props.disable ? 'none' : 'auto',
                    }}>
                    <ListItemButton
                        disabled={props.disable}
                        onClick={handleClick}
                        disableRipple
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
                        sx={{
                            paddingLeft: '20px',
                            paddingRight: '10px',
                            color: props.disable && 'primary.disable',
                        }}>
                        <DeleteOutlineSharpIcon />
                    </CustomIconButton>
                    <CustomIconButton
                        onClick={() => {
                            dispatch(
                                updateBudgetEditAction({
                                    id: props.id,
                                    edit: !props.edit,
                                })
                            );
                            dispatch(
                                changeDisableMode({
                                    disableMode: !props.disable,
                                })
                            );
                        }}
                        edge='end'
                        aria-label='edit'
                        sx={{
                            paddingLeft: '10px',
                            paddingRight: '20px',
                            color: props.disable && 'primary.disable',
                        }}>
                        <EditSharpIcon />
                    </CustomIconButton>
                </ListItem>
            )}
        </>
    );
};
