import "./index.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postAd } from "../../Config/firebase";

function PostAd() {
  const navigate = useNavigate();
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState();
  

  const post = async () => {
   await postAd({ productName, productPrice, description, quantity });
    navigate("/ ");
  };
  return(
    <div className="form-v5">
      <div className="page-content">
        <div className="form-v5-contentt">
          <div className="form-detail" action="#" method="post">
            <h2>Post Your Ad</h2>
            <div className="form-row">
              <label for="product-name">Product Name:</label>
              <input
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                name="product-name"
                id="product-name"
                className="input-text"
                placeholder="Product Name"
                required
              />
            </div>
            <div className="form-row">
              <label for="product-price">Product Price:</label>
              <input
                onChange={(e) => setProductPrice(e.target.value)}
                type="text"
                name="product-price"
                id="product-price"
                className="input-text"
                placeholder="Product Price"
                required
              />
            </div>
            <div className="form-row">
              <label for="description"> Description:</label>
              <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                name="description"
                id="description"
                className="input-text"
                placeholder="Description"
                required
              />
            </div>
            <div className="form-row">
              <label for="quantity">Quantity:</label>
              <input
                onChange={(e) => setQuantity(e.target.value)}
                type="text"
                name="quantity"
                id="quantity"
                className="input-text"
                placeholder="Available Quantity"
                required
              />
            </div>
            <div className="post-btn">
              <button onClick={post} className="reg">
                Post Ad
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostAd;
