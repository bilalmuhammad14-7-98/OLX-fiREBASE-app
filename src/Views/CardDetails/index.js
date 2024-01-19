import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import "./index.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FbImageLibrary from "react-fb-image-grid";

function CardDetails() {
  const [cardData, setCardData] = useState([]);
  let { id } = useParams();
  console.log(id);

  useEffect(function () {
    getCardDataFromAPI();
  }, []);

  function getCardDataFromAPI() {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setCardData(res));
  }
  console.log(cardData);

  const cardImages = [cardData.images];

  return (
    <>
    <Header />
    <div className="MainDivv">
      <div className="image-library">
        <FbImageLibrary images={cardImages[0]} />
      </div>
      <div className="details" >
        <h3>{cardData.title}</h3>
        <h4><span>Price: Rs </span>{cardData.price} </h4>
        <h4><span>Brand: </span>{cardData.brand}</h4>
        <h4><span>Category: </span>{cardData.category}</h4>
        <h4><span>Rating: </span>{cardData.rating}</h4>
        <h4><span>Description: </span>{cardData.description}</h4>
        <p>Posted 3 Days Ago</p>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default CardDetails;
