import { Container, Button } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import Blogs from './blogs'
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>
       {/* <Blogs/> */}
       <section id="hero" className={styles.hero} >
    <Container fluid className={styles.heroContainer}>
    <Link href="/" className={styles.heroLogo} ><Image src="/hero-logo.png" alt="Vercel Logo" width={200} height={200} /></Link>
    
      <h1 class={styles.titlehead}>Welcome To Blogs Page</h1>
      <h2 class={styles.titleheadtw}>Lorem Ipsum is simply dummy text of the printing</h2>
      <Button type="button" variant="outline-danger" onClick={() => router.push('/blogs')}> Get Start</Button>
    </Container>
  </section>
    
    </div>
  )
}
