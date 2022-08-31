import React from 'react';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Blogs from './component';
import styles from '../styles/Home.module.css'

export default function BlogPage() {
    const router = useRouter()
    return (
        <>
        <Head>
        <title>Latest Blogs</title>
        <meta name="description" content="Latest Blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <Row>
          <div className={styles.breadcrumbDiv}>
            <h2 >Latest Blogs</h2>
          </div>
        </Row>
      </Container>
    <main className="my-5">
  <Container fluid>
    <section className="text-center">
      <Row>
     <Blogs/>
     </Row>
    </section>
    <nav className="my-4" aria-label="...">
      <ul className="pagination pagination-circle justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item active" aria-current="page">
          <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
        </li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </Container>
</main>

       </>
    )
}
