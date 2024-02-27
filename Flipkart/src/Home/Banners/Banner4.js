import React from 'react'
import ref from '.././images/Ref.png'
import vac from '.././images/vac.png'
import tv from '.././images/tv.png'

const Banner4 = () => {
  return (
    <div className='container-fluid my-3 shadow-lg'>
            <div className='container-fluid'>
                <div className='row justify-content-center row gx-3 p-3'>
                <div className='col-lg-4 col-md-4 col-sm-4 gy-3 '><img src={ref} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                <div className='col-lg-4 col-md-4 col-sm-4 gy-3 '><img src={vac} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                <div className='col-lg-4 col-md-4 col-sm-4 gy-3'><img src={tv} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                </div>
            </div>
        </div>
  
  )
}

export default Banner4
