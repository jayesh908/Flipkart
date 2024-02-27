import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { responsive } from '../Multicar/Car';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Link } from 'react-router-dom';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Deals = () => {
    const [deal, setdeal] = useState([])
    const getuser = () => {
        fetch('https://fakestoreapi.com/products?limit=6')
            .then(res => res.json())
            .then(dat => setdeal(dat))
    }
    useEffect(() => {
        getuser()
    }, [])
    const data = deal.map((ele) => {
        return (
            <div className='col-lg-2 col-md-4 col-sm-2' key={ele.id}>
                <Card style={{ width: '14rem' }} className='mb-4 cardd align-items-center p-2'>
                    <Card.Img variant="top" src={ele.image} className='img-fluid rounded-start ' style={{ height: "150px", width: "150px" }} />
                    <Card.Body>
                        <Card.Title>{ele.category}</Card.Title>
                        <Card.Text>
                            {ele.price}$
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        )
    })


    return (
        <>
            <>
                <div className='container-fluid mt-4 shadow-lg'>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <h3 className='text-start gx-5 p-4 '>Best Deals</h3>
                        </div>
                        <div style={{ padding: "25px" }}>
                            <Link to="/deal" ><ArrowForwardIosRoundedIcon /></Link></div>
                    </div>
                    <div className='row text-center'>
                        <Carousel responsive={responsive}>
                            {data}
                        </Carousel>
                    </div>

                </div>

            </>
        </>
    )
}

export default Deals
