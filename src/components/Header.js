import React from 'react'
import {Container,Grid,Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'



export default function Header() {
    const  history = useHistory();
    return (
        <div>
           <Container maxWidth = "md">
               <Grid container>
               <Grid item>
               <Button onClick={()=>history.replace("/")}>
                   Home</Button>
               </Grid>

               <Grid item>
               <Button onClick={()=>history.replace("/about-us")}>
                   ABOUT US</Button>
               </Grid>
               </Grid>
           </Container>
        </div>
    )
}