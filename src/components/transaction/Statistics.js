import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import FormHelperText from '@mui/material/FormHelperText';
import Divider from '@mui/material/Divider';
import { CustomTextfield } from './CustomTextfield';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';

export const Statistics = (props) => {
    const { text, amount } = props.mostExpensive;

    function createData(title, data) {
        return { title, data };
    }
    const rows = [
        createData('Most expensive expense', amount),
        createData('Highest income', 1273.0),
        createData('Total number of expenses', 1273.0),
        createData('Total number of income', 1273.0),
    ];
    return (
        <Box
            sx={{
                bgcolor: 'background.secondary',
                boxShadow: '4px 4px',
                border: '1px solid',
                color: 'primary.main',
                overflow: 'hidden',
            }}
            marginTop='20px'>
            <Typography
                p='10px'
                color='text.primary'
                sx={{ fontWeight: 'bold', bgcolor: 'primary.header' }}>
                Quick Summary
            </Typography>

            {rows.map((row) => (
                <Accordion
                    square
                    sx={{
                        boxShadow: '0px 0px',
                        borderTop: '1px solid',
                        borderBottom: '1px solid',
                        borderColor: 'primary.main',
                    }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                            padding: 0,
                            paddingX: '10px',
                        }}>
                        <Typography
                            sx={{
                                width: '80%',
                                fontSize: 12,
                            }}>
                            {row.title}
                        </Typography>
                        <Typography
                            align='right'
                            sx={{
                                width: '20%',
                                fontSize: 12,
                            }}>
                            {row.data}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: '0px 10px 20px;' }}>
                        <Stack
                            direction='row'
                            divider={
                                <Divider orientation='vertical' flexItem />
                            }
                            spacing={2}>
                            <Typography>Pottery Painting</Typography>
                            <Typography align='right'>8/16/2022</Typography>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};
