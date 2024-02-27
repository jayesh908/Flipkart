import React from 'react'
import gey from '.././images/gyser.png'
import sofa from '.././images/sofa.png'
import nothing from '.././images/nothing.png'
import canon from '.././images/canon.png'
import Ben from '.././images/benq.png'
import ipad from '.././images/ipad.png'

const Banner5 = () => {
  return (
    <div className='container-fluid my-3 shadow-lg'>
            <div className='container-fluid'>
                <div className='row justify-content-center row gx-3 p-3'>
                <div className='col-lg-4 col-md-4 col-sm-4 gy-3 '><img src={gey} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                <div className='col-lg-4 col-md-4 col-sm-4 gy-3 '><img src={sofa} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                <div className='col-lg-4 col-md-4 col-sm-4 gy-3'><img src={nothing} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                </div>
                <div className='row justify-content-center row gx-3 p-3'>
                <div className='col-lg-4 col-md-4 col-sm-4 gy-3'><img src={canon} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                <div className='col-lg-4 col-md-4 col-sm-4 gy-3'><img src={Ben} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                <div className='col-lg-4 col-md-4 col-sm-4 gy-3'><img src={ipad} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                </div>
            </div>
        </div>
  )
}

export default Banner5
