import React from 'react'
import iphone from '.././images/iphone.png'
import Inve from '.././images/Inv.png'
import pavv from '.././images/pav.png'
const Banner = () => {
    return (
        <div className='container-fluid my-3 shadow-lg'>
            <div className='container-fluid'>
                <div className='justify-content-center row gx-3 p-3'>
                    <div className='col-lg-4 col-md-4 col-sm-4 gy-2'><img src={iphone} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                    <div className='col-lg-4 col-md-4 col-sm-4 gy-2'><img src={Inve} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                    <div className='col-lg-4 col-md-4 col-sm-4 gy-2 '><img src={pavv} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                </div>
            </div>
        </div>
    )
}
export default Banner