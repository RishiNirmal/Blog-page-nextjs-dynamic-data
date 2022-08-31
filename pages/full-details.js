import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

function FullDetails() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
  
    useEffect(() => {
      setLoading(true);
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <p>Data is loading...</p>;
    }
  
    if (error || !Array.isArray(data)) {
      return <p>There was an error loading your data!</p>;
    }
  
    return (
     
      <>
       <Head>
        <title>Blogs Detail</title>
        <meta name="description" content="Blogs Details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <Row>
          <div className={styles.breadcrumbDiv}>
            <h2 >Blog Details</h2>
          </div>
        </Row>
      </Container>
      {data.map((item) => (
       
        <Container>
          <h1 className={styles.topHeading}>{item.title}</h1>
          <Row key={item.id}>
        <Col  md={12} >
        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src={item.url} className={styles.imgFluid} />
            <a href="#!">
              <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
            </a>
          </div>
          </Col>
          <Col  md={12} className={styles.textBody}>
        <div>
        <h3 className={styles.blogName}>{item.title}</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
          </div>
          </Col>
         
        </Row>
        </Container>
      ))}
      
    </>
  );
}
  export default FullDetails;