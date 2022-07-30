import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { alpha } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';

export const TableToolbar = (props) => {
    const {
        numSelected,
        count,
        rowsPerPage,
        page,
        onPageChange,
        onRowsPerPageChange,
    } = props;
    return (
        <Toolbar
            sx={{
                ...(numSelected > 0 && {
                    bgcolor: (theme) => theme.palette.primary.header,
                    color: (theme) => theme.palette.text.primary,
                    borderBottom: (theme) =>
                        `1px solid ${theme.palette.primary.separator}`,
                }),
            }}>
            {/* {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 50%' }}
                    color='inherit'
                    variant='subtitle1'
                    component='div'>
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 50%' }}
                    variant='h6'
                    id='tableTitle'
                    component='div'></Typography>
            )}
            {numSelected > 0 && (
                <Tooltip title='Delete'>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            )}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component='div'
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
            /> */}
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%', fontWeight: 'bold' }}
                    color='inherit'
                    variant='subtitle1'
                    component='div'>
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%', fontWeight: 'bold' }}
                    variant='h6'
                    id='tableTitle'
                    component='div'>
                    Transactions
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title='Delete'>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title='Filter list'>
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};
