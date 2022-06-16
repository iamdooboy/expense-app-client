import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LIGHT_DESIGN } from '../../theme';
import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const StyledBox = styled(Box)({
    '&.MuiBox-root ': {
        height: '70vh',
        ...LIGHT_DESIGN,
    },
});
export const Empty = () => {
    return (
        <StyledBox>
            <Typography variant='h4' align='center' sx={{ paddingTop: '25%' }}>
                You have no budget. Get started by adding your first budget!
            </Typography>
        </StyledBox>
    );
};
