import React,{FC,useEffect,useState} from 'react';
import { Box,Typography} from '@mui/material';
import useStore from '../util/store/appStore';
import Image from 'next/image';



type UserProps = {
  userid : any;
}

const UserProfile : FC<UserProps> = ({userid}) => {
    const {users} = useStore();
    const [user] = useState<any>(users[userid]);

   

  return <Box sx={styles.mainBox}>
            <Box 
                sx={styles.innerBox}
                >
                <Typography  variant="h5"  mb={5}>
                Users Profile
                </Typography>
            </Box>
            <Box sx={styles.userImage}>
            <Image 
                src={user.picture.large}
                alt={user.name.first}
               height={200}
                width={200}
               
                 
            />
                </Box>
           

            <Typography variant='h5' m={2}>
            FULLNAME: {user.name.first}  {user.name.last}
            </Typography>
            <Typography variant='h5' m={2}>
            AGE: {user.dob.age} 
            </Typography>

            <Typography variant='h5' m={2}>
            COUNTRY: {user.location.country}
            </Typography>

            <Typography variant='h5' m={2}>
            EMAIL: {user.email}
            </Typography>



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
    userImage : {
       
        height : '200px',
        width : '200px',
       

    }
}


export default UserProfile;
