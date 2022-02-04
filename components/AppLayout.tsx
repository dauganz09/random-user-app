import React,{FC} from 'react';
import { AppBar,Toolbar,Container,Typography, Button } from '@mui/material';
import Link from 'next/link';

interface LayoutProps {
    children : any;
}



const AppLayout : FC<LayoutProps> = ({children}) => {


  return <>
        <AppBar
      position="sticky"
      color="primary"
      
      elevation={1}
      


    >
    <Container maxWidth="xl">
        <Toolbar>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
                Random User App
            </Typography>
            <Link href='/' 
            passHref
            
            >
                <Button variant='outlined' sx={{color : 'white',borderColor : 'white'}}>Home</Button>
            </Link>
          
        </Toolbar>
    </Container>
      </AppBar>
    <Container maxWidth="md" >
        {children}
    </Container>

  
  </>

 
};

export default AppLayout;
