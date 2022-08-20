import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { TableHeader } from './TableHeader';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import { TableToolbar } from './TableToolBar';
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import {
    deleteTransactionAction,
    updateTransactionEditAction,
} from '../../redux/slices/transactions/transactionSlices';
import { useDispatch, useSelector } from 'react-redux';
import { changeDisableMode } from '../../redux/slices/transactions/disableSlice';
import { updateEditTransactionData } from '../../redux/slices/transactions/editTransactionSlice';

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: 'primary.main',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },

    'border': '1px solid',
    'boxShadow': '4px 4px',
}));

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

const CustomIconButton = styled(IconButton)({
    'margin': 0,
    '&:hover': {
        backgroundColor: 'transparent',
    },
});

export const TableContent = (props) => {
    const dispatch = useDispatch();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('title');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(25);

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            //does not exist
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            //first
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            //last
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        console.log(event.target.checked);
        if (event.target.checked) {
            const newSelecteds = props.transactions.map((n) => n._id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const deleteHandler = (id, edit) => {
        console.log(id);
        if (edit) {
            dispatch(
                updateTransactionEditAction({
                    id: id,
                    edit: false,
                })
            );
        }
        dispatch(
            changeDisableMode({
                disableMode: !props.disable,
            })
        );
        dispatch(deleteTransactionAction(id));
    };

    const onEditHandler = (data, selected) => {
        const { _id, text, amount, type, createdAt } = data;
        // if (selected) {
        //     dispatch(
        //         updateEditTransactionData({
        //             id: '',
        //             type: '',
        //             text: '',
        //             amount: '',
        //             date: '',
        //             edit: '',
        //         })
        //     );
        //     return;
        // }
        dispatch(
            updateTransactionEditAction({
                id: _id,
                edit: true,
            })
        );
        dispatch(
            updateEditTransactionData({
                id: _id,
                text: text,
                amount: amount,
                type: type,
                date: createdAt,
                edit: true,
            })
        );
    };

    const cancelEditTransaction = (id) => {
        dispatch(
            updateTransactionEditAction({
                id: id,
                edit: false,
            })
        );
    };

    return (
        <Box
            sx={{
                width: '100%',
                border: '1px solid',
                boxShadow: '4px 4px',
                color: 'primary.main',
            }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableToolbar
                    count={props.transactions.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    numSelected={selected.length}
                />
                <TableContainer>
                    <Table sx={{ minWidth: 750 }}>
                        <TableHeader
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={props.transactions.length}
                        />

                        <TableBody>
                            {props.transactions
                                .slice()
                                .sort(getComparator(order, orderBy))
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row._id);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    const date = new Date(
                                        row.createdAt
                                    ).toLocaleDateString('en-US');
                                    return (
                                        <TableRow
                                            sx={{
                                                '&.Mui-selected': {
                                                    'backgroundColor':
                                                        'primary.main',
                                                    ':hover': {
                                                        backgroundColor:
                                                            'primary.main',
                                                    },
                                                },
                                            }}
                                            role='checkbox'
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row._id}
                                            selected={isItemSelected}>
                                            <TableCell
                                                onClick={(event) =>
                                                    handleClick(event, row._id)
                                                }
                                                padding='checkbox'
                                                sx={{
                                                    borderColor: isItemSelected
                                                        ? 'primary.main'
                                                        : 'primary.separator',
                                                }}>
                                                <Checkbox
                                                    sx={{
                                                        'color': 'text.primary',
                                                        '&.Mui-checked': {
                                                            color: 'text.selected',
                                                        },
                                                    }}
                                                    checked={isItemSelected}
                                                />
                                            </TableCell>
                                            <TableCell
                                                onClick={(event) =>
                                                    handleClick(event, row._id)
                                                }
                                                sx={{
                                                    borderColor: isItemSelected
                                                        ? 'primary.main'
                                                        : 'primary.separator',
                                                }}
                                                component='th'
                                                id={labelId}
                                                scope='row'
                                                padding='none'>
                                                {row.type === 'expense' ? (
                                                    <ArrowCircleDownSharpIcon
                                                        sx={{
                                                            color: 'error.main',
                                                        }}
                                                    />
                                                ) : (
                                                    <ArrowCircleUpSharpIcon
                                                        sx={{
                                                            color: 'success.main',
                                                        }}
                                                    />
                                                )}
                                            </TableCell>
                                            <TableCell
                                                onClick={(event) =>
                                                    handleClick(event, row._id)
                                                }
                                                sx={{
                                                    borderColor: isItemSelected
                                                        ? 'primary.main'
                                                        : 'primary.separator',
                                                    color: isItemSelected
                                                        ? 'text.selected'
                                                        : 'text.primary',
                                                }}>
                                                {row.text}
                                            </TableCell>
                                            <TableCell
                                                onClick={(event) =>
                                                    handleClick(event, row._id)
                                                }
                                                sx={{
                                                    borderColor: isItemSelected
                                                        ? 'primary.main'
                                                        : 'primary.separator',
                                                    color: isItemSelected
                                                        ? 'text.selected'
                                                        : 'text.primary',
                                                }}
                                                align='right'>
                                                {date}
                                            </TableCell>
                                            <TableCell
                                                onClick={(event) =>
                                                    handleClick(event, row._id)
                                                }
                                                sx={{
                                                    borderColor: isItemSelected
                                                        ? 'primary.main'
                                                        : 'primary.separator',
                                                    color: isItemSelected
                                                        ? 'text.selected'
                                                        : 'text.primary',
                                                }}
                                                align='right'>
                                                {row.amount.toFixed(2)}
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    borderColor: isItemSelected
                                                        ? 'primary.main'
                                                        : 'primary.separator',
                                                }}
                                                align='right'>
                                                <CustomIconButton
                                                    onClick={() =>
                                                        deleteHandler(
                                                            row._id,
                                                            row.edit
                                                        )
                                                    }
                                                    edge='end'
                                                    aria-label='delete'
                                                    sx={{
                                                        color: isItemSelected
                                                            ? 'text.selected'
                                                            : 'text.primary',
                                                        borderColor:
                                                            'primary.main',
                                                    }}>
                                                    <DeleteOutlineSharpIcon />
                                                </CustomIconButton>
                                                {row.edit ? (
                                                    <CustomIconButton
                                                        onClick={(event) => {
                                                            cancelEditTransaction(
                                                                row._id
                                                            );
                                                            handleClick(
                                                                event,
                                                                row._id
                                                            );
                                                        }}
                                                        edge='end'
                                                        aria-label='cancel'
                                                        sx={{
                                                            color: isItemSelected
                                                                ? 'text.selected'
                                                                : 'text.primary',
                                                            borderColor:
                                                                'primary.main',
                                                        }}>
                                                        <CancelOutlinedIcon />
                                                    </CustomIconButton>
                                                ) : (
                                                    <CustomIconButton
                                                        onClick={(event) => {
                                                            handleClick(
                                                                event,
                                                                row._id
                                                            );
                                                            onEditHandler(
                                                                row,
                                                                isItemSelected
                                                            );
                                                        }}
                                                        edge='end'
                                                        aria-label='edit'
                                                        sx={{
                                                            color: isItemSelected
                                                                ? 'text.selected'
                                                                : 'text.primary',
                                                            borderColor:
                                                                'primary.main',
                                                        }}>
                                                        <EditSharpIcon />
                                                    </CustomIconButton>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component='div'
                    count={props.transactions.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
};
