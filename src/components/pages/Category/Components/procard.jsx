import React from "react";
import { FiHeart } from "react-icons/fi";
import product_card from "../../../../api/Products.json";
import { Badge, Card, CardImg, CardProductBottomDetails, CardProductDescription, CardProductName, CardProductOffer, CardProductOldprice, CardWishlist } from "../../../../styles/pages/category-styles";
const listItems = product_card.map((item) => (
          <Card className="col-xs-6 col-md-4 col-lg-2" key={item.id}>
              <Badge Status={item.badge}>{item.badge}</Badge>
              <a href="/products">
              <CardImg alt="Card image" className="card-img-top" variant="top" src={item.thumb} /></a>
                      <div className="card-block">
                        <CardProductName href="/products" className="card-title">{item.product_name}</CardProductName>
                        <CardProductDescription className="card-text">{item.description}</CardProductDescription>
                        <CardProductBottomDetails className="product-bottom-details">
                          ₹{item.newprice}<CardProductOldprice>₹{item.oldprice}</CardProductOldprice>
                          <CardProductOffer>{item.offer}%OFF</CardProductOffer>
                          <CardWishlist href=""><FiHeart /></CardWishlist>
                        </CardProductBottomDetails>
                      </div>
          </Card>
));

const Card1 = () => { 
    return ( <div className="container"> 
    <div className="row">
      {listItems}
    </div>
</div> );
}
 
export default Card1;