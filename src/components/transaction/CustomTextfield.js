import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import TextField from '@mui/material/TextField';

export const CustomTextfield = (props) => {
    const { ref, text, defaultValue, setFunc, test } = props;

    const clearInput = () => {
        //type.current.value = '';
        setFunc('');
    };

    return (
        <TextField
            value={test}
            // defaultValue={defaultValue}
            onBlur={(e) => setFunc(e.target.value)}
            inputRef={ref}
            fullWidth
            name={text}
            placeholder={text}
            autoComplete='off'
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton onClick={clearInput}>
                            <ClearIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};
