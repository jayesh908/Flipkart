import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../Multicar/Car';
import { Link } from 'react-router-dom';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';


const Fashion = () => {
    const [fas, setfas] = useState([])
    const get = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=6')
            const res = await response.json()
            setfas(res)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        get()
    }, [])

    const data = fas.map((ele) => {
        return (
                <div className='col-lg-2 col-md-4 col-sm-2'  key={ele.id}>
                    <Card style={{ width: '14rem', height: "18rem" }} className='mb-4 cardd align-items-center p-2'>
                        <Card.Img variant="top" src={ele.image} className='img-fluid rounded-start p-2 ' style={{ height: "150px", width: "150px" }} />
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
                        <h3 className='text-start gx-5 p-4 '>Best Sales on Fashion</h3>
                    </div>
                    <div style={{ padding: "25px" }}>
                        {/* <Button variant="primary" style={{ borderRadius: "25px" }} onClick={() => bestElect()}><ArrowForwardIosRoundedIcon /></Button></div> */}
                        <Link to="/Fash" ><ArrowForwardIosRoundedIcon /></Link></div>
                </div>                <div className='row text-center'>
                    <Carousel responsive={responsive}>
                        {data}
                    </Carousel>
                </div>

            </div>

        </>

    )
}
export default Fashion