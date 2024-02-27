import React from 'react'
// import { Link } from 'react-router-dom'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import StarIcon from '@mui/icons-material/Star';
import BalconyIcon from '@mui/icons-material/Balcony';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const Footer = () => {
    return (
        <>
            <div id='foot'  className='container-fluid text-white p-4 ' style={{ backgroundColor: "#212121" }}>
                <div className='container align-items-center'>
                    <div id='soc' className='row text-center'>
                        <div className='col-lg-2 col-md-4'>
                            <div>
                                <ul>
                                    <h6>ABOUT</h6>
                                    <li>Contact Us</li>
                                    <li>About Us</li>
                                    <li>Careers</li>
                                    <li>Flipkart Stories</li>
                                    <li>Press</li>
                                    
                                    <li>Flipkart Wholesale</li>
                                    <li>Corporate Information</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-4'>
                            <div>
                                <ul>
                                    <h6>Help</h6>
                                    <li>Payments</li>
                                    <li>Shipping</li>
                                    <li>Cancellatons & Returns</li>
                                    <li>FAQ</li>
                                    <li>Report Infringment</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-4'>
                            <ul>
                                <h6>POLICY</h6>
                                <li>Return Policy</li>
                                <li>Terms Of Use</li>
                                <li>Security</li>
                                <li>Privacy</li>
                                <li>Sitemap</li>
                                <li>ERP companies</li>
                            </ul>
                        </div>
                        <div className='col-lg-2 col-md-4'>
                            <div>
                                <ul>
                                    <h6>SOCIAL</h6>
                                    <li>Facebook</li>
                                    <li>Twitter </li>
                                    <li>Youtube </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-2 text-start col-md-4 ' id='ver'>
                            <div>
                                <h6>Mail Us:</h6>
                                <p style={{ fontSize: "13px" }}>
                                    Flipkart Internet Private Limited,<br />
                                    Buildings Alyssa, Begonia &<br />
                                    Clove Embassy Tech Village,<br />
                                    Outer Ring Road, Devarabeesanahalli Village,<br />
                                    Bengaluru, 560103,<br />
                                    Karnataka, India
                                </p>
                            </div>
                        </div>

                        <div className='col-lg-2 col-md-4 text-start'>
                            <div>
                                <h6>Registered Office Address</h6>
                                <p style={{ fontSize: "13px" }}>
                                    Flipkart Internet Private Limited,<br />
                                    Buildings Alyssa, Begonia &<br />
                                    Clove Embassy Tech Village,<br />
                                    Outer Ring Road, Devarabeesanahalli Village,<br />
                                    Bengaluru, 560103,<br />
                                    Karnataka, India<br />
                                    CIN : U51109KA2012PTC066107<br />
                                    Telephone: <span className="tel">044-45614700</span>
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
                <hr></hr>
            <div className='container-fluid' >
                <div className='container'>
                    <div className='row fot text-center'>
                        <div className='col-lg-2 col-md-2'>
                            <p><span><BalconyIcon style={{color:"yellow",fontSize:"16px"}} /></span>Become a Seller</p>
                        </div>
                        <div className='col-lg-2 col-md-2'><p><span><StarIcon style={{color:"yellow",fontSize:"16px"}}/></span>Advertise</p></div>
                        <div className='col-lg-2 col-md-2'><p><span><CardGiftcardIcon style={{color:"yellow",fontSize:"16px"}} /></span>Gift Cards</p></div>
                        <div className='col-lg-2 col-md-2'><p><span>< HelpCenterIcon style={{color:"yellow",fontSize:"16px"}}/></span>Help Center</p></div>
                        <div className='col-lg-2 col-md-2'><p>&#169; 2007-2023 Flipkart.com</p></div>
                    </div>
                </div>
            </div>
            </div>
            
        </>

    )
}

export default Footer
