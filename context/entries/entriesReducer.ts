import { Entry, EntryStatus } from '../../interfaces';
import { EntriesState } from './';


type EntriesActionType =
    | { type: '[Entries] - Add Entry', payload: Entry }
    | { type: '[Entries] - Entry Updated', payload: Entry }
    | { type: '[Entries] - Refresh Data', payload: Entry[] }


export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.type) {

        case '[Entries] - Add Entry':

            return {
                ...state,
                entries: [action.payload, ...state.entries]
            }

        case '[Entries] - Entry Updated':
            return {
                ...state,
                entries: state.entries.map(entry => entry._id === action.payload._id ? action.payload : entry)
            }

        case '[Entries] - Refresh Data':
            return {
                ...state,
                entries: [...action.payload]
            }


        default:
            return state
    }

}