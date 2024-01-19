import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import "./index.css";
import Cards from "../../Components/Cards";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(function () {
    getDataFromAPI();
  }, []);

  function getDataFromAPI() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  }

  if (!data.length) {
    return (
      <div className="loader">
        <img alt='' src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" />
      </div>
    );
  }

  console.log(data);
  return (
    <>
    <Header />
      <div className="MainDiv">
        <div className="adv">
          <img
            alt=""
            src="https://images.olx.com.pk/thumbnails/423979386-800x600.webp"
          />
        </div>
        <div className="AllCategories">
          <div className="heading">
            <h3>All categories</h3>
          </div>
          <div class="container text-center">
            <div class="row">
              <div class="col-1 cat">
                <img
                  alt=""
                  width={80}
                  src="https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png"
                />
                <div className="tags">
                  <h4>Mobiles</h4>
                </div>
              </div>
              <div class="col-1 cat">
                <img
                  alt=""
                  width={80}
                  src="https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png"
                />
                <div className="tags">
                  <h4>Vehicles</h4>
                </div>
              </div>
              <div class="col-1 cat">
                <img
                  alt=""
                  width={80}
                  src="https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png"
                />
                <div className="tags">
                  <h4>Property for Sale</h4>
                </div>
              </div>
              <div class="col-1 cat">
                <img
                  alt=""
                  width={80}
                  src="https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png"
                />
                <div className="tags">
                  <h4>Property for Rent</h4>
                </div>
              </div>
              <div class="col-1 cat">
                <img
                  alt=""
                  width={80}
                  src="https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png"
                />
                <div className="tags">
                  <h4>Electronics & Home Appliances</h4>
                </div>
              </div>
              <div class="col-1 cat">
                <img
                  alt=""
                  width={80}
                  src="https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png"
                />
                <div className="tags">
                  <h4>Bikes</h4>
                </div>
              </div>
              <div class="col-1 cat">
                <img
                  alt=""
                  width={80}
                  src="https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png"
                />
                <div className="tags">
                  <h4>Business Industrial & Agriculture</h4>
                </div>
              </div>
              <div class="col-1 cat">
                <img
                  alt=""
                  width={80}
                  src="https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png"
                />
                <div className="tags">
                  <h4>Services</h4>
                </div>
              </div>
              <div class="col-1 cat">
                <img
                  alt=""
                  width={80}
                  src="https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png"
                />
                <div className="tags">
                  <h4>Jobs</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="container text-center">
            <div class="row">
              <div class="col-1 cat">
                <img
                  alt=""
                  width={80}
                  src="https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png"
                />
                <div className="tags">
                  <h4>Animals</h4>
                </div>
              </div>
              <div class="col-1 cat">
                <img
                  alt=""
                  width={80}
                  src="https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png"
                />
                <div className="tags">
                  <h4>Furniture & Home Decor</h4>
                </div>
              </div>
              <div class="col-1 cat">
                <img
                  alt=""
                  width={80}
                  src="https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png"
                />
                <div className="tags">
                  <h4>Fashion & Beauty</h4>
                </div>
              </div>
              <div class="col-1 cat">
                <img
                  alt=""
                  width={80}
                  src="https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png"
                />
                <div className="tags">
                  <h4>Books, Sports & Hobbies</h4>
                </div>
              </div>
              <div class="col-1 cat">
                <img
                  alt=""
                  width={80}
                  src="https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png"
                />
                <div className="tags">
                  <h4>Kids</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="heading">
            <h3>Mobile Phones & Electronic Appliances</h3>
          </div>
          <div>
            <div class="container text-center">
              <div class="row">
                {data.map(function (item) {
                  return (
                    <div class="col-3">
                      <Cards
                        thumbnail={item.thumbnail}
                        title={item.title}
                        brand={item.brand}
                        description={item.description}
                        id={item.id}
                        price={item.price}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Dashboard;
