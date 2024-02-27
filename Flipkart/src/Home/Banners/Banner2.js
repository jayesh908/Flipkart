import React from 'react'
import Ban from '.././images/ban2.png'
import Ban1 from '.././images/Ban2.1.png'
import Ban2 from '.././images/Ban2.2.png'
const Banner2 = () => {
    return (
        <div className='container-fluid my-3 shadow-lg'>
            <div className='container-fluid'>
                <div className='row justify-content-center row gx-3 p-3'>
                <div className='col-lg-4 col-md-4 col-sm-4 gy-2'><img src={Ban} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                <div className='col-lg-4 col-md-4 col-sm-4 gy-2 '><img src={Ban1} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                <div className='col-lg-4 col-md-4 col-sm-4 gy-2 '><img src={Ban2} alt='' className='img-fluid' style={{ width: "500px" }}></img></div>
                </div>
            </div>
        </div>
    )
}
export default Banner2