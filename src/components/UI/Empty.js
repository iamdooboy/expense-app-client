import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LIGHT_DESIGN } from '../../theme';
import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

export const Empty = (props) => {
    return (
        <Box
            sx={{
                boxShadow: '4px 4px',
                border: '1px solid',
                color: 'primary.main',
                height: '70vh',
            }}>
            <Typography variant='h4' align='center' sx={{ paddingTop: '25%' }}>
                You have no {props.message}. Get started by adding your first{' '}
                {props.message}!
            </Typography>
        </Box>
    );
};
