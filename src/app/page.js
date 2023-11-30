import Image from 'next/image'
import styles from './page.module.css'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import ButtonsContained from '../components/reUsable/useButton'

export default function Home() {
  return (
    <main className={styles.main}>
      <Grid item sx={{ width: 'full-width'  }}>
        <Box >
          <Card sx={{ backgroundColor: '#7ED7C1', borderRadius: '40px' }}>
            <Typography sx={{ p: '2rem', color: '#7B66FF' }} variant='h2'>Welcome To FORM BU!LDER</Typography>

        </Card>
      </Box>
     <Grid item sx={{display:'flex',flexDirection:'row', justifyContent:'center',m:'1rem'}}>
          <Box sx={{ mr: '1rem' }}>
            <ButtonsContained text={'Login'} col={'info'}/>
            
          </Box>
          <Box><ButtonsContained text={'SignUp'} col={'warning'} /></Box>
     </Grid>
      </Grid>
    </main>
  )
}
