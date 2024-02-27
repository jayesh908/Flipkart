import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { responsive } from '../Multicar/Car';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Carousel from "react-multi-carousel";
// import { useNavigate, useParams } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
// import ViewProduct from '../components/ViewProduct';


const Phone = () => {


    const { productId } = useParams();
    const [view, setview] = useState(false)
    const [viewdata, setviewdata] = useState(false)

    const [phone, setphone] = useState([])
    const getuser = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/`);
        setphone(await response.json());

    }
    useEffect(() => {
        getuser()
    }, [])


    const getdata = (item) => {
        setviewdata(item)
        // console.log(item);
        setview(true)
        console.log(view);

    }

    const data = phone.filter((ele) => ele.id <= 8).map((ele) => {
        const { id } = ele
        return (
            <div key={ele.id} className='col-lg-2 col-md-2 col-sm-2'>
                <Card style={{ width: '15rem' }} className='mb-4 cardd align-items-center p-2' >
                    <Link to={`/Phone/${id}`}> <Card.Img variant="top" src={ele.image} onClick={() => {
                        getdata(ele)
                    }} className='img-fluid rounded-start p-2' style={{ height: "150px", width: "150px" }} /></Link>
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
            <div className='container-fluid mt-4 shadow-lg'>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <h3 className='text-start gx-5 p-4 '>Best Items on Smartphones</h3>
                    </div>
                    <div style={{ padding: "25px" }}>
                        {/* <Button variant="primary" style={{ borderRadius: "25px" }} onClick={() => bestElect()}><ArrowForwardIosRoundedIcon /></Button></div> */}
                        <Link to="/electronic" ><ArrowForwardIosRoundedIcon /></Link></div>
                </div>
                <div className='row text-center'>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}>
                        {data}
                    </Carousel>
                </div>
            </div>

            {/* {
                !view ? <ViewProduct/> : null
            } */}
        </>
    )
}

export default Phone




// ssr={true} // means to render carousel on server-side.
// infinite={true}
// autoPlay={this.props.deviceType !== "mobile" ? true : false}
// autoPlaySpeed={1000}
// keyBoardControl={true}
// customTransition="all .5"
// transitionDuration={500}
// containerClass="carousel-container"
// removeArrowOnDeviceType={["tablet", "mobile"]}
// deviceType={this.props.deviceType}
// dotListClass="custom-dot-list-style"
// itemClass="carousel-item-padding-40-px"