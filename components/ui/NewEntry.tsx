import { Box } from '@mui/material';
import { useUI } from '../../hooks';
import { EntryForm, EntryButtoNew } from './';



export const NewEntry = () => {

    const { isAddingEntry } = useUI();

    return (
        <Box sx={{ marginBottom: 2 }}>

            {isAddingEntry ? (<EntryForm />) : (<EntryButtoNew />)}

        </Box>
    )
}
