import React, { useState } from 'react'
import { Button, Box, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useEntries, useUI } from '../../hooks';

export const EntryButtoNew = () => {

    const { onAddingEntry } = useUI();

    return (
        <Button
            startIcon={<AddCircleOutlineOutlinedIcon />}
            fullWidth
            variant='contained'
            color='primary'
            onClick={() => onAddingEntry(true)}
        >
            Agregar Entrada
        </Button>

    )
}
