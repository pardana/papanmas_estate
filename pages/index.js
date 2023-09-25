import Head from 'next/head'
import Image from 'next/image'
import { Button } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1><Button>Hello World</Button></h1>
    </div>
  )
}
