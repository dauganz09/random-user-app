import React,{FC, useEffect} from 'react';
import { Box,Typography,CircularProgress } from '@mui/material';
import useStore from '../util/store/appStore';
import Link from 'next/link';





const UsersBox : FC = () => {
    const {users,fetchUsers,loading} = useStore();


     useEffect(() => {
        fetchUsers();
        

     } ,[])

  return <Box
            sx={styles.mainBox}
            >
                <Box 
                sx={styles.innerBox}
                >
                <Typography  variant="h5"  mb={5}>
                Users List
                </Typography>
            </Box>
            <Box sx={styles.userBox}>
                    {
                        loading ? <CircularProgress size={40} sx={{position:'absolute',top: '50vh', left: '50vw'}} /> :
                        users.map((user : any ,i) => {
                        return <Box key={i} sx={styles.userList} mb={2} p={2}>
                            <Link href={`/user/${i}`}>
                               <Typography variant='h5' sx={{cursor : 'pointer'}} >
                                   
                                      {i+1}. {user.name.first}  {user.name.last}
                                   
                               </Typography>
                               </Link>
                             </Box>
                        })
                    }
                
                   
            </Box>
  </Box>
};



const styles = {
    mainBox : {
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerBox : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width : '100%',
    },
    userBox : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width : '100%',
        
    },
    userList : {
        width : '100%',
        display: 'flex',
        border : '1px solid #1976D2'

    }
    }

    

export default UsersBox;
