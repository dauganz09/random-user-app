import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../components/AppLayout'
import UsersBox from '../components/UsersBox'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <AppLayout>
      <UsersBox/>
    </AppLayout>
  )
}

export default Home
