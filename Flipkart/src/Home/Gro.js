import React from 'react'
import Gr from './images/Grocery.png'
import Ap from './images/appliances.png'
import Bet from './images/beauty.png'
import Ele from './images/electronics.png'
import Fas from './images/fashion.png'
import Carousel from 'react-multi-carousel';
import Ho from './images/home.png'
import Mo from './images/mobiles.png'
import Tra from './images/travel.png'
import Whe from './images/two wheelers.png'
const Gro = () => {
    const Grocery = [
        {
            id: 0,
            ImageURL: Gr,
            heading: "Grocery",
        },
        {
            id: 1,
            ImageURL: Mo,
            heading: "Mobiles",
        },
        {
            id: 2,
            ImageURL: Fas,
            heading: "Fashion",
        },
        {
            id: 3,
            ImageURL: Ele,
            heading: "Electronics",
        },
        {
            id: 4,
            ImageURL: Ho,
            heading: "Home & Furniture",
        },
        {
            id: 5,
            ImageURL: Ap,
            heading: "Appliances",
        },
        {
            id: 6,
            ImageURL: Tra,
            heading: "Travel",
        },
        {
            id: 7,
            ImageURL: Bet,
            heading: "Beauty,Toys & More",
        },
        {
            id: 8,
            ImageURL: Whe,
            heading: "Two Wheelers",
        },
    ]
    const responsivee = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 9
        },
        desktop: {
            breakpoint: { max: 1024, min: 1162 },
            items: 8
        },
        tablet: {
            breakpoint: { max: 1162, min: 769 },
            items: 6
        },
        mobile: {
            breakpoint: { max: 769, min: 0 },
            items: 4
        }
    };

    const show = Grocery.map((ele) => {
        return (
            <div className='col-lg-1'key={ele.id} >
                <div   >
                    <img src={ele.ImageURL} alt='..' style={{ height: "60px" }} />
                    <h6 style={{ fontSize: "15px" }}>{ele.heading}</h6>
                </div>
            </div>)
    })

    return (
        <div className='container-fluid text-center  mt-4 shadow-lg'>
            <div className='container align-items-center'>
                <div className='row align-items-center'>
                    <Carousel responsive={responsivee}
                        swipeable={true}
                        draggable={true}
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
                        keyBoardControl={true}
                        itemClass="carousel-item-padding-60-px"
                    >
                        {show}
                    </Carousel>


                </div>
            </div>
        </div>

    )

}
export default Gro