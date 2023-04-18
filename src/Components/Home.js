import { Button, Grid } from '@mui/material';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { BottomNavigation } from '@mui/material';
import myImage from '../unnamed.png'

const Home = (props) => {
    return (
        <div style={{textAlign:"center"}}>
        <Grid container spacing={2} >
        <Grid item xs={12}><h1>Hello world!</h1></Grid>
          <Grid item xs={12}><Button size='large' variant="contained" onClick={props.showWebsiteFrame1} >Survey 1</Button></Grid>
          <Grid item xs={12}><Button size='large' variant="contained" onClick={props.showWebsiteFrame2}>Survey 2</Button></Grid>
          <Grid item xs={12}>
          <Popup trigger={<Button size='large' variant="contained">Info</Button>}>
            <>Stuart is very dangerous snek</>
          </Popup>
       
          </Grid>
          
        </Grid>

        <BottomNavigation style={{
    position: 'fixed',
    justifyContent:"left",
    left: 0,
    bottom: 0,
    width: '100%',}}>
    <img  src={myImage}/>
      
    </BottomNavigation>
        </div>
    );
  };
  
  export default Home;