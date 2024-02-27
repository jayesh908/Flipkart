import React from 'react'
import nothing from '.././images/nothing.png'
import Ipad from '.././images/ipad.png'
import pavv from '.././images/pav.png'

const B7 = () => {
  return (
    <div>
      <div className='container-fluid my-3 shadow-lg'>
            <div className='container-fluid'>
                <div className='justify-content-center row gx-3 p-3'>
                    <div className='col-lg-4 col-md-4 col-sm-4 gy-3 '><img src={nothing} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                    <div className='col-lg-4 col-md-4 col-sm-4 gy-3 '><img src={Ipad} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                    <div className='col-lg-4 col-md-4 col-sm-4 gy-3'><img src={pavv} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default B7
