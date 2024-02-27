import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../Multicar/Car';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import { Link } from 'react-router-dom';
const Never = () => {
    const [wed, setwed] = useState([])
    const get = () => {
        fetch("https://fakestoreapi.com/products/category/women's clothing")
            .then((res) => res.json()).then((rest) => setwed(rest))
    }

    useEffect(() => {
        get()
    }, [])

    const data = wed.map((ele) => {
        return (
            <div className='col-lg-2 col-md-2 col-sm-2' key={ele.id}>
                
                <Card style={{ width: '15rem', height: "18rem" }} className='mb-4 cardd align-items-center p-2' >
                    <Card.Img variant="top" src={ele.image} className='img-fluid rounded-start' style={{ height: "150px", width: "150px" }} />
                    <Card.Body>
                        <h6>{ele.title}</h6>
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
    
            <div className='container-fluid mt-4 shadow-lg'>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <h3 className='text-start gx-5 p-4 '>Never Before Price</h3>
                    </div>
                    <div style={{ padding: "25px" }}>
                        {/* <Button variant="primary" style={{ borderRadius: "25px" }} onClick={() => bestElect()}><ArrowForwardIosRoundedIcon /></Button></div> */}
                        <Link to="/Never" ><ArrowForwardIosRoundedIcon /></Link></div>
                </div>
                <div className='row text-center'>
                <Carousel responsive={responsive}>
                        {data}
                    </Carousel>;
                </div>

            </div>
        </>

    )
}

export default Never
