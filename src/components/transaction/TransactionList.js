import React from 'react';
import { StyledTableCell, StyledTableRow } from '../../UI/CustomTableHead';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TransactionItem } from './TransactionItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export const TransactionList = (props) => {
    return (
        <Grid item xs={9}>
            <Box sx={{ bgcolor: 'background.default' }}>
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
                            <StyledTableCell align='right'>
                                Actions
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell
                                sx={{
                                    borderBottom: 'transparent',
                                    padding: '5px',
                                }}
                            />
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        {props?.transactions?.map(
                            (transaction) =>
                                !props.loading && (
                                    <TransactionItem
                                        key={transaction._id}
                                        type={transaction.type}
                                        text={transaction.text}
                                        amount={transaction.amount}
                                        date={transaction.createdAt}
                                        id={transaction._id}
                                        edit={transaction.edit}
                                        disable={props.disable}
                                    />
                                )
                        )}
                    </TableBody>
                </Table>
            </Box>
        </Grid>
    );
};
