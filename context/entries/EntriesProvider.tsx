import { useSnackbar } from 'notistack';
import { ReactElement, FC, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { entriesApi } from '../../api';
import { useAlert } from '../../hooks/useAlert';

import { Entry, EntryStatus } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';


interface Props {
    children?: ReactElement | ReactElement[]
}

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
}



export const EntriesProvider: FC<Props> = ({ children }) => {

    const { showAlert } = useAlert()
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)



    const addNewEntries = async (description: string) => {
        const { data } = await entriesApi.post<Entry>('/entries', { description });
        dispatch({ type: '[Entries] - Add Entry', payload: data })
    }


    const onUpdateEntryStatus = async (entry: Entry, showalert = false) => {

        try {

            const { data } = await entriesApi.put<Entry>(`/entries/${entry._id}`, entry) //

            dispatch({ type: '[Entries] - Entry Updated', payload: data })

            showalert && showAlert('Entrada Actualizada');

        } catch (error: any) {
            console.log(error);
            const msg = error?.response?.data?.msg || 'Error! No se pudo actualizar la entrada';
            showalert && showAlert(msg, 'error');
        }
    }


    const onRefreshEntries = async () => {
        const { data } = await entriesApi.get<Entry[]>('/entries');
        dispatch({ type: '[Entries] - Refresh Data', payload: data });
    }


    useEffect(() => {
        onRefreshEntries();
    }, [])



    return (
        <EntriesContext.Provider value={{
            ...state,


            // Metodos
            addNewEntries,
            onUpdateEntryStatus,

        }}>

            {children}

        </EntriesContext.Provider>
    )
}

