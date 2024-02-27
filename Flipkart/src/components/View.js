import axios from 'axios'
import React, { useEffect, useState, } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const View = () => {
  const { id } = useParams()
  const [data, setData] = useState({});

  useEffect(() => {
    getdata()
  }, [])

  const getdata = async () => {
    await axios.get(`https://fakestoreapi.com/products`).then((res) => {

      const newproduct = res.data.find((item) => item.id === parseInt(id))
      console.log(newproduct)
      setData(newproduct)
    })

      .catch((Error) => console.log(Error))
  }
  return (
    <>
      <Container>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <Card style={{ width: '20rem' }} className='mb-4 cardd align-items-center' >
            <Card.Img variant="top" src={data.image} className='img-fluid rounded-start' style={{ height: "150px", width: "150px" }} />
            <Card.Body>
              <Card.Title>{data.category}</Card.Title>
              <Card.Text>
                {data.price}$
              </Card.Text>
              <Card.Text>
                {data.description}
              </Card.Text>
              <Card.Text>
                {data.price}
              </Card.Text>

              <Button variant='info' >Add to Cart</Button>

            </Card.Body>
          </Card>
        </div>

      </Container>



    </>
  )
}

export default View
