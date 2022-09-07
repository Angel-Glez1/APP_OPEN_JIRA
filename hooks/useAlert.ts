import { useSnackbar } from 'notistack';
import React from 'react'


type SnackType = | 'error' | 'success' | 'warning' | 'info'


export const useAlert = () => {
    
    const { enqueueSnackbar } = useSnackbar();


    const showAlert = (msg: string, type: SnackType = 'success') => {
        enqueueSnackbar(msg, {
            autoHideDuration: 3000,
            variant: type,
            anchorOrigin: { horizontal: 'right', vertical: 'top' },
        });
    }


    return {
        showAlert
    }
}
