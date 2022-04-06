import React from "react";
import ReactDOM from "react-dom";

const img1 =
  "https://cfassets.cbcrabcakes.com/media/catalog/product/cache/10ee24c73190ee7a6885bf5c2c83d2f0/a/-/a-01_5_sq_2.jpg";
const img2 =
  "https://cdn.shopify.com/s/files/1/2007/1723/products/grouper_fish_and_wild_1024x1024@2x.jpg?v=1542816072";
const img3 =
  "https://www.momontimeout.com/wp-content/uploads/2022/02/mai-tai.jpeg";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      My Favorite Food
    </h1>
    <ul>
      <li>Crab Cakes</li>
      <img className="food-img" src={img1} />

      <li>Grouper</li>
      <img className="food-img" src={img2} />

      <li>Mai Tai</li>
      <img className="food-img" src={img3} />
    </ul>
  </div>,
  document.getElementById("root")
);
