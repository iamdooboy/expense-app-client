import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { CustomTextfield } from './CustomTextfield';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';

export const Statistics = (props) => {
    const {
        mostExpensive,
        cheapest,
        highest,
        lowest,
        numberOfExpenses,
        numberOfIncomes,
    } = props.summary;

    console.log(mostExpensive);

    function createData(title, data) {
        return { title, data };
    }
    const rows = [
        createData('Most expensive expense', mostExpensive),
        createData('Cheapest expense', cheapest),
        createData('Highest income', highest),
        createData('Lowest income', lowest),
    ];

    const numberOfTransactionType = [
        createData('Total number of expenses', numberOfExpenses),
        createData('Total number of incomes', numberOfIncomes),
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

            {rows.map((row) => {
                const date = new Date(row.data.date).toLocaleDateString(
                    'en-US'
                );
                const amount = row.data.amount.toFixed(2);
                const text = row.data.text;
                return (
                    <Accordion
                        key={row.title}
                        square
                        sx={{
                            boxShadow: '0px 0px',
                            borderTop: '1px solid',
                            borderBottom: '1px solid',
                            borderColor: 'primary.main',
                        }}>
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon
                                    sx={{ color: 'primary.separator' }}
                                />
                            }
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
                                {amount}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: '0px 10px 20px;' }}>
                            <Stack
                                direction='row'
                                divider={
                                    <Divider
                                        orientation='vertical'
                                        flexItem
                                        sx={{
                                            borderColor: 'primary.separator',
                                        }}
                                    />
                                }
                                spacing={2}>
                                <Typography>{text}</Typography>
                                <Typography align='right'>{date}</Typography>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
            {numberOfTransactionType.map((type) => (
                <Accordion
                    key={type.title}
                    square
                    sx={{
                        boxShadow: '0px 0px',
                        borderTop: '1px solid',
                        borderBottom: '1px solid',
                        borderColor: 'primary.main',
                    }}>
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon
                                sx={{ color: 'primary.separator' }}
                            />
                        }
                        sx={{
                            padding: 0,
                            paddingX: '10px',
                        }}>
                        <Typography
                            sx={{
                                width: '80%',
                                fontSize: 12,
                            }}>
                            {type.title}
                        </Typography>
                        <Typography
                            align='right'
                            sx={{
                                width: '20%',
                                fontSize: 12,
                            }}>
                            {type.data}
                        </Typography>
                    </AccordionSummary>
                </Accordion>
            ))}
        </Box>
    );
};
