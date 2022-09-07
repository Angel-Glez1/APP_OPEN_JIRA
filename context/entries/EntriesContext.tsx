import { createContext } from 'react';
import { Entry } from '../../interfaces';


interface ContextProsp {
    entries: Entry[];
    addNewEntries: (description: string) => void;
    onUpdateEntryStatus: (entry: Entry, showalert?: boolean) => void;
}


export const EntriesContext = createContext({} as ContextProsp);
