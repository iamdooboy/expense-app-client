import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow, { tableRowClasses } from '@mui/material/TableRow';
import Table from '@mui/material/Table';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.background.secondary,
        color: theme.palette.text.primary,
        fontWeight: '500',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

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
