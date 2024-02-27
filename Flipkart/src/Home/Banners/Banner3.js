import React from 'react'
import solar from '.././images/solar.png'
import nivea from '.././images/nivea.png'
import mat from '.././images/mat.png'

const Banner3 = () => {
  return (
    <div className='container-fluid my-3 shadow-lg'>
            <div className='container-fluid'>
                <div className='row justify-content-center row gx-3 p-3'>
                <div className='col-lg-4 col-md-4 col-sm-4 gy-2'><img src={solar} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                <div className='col-lg-4 col-md-4 col-sm-4 gy-2'><img src={nivea} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                <div className='col-lg-4 col-md-4 col-sm-4 gy-2'><img src={mat} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                </div>
            </div>
        </div>
  )
}

export default Banner3
