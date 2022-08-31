import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css'

function Blogs() {
  const router = useRouter()
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
        {data.map((item) => (
          <Col lg={4} md={12}  className={styles.divMb}>
          <Card key={item.id} className={styles.mainCard}>
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src={item.url} className="img-fluid" />
              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
              </a>
            </div>
            <div className={styles.cardBody}>
          <a href='/full-details'> <h3>{item.title}</h3></a>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          <Button type="button" variant="outline-danger" onClick={() => router.push('/full-details')}> Read more</Button>
          </div>
          </Card>
          </Col>
        ))}
        
      </>
    );
  }
  export default Blogs;