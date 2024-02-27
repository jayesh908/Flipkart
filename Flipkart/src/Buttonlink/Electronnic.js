import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';


const Electronnic = () => {
    const [elect, setelect] = useState([])
    const getuse = async () => {
        const response = await fetch("https://fakestoreapi.com/products/category/electronics");
        setelect(await response.json());

    }
    useEffect(() => {
        getuse()
    }, [])
    const data = elect.map((ele) => {
        return (
            <div key={ele.id}>
                <Card style={{ width: '15rem' }} className='mb-4 cardd align-items-center p-2' >
                    <Card.Img variant="top" src={ele.image} className='img-fluid rounded-start p-2' style={{ height: "150px", width: "150px" }} />
                    <Card.Body>
                        <Card.Title>{ele.category}</Card.Title>
                        <Card.Text>
                            {ele.price}$
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        )
    })
    return (
        <>
            <div className='text-center , align-items-center my-5'><h2>Best deals on Electronnic</h2></div>

            <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                {data}
            </div>

        </>
    )
}

export default Electronnic
