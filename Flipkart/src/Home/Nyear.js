import React from 'react'
import war from './images/watch.png'
import Card from 'react-bootstrap/Card';
import shoe from './images/shoes.png'

import hood from './images/hoodie.png'
import hod from './images/hod.png'
import D from './images/D.jpg'

const Nyear = () => {
    return (
        <div className=' shadow-lg' style={{ display: "flex" }}>
            <div id='year' className='shadow-lg'  >
                <div><h3 className='mt-3 ms-2'>New Year Special</h3></div>
                <div className='row'>
                    <div className='col-sm-5 col-12'>
                        <div className='row gx-4'>
                            <div className='col-md-6 col-sm-3'>
                                <Card className=' cardd align-items-center p-2' >
                                    <Card.Img variant="top" src={war} className='img-fluid rounded-start' style={{ height: "150px", width: "150px" }} />
                                    <Card.Body>
                                        <Card.Title>Watch</Card.Title>
                                        <Card.Text>
                                            800$
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col-md-6 col-sm-3'>
                                <Card className='mb-4 cardd align-items-center p-2' >
                                    <Card.Img variant="top" src={shoe} className='img-fluid rounded-start' style={{ height: "150px", width: "150px" }} />
                                    <Card.Body>
                                        <Card.Title>Watch</Card.Title>
                                        <Card.Text>
                                            800$
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col-md-6 col-sm-3'>
                                <Card className='mb-4 cardd align-items-center p-2' >
                                    <Card.Img variant="top" src={hood} className='img-fluid rounded-start' style={{ height: "150px", width: "150px" }} />
                                    <Card.Body>
                                        <Card.Title>Watch</Card.Title>
                                        <Card.Text>
                                            800$
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col-md-6 col-sm-3'>
                                <Card className='mb-4 cardd align-items-center p-2' >
                                    <Card.Img variant="top" src={hod} className='img-fluid rounded-start' style={{ height: "150px", width: "150px" }} />
                                    <Card.Body>
                                        <Card.Title>Watch</Card.Title>
                                        <Card.Text>
                                            800$
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-7'>
                        <div id='ban' className='p-4'>
                            <img src={D} alt='...' className='img-fluid rounded-center'></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Nyear

