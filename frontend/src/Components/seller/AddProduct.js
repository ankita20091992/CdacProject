import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SellerMenuBar from "./SellerMenuBar";
import { Button } from "reactstrap";
import { SERVER_BASE_URL } from "../../config";

const Product = () => {
  const [category, setCategory] = useState(0);
  const [seller, setSeller] = useState(0);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [productDiscount, setProductDiscount] = useState(0);
  const [productRating, setProductRating] = useState(0);
  const [productImage, setProductImage] = useState(undefined);

  const history = useNavigate();

  const product = () => {
    const body = new FormData();

    body.append("productName", productName);
    body.append("productDescription", productDescription);
    body.append("quantity", quantity);
    body.append("productPrice", productPrice);
    body.append("productDiscount", productDiscount);
    body.append("productRating", productRating);
    body.append("productImage", productImage);

    axios
      .post(
        SERVER_BASE_URL + `/products/category/${category}/seller/${seller}`,
        body
      )
      .then((response) => {
        const result = response.data;
        console.log(result);
        if (result) {
          alert("succcess");
          history("/sellerDashboard");
          console.log(result.category);
          console.log(result.seller);
        } else {
          alert("error");
        }
      });
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    console.log(data.name);
    setSeller(data.id);
    console.log(seller);
  }, [seller]);

  const dashboard = () => {
    history("/sellerDashboard");
  };

  return (
    <div className="row">
      <SellerMenuBar />

      <div className="col-8 py-2">
        <h2 className="text-indigo-600" style={{ textAlign: "left" }}>
          Add Product
        </h2>

        <div className="">
          <div>
            {/* <input
              className="form-control mb-4"
              type="hidden"
              required
              style={{ width: "400px" }}
              onChange={(e) => {
                setSeller(localStorage.getItem("data").id);
              }}
            /> */}
            {/* <input
              onChange={(e) => {
                setProductId(e.target.value);
              }}
              className="form-control mb-4"
              type="hidden"
              required
              style={{ width: "400px" }}
            /> */}
          </div>
          <div>
            {/* Product Name:{" "} */}
            <input
              onChange={(e) => {
                setProductName(e.target.value);
              }}
              className="form-control mb-4"
              type="text"
              placeholder="Product Name"
              required
              style={{ width: "400px" }}
            />
          </div>
          <div>
            {/* Product Description:{" "} */}
            <input
              onChange={(e) => {
                setProductDescription(e.target.value);
              }}
              className="form-control mb-4"
              type="text"
              required
              placeholder="Product Description"
              style={{ width: "400px" }}
            />
          </div>
          <div>
            {/* Category Id:{" "} */}
            <input
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="form-control mb-4"
              type="text"
              required
              placeholder="Category Id"
              style={{ width: "400px" }}
            />
          </div>

          <div>
            {/* Quantity{" "} */}
            <input
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              className="form-control mb-4"
              type="text"
              required
              placeholder="Quantity"
              style={{ width: "400px" }}
            />
          </div>
          <div>
            {/* Product Price:{" "} */}
            <input
              onChange={(e) => {
                setProductPrice(e.target.value);
              }}
              className="form-control mb-4"
              type="text"
              required
              placeholder=" Product Price"
              style={{ width: "400px" }}
            />
          </div>
          <div>
            {/* Product Discount:{" "} */}
            <input
              onChange={(e) => {
                setProductDiscount(e.target.value);
              }}
              className="form-control mb-4"
              type="text"
              required
              placeholder="Product Discount"
              style={{ width: "400px" }}
            />
          </div>

          <div>
            {/* Product Rating:{" "} */}
            <input
              onChange={(e) => {
                setProductRating(e.target.value);
              }}
              className="form-control mb-4"
              type="text"
              placeholder="Product Rating"
              required
              style={{ width: "400px" }}
            />
          </div>
          <div>
            {/* productImage:{" "} */}
            <input
              onChange={(e) => {
                setProductImage(e.target.files[0]);
              }}
              className="form-control mb-4"
              type="file"
              required
              placeholder="ProductImage"
              style={{ width: "400px" }}
            />
          </div>

          <div style={{ textAlign: "left" }}>
            <button onClick={product} className="btn btn-info">
              Add Product
            </button>
            {"   "}
            {"   "}
            {"  "}
            {"  "}
            <Button onClick={dashboard}>Back To DashBoard</Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
