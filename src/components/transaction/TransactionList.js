import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../../theme';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { SearchAppBar } from '../../components/budget/SearchAppBar';
import List from '@mui/material/List';
import banner_light from '../../img/banner_light.svg';
import { TransactionItem } from './TransactionItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
    CustomTableHead,
    StyledTableCell,
    StyledTableRow,
    StyledTable,
} from '../../UI/CustomTableHead';

export const TransactionList = (props) => {
    return (
        <Grid item xs={9}>
            <Box sx={{ height: '100vh', bgcolor: 'background' }}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Type</StyledTableCell>
                            <StyledTableCell align='right'>
                                Title
                            </StyledTableCell>
                            <StyledTableCell align='right'>
                                Date
                            </StyledTableCell>
                            <StyledTableCell align='right'>
                                Amount
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <Box sx={{ height: '10px', bgcolor: 'transparent' }} />
                    <TableBody>
                        {props?.transactions?.map((transaction) => (
                            <TransactionItem
                                key={transaction._id}
                                type={transaction.type}
                                text={transaction.text}
                                amount={transaction.amount}
                                date={transaction.createdAt}
                            />
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Grid>
    );
};
