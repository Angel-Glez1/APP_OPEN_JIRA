import { useContext } from 'react'
import { EntriesContext } from '../context/entries/EntriesContext';

export const useEntries = () => {
    return useContext(EntriesContext)
}
