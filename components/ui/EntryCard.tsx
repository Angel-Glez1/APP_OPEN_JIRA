import { DragEvent, FC } from 'react';
import { useRouter } from 'next/router';
import { Card, CardActionArea, CardContent, Typography, CardActions } from '@mui/material';
import { Entry } from '../../interfaces';
import { useUI } from '../../hooks';
import { dateUtils } from '../../utils';


interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { onStartDragging, onEndDragging, isDragging } = useUI();
    const router = useRouter()

    const onDragStart = (event: DragEvent) => {
        event.dataTransfer.setData('text', entry._id);
        onStartDragging();
    }


    const onGragEnd = () => onEndDragging();


    return (
        <Card
            onClick={() => router.push(`/entries/${entry._id}`)}
            sx={{ marginBottom: 1 }}
            draggable
            onDragStart={onDragStart}
            onDragEnd={onGragEnd}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }} >{entry.description}</Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }} >
                    <Typography variant='body2' >
                        {dateUtils.getFormarDistanceNow(entry.createdAt)}
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
