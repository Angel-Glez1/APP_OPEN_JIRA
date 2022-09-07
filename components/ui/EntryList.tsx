import { FC, useMemo, DragEvent } from 'react';
import Paper from '@mui/material/Paper';
import { List } from '@mui/material';

import { EntryCard } from './';
import { Entry, EntryStatus } from '../../interfaces';
import { useEntries } from '../../hooks';
import { useUI } from '../../hooks';

import styles from './EntryList.module.css'


interface Props {
    status: EntryStatus
}


export const EntryList: FC<Props> = ({ status }) => {

    // Hooks
    const { isDragging, onEndDragging } = useUI();
    const { entries, onUpdateEntryStatus } = useEntries();
    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])



    // Funtions of compenent
    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        
        const id = event.dataTransfer.getData('text');

        const entry: Entry = entries.find(entry => entry._id === id)!;
        
        onUpdateEntryStatus({ ...entry, status });
        onEndDragging();
    }


    return (
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrop}
            className={isDragging ? styles.dragging : ''}

        >
            <Paper sx={{ height: 'calc(100vh - 250px)', overflowY: 'auto', backgroundColor: 'transparent' }} >

                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all 0.3s', padding: 1 }} >

                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }

                </List>

            </Paper>
        </div>
    )
}
