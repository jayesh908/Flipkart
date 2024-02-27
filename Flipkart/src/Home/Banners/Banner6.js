import React from 'react'
import clk from '../images/clock.png'
import ket from '../images/kettels.png'
import wash from '../images/washbasin.png'

const Banner6 = () => {
  return (
    <div>
      <div className='container-fluid my-3 shadow-lg'>
        <div className='container-fluid'>
          <div className='row justify-content-center row gx-3 p-3'>
            <div className='col-lg-4 col-md-4 col-sm-4 gy-3'><img src={clk} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
            <div className='col-lg-4 col-md-4 col-sm-4 gy-3 '><img src={ket} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
            <div className='col-lg-4 col-md-4 col-sm-4 gy-3'><img src={wash} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Banner6
