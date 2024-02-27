import React  from "react";
import vega from './images/vega.png'
import lux from './images/lux.png'
import pan from './images/pan.png'

const Feature3 = ()=>{
    return(
        <div>
        <div className='container-fluid my-3 shadow-lg p-4'>
                  <h3 className='text-start'>Featured Brands</h3>
              <div className='container-fluid'>
                  <div className='justify-content-center row gx-3 p-3'>
                      <div className='col-lg-4 col-md-4 col-sm-4 gy-3'><img src={vega} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                      <div className='col-lg-4 col-md-4 col-sm-4 gy-3'><img src={lux} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                      <div className='col-lg-4 col-md-4 col-sm-4 gy-3'><img src={pan} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                  </div>
              </div>
          </div>
      </div>
    )
}
export default Feature3