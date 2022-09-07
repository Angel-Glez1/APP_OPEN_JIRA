import type { NextPage } from 'next'
import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { Layout } from '../components/layouts'
import { EntryList } from '../components/ui/EntryList';
import { NewEntry } from '../components/ui';


const HomePage: NextPage = () => {



  return (
    <Layout title='Home - Open Jira'>

      <Grid container spacing={2} >

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px )' }} >

            <CardHeader title='Pendientes' />
            <Divider />



            <CardContent>
              <NewEntry />
              <EntryList status='pending' />
            </CardContent>

          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px )' }} >

            <CardHeader title='En progreso' />

            <Divider />

            <CardContent>
              <EntryList status='in-progress' />
            </CardContent>

          </Card>
        </Grid>

        <Grid item xs={12} sm={4} >
          <Card sx={{ height: 'calc(100vh - 100px )' }} >

            <CardHeader title='Completadas' />

            <Divider />

            <CardContent>
              <EntryList status='finished' />
            </CardContent>

          </Card>
        </Grid>

      </Grid>


    </Layout>
  )

}

export default HomePage;