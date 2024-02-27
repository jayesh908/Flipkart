import React from "react";
import Table from "react-bootstrap/Table";
import "./cartdata1.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Newcart = () => {
  const { productId } = useParams();
  const [data, setData] = useState({});
  const [increasedata, setincreasedata] = useState(0);

  const fetchData = async (productId) => {
    await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      });
  };

  useEffect(() => {
    fetchData(productId);
  }, [productId]);

  return (
    <>
      {data ? (
        <div className="container-fluid pda-1">
          <div className="row">
            <div className="col-12">
              <p>
                <Link to="/home">Home</Link>/cart
              </p>
            </div>
          </div>
          <div className="row tb-1">
            <div className="col-lg-12">
              <Table
                responsive
                striped
                hover
                size="sm"
                style={{ height: "100px" }}
              >
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={data.id}>
                    <td>
                      <img src={data.image} alt="" className="bt-img" />
                    </td>
                    <td>
                      <div className="bt-img">{data.price}$</div>
                    </td>
                    <td>
                      <div className=" br-1">
                        {increasedata}
                        <div className="br-2">
                          <KeyboardArrowUpIcon
                            onClick={() => {
                              setincreasedata(increasedata + 1);
                            }}
                          />
                          <KeyboardArrowDownIcon
                            onClick={() => {
                              setincreasedata(increasedata - 1);
                            }}
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="bt-img">6576876</div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      ) : (
        <center>
          <h6 className="mt-5">empty cart</h6>
        </center>
      )}

      <div className="container-fluid pda-1">
        <div className="row mtn-1">
          <div className="col-6">
            <Link to="/home" className="cart-b">
              Return to shop
            </Link>
          </div>
          <div className="col-6 cart-1">
            <Link to="/home" className="cart-b">
              update to cart
            </Link>
          </div>
        </div>

        <div className="row p-3 mtn-1">
          <div className="col-7 mt-1">
            <input type="text" placeholder="Coupon code" className="btn-tn" />
            <button className="btn-t">apply code</button>
          </div>
          <div className="col-md-5 col-sm-12  mtn-1">
            <div className="d-1">
              <div className="row">
                <h4 className="text-dark mb-4">Card Total</h4>
                <div className="col-10">
                  <p>Subtotal</p>
                </div>
                <div className="col-2">
                  <p>$300</p>
                </div>
                <hr />
              </div>
              <div className="row">
                <div className="col-10">
                  <p>Shipping</p>
                </div>
                <div className="col-2">
                  <p>free</p>
                </div>
                <hr />
              </div>
              <div className="row">
                <div className="col-10">
                  <p>Total</p>
                </div>
                <div className="col-2">
                  <p>$3670</p>
                </div>
                <hr />
              </div>
              <center>
                <Link to="/address">
                  <button className="bt-b">Proceed to Checkout</button>
                </Link>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newcart;