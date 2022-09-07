import { useState, ChangeEvent, useMemo, FC } from 'react';
import { GetServerSideProps } from 'next';
import { Grid, Card, CardHeader, CardContent, CardActions, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, capitalize } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { Layout } from '../../components/layouts'
import { EntryStatus, Entry } from '../../interfaces';
import { findEntry } from '../../controllers';
import { useEntries } from '../../hooks/useEntries';
import { useSnackbar } from 'notistack';
import { dateUtils } from '../../utils';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

interface Props {
    entry: Entry
}

const EntryPage: FC<Props> = ({ entry }) => {

    const { onUpdateEntryStatus } = useEntries();
   

    const [inputValue, setInputValue] = useState(entry.description);
    const [status, setStatus] = useState<EntryStatus>(entry.status);
    const [touched, setTouched] = useState(false);
    const isNotValid = useMemo(() => touched && inputValue.length <= 0, [touched, inputValue]);



    const onSave = () => {

        // Update entry
        onUpdateEntryStatus({ ...entry, description: inputValue, status }, true);
    
    }



    return (
        <Layout title={`Entra: ${inputValue.substring(0, 2)}`} >
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={12} sm={8} md={6} >
                    <Card>
                        <CardHeader subheader={dateUtils.getFormarDistanceNow(entry.createdAt)} />

                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2 }}
                                fullWidth
                                placeholder='Nueva entrada'
                                autoFocus
                                multiline
                                label='Nueva entrada'
                                onChange={e => setInputValue(e.target.value)}
                                value={inputValue}
                                onBlur={() => setTouched(true)}
                                helperText={isNotValid && 'Ingrese un valor'}
                                error={isNotValid}
                            />


                            <FormControl sx={{ marginTop: 3 }} >
                                <FormLabel>Estado</FormLabel>
                                <RadioGroup row value={status} onChange={e => setStatus(e.target.value as EntryStatus)} >
                                    {
                                        validStatus.map(status => (
                                            <FormControlLabel
                                                key={status}
                                                value={status}
                                                control={<Radio />}
                                                label={capitalize(status)}
                                            />
                                        ))
                                    }

                                </RadioGroup>
                            </FormControl>


                            <CardActions>
                                <Button
                                    startIcon={<SaveOutlinedIcon />}
                                    variant='contained'
                                    fullWidth
                                    onClick={onSave}
                                    disabled={inputValue.length > 0 ? false : true}
                                >
                                    Save
                                </Button>

                            </CardActions>

                        </CardContent>

                    </Card>
                </Grid>
            </Grid>




        </Layout>
    )
}

export default EntryPage;



// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// * La propiedad permanent si esta en true indica a los boots de google que esta pagina no exite mas, MANEJALO COMO fasle siempre
export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { id } = params as { id: string };

    const entry = await findEntry(id);

    if (!entry) return { redirect: { destination: '/', permanent: false } };

    console.log(entry)

    return {
        props: { entry: entry }
    }
}