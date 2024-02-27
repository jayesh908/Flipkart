import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GamesOutlinedIcon from '@mui/icons-material/GamesOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
// import { Link,Outlet } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { Badge, Button } from 'react-bootstrap';
//import SearchIcon from '@mui/icons-material/Search';
//import NavDropdown from 'react-bootstrap/NavDropdown';
const Navv = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home" style={{ color: "#2A55E5" }}>Flipkart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="d-flex" id='ser'>
                        <Form.Control
                            type="search"
                            placeholder="Search For Products Brands and More"
                            className="me-2"

                        />
                    </Form>
                    <Nav className="ms-auto" >
                        <div to="#home" className=' pe-4' style={{ color: "black" }}>
                            <div className="dropdown">
                                <AccountCircleOutlinedIcon style={{ paddingRight: "5px", fontSize: "30px" }} />Login <button className="dropbtn"><ArrowDropDownIcon /></button>
             
                                <div className="dropdown-content">
                                    <Link><span style={{ paddingRight: "10px" }}><AccountCircleOutlinedIcon /></span>My Profile</Link>
                                    <Link><span style={{ paddingRight: "10px" }}><GamesOutlinedIcon /></span>Flipkart Plus</Link>
                                    <Link><span style={{ paddingRight: "10px" }}><FavoriteBorderIcon /></span>Wishlist</Link>
                                    <Link><span style={{ paddingRight: "10px" }}><RedeemOutlinedIcon /></span> Rewards</Link>
                                    <Link><span style={{ paddingRight: "10px" }}><CardGiftcardIcon /></span>Gift Cards</Link>
                                </div>
                            </div></div>
                        <Nav.Link to="#features" className='pe-4' style={{ color: "black" }}><button style={{border:"none"}}><ShoppingCartOutlinedIcon style={{ paddingRight: "5px", fontSize: "30px" }} /><Badge>0</Badge></button>Cart</Nav.Link>
                        <Nav.Link to="#features" className='pe-4' style={{ color: "black" }}><Inventory2OutlinedIcon style={{ paddingRight: "5px", fontSize: "30px" }} />Become a Seller</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navv
