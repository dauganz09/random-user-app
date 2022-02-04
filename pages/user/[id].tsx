import React,{FC, useState,useEffect} from 'react';
import AppLayout from '../../components/AppLayout';
import { useRouter } from 'next/router'

import UserProfile from '../../components/UserProfile';


const User : FC<any> = () => {

  const router = useRouter()
  const { id } = router.query
  const [userid] = useState<any>(id);


  return (
    <AppLayout>
      <UserProfile userid ={userid} />
    </AppLayout>
  )
};

export default User;
