import React, { useState } from 'react'
import { Button, Box, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useEntries, useUI } from '../../hooks';

export const EntryForm = () => {

    const { addNewEntries } = useEntries();
    const { onAddingEntry } = useUI();
    
    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);


    const onSave = () => {
        if (inputValue.length <= 0) return;

        addNewEntries(inputValue);
        setTouched(false);
        onAddingEntry(false);
        setInputValue('');
    }


    return (

        <>
            <TextField
                fullWidth
                sx={{ marginTop: 2, marginBottom: 1 }}
                placeholder='Nueva Entrada'
                autoFocus
                multiline
                label='Nueva entrada'
                helperText={(touched && inputValue.length <= 0) && 'Ingrese un valor'}
                error={inputValue.length <= 0 && touched}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onBlur={() => setTouched(true)}
            />


            <Box display='flex' justifyContent='space-between' >
                <Button variant='contained' onClick={() => { onAddingEntry(false); setTouched(false); }} >
                    Cancelar
                </Button>

                <Button onClick={onSave} variant='outlined' color='secondary' endIcon={<SaveOutlinedIcon />}>
                    Add Entry
                </Button>
            </Box>
        </>

    )
}
