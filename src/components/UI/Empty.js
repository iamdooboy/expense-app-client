import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

export const Empty = (props) => {
    console.log('empty');
    return (
        <Box
            sx={{
                boxShadow: '4px 4px',
                border: '1px solid',
                color: 'primary.main',
                height: '76vh',
                backgroundColor: 'background.secondary',
            }}>
            <Typography variant='h4' align='center' sx={{ paddingTop: '25%' }}>
                You have no {props.message}. Get started by adding your first{' '}
                {props.message}!
            </Typography>
        </Box>
    );
};
