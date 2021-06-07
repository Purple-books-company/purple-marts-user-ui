import React from 'react';
import { FiHeart } from 'react-icons/fi';
import product_card from "../../../../api/Products.json";
import { Displaycard,CardDesign, Linkdec, Procard, Badge, ProductThumb, ProductDescription, ProductBottomDetails, ProductPrice, PriceSmall, ProLink, OfferColor} from '../../../../styles/pages/category-styles';

const Card1 = () => {
    const listItems = product_card.map((item) =>
		<CardDesign class="card">
    	<Procard class="product_card">
		<Badge class="badge" Status={item.badge}>{item.badge}</Badge>
		<ProductThumb class="product_thumb">
			<img style={{height:'240px',width:'200px',padding:'10px'}} src={item.thumb} alt="img"></img>
		</ProductThumb>
		<div class="product_details">
			{/* <ProductCategory class="product_catagory">{item.category}</ProductCategory> */}
			<h4><Linkdec href="">{item.product_name}</Linkdec></h4>
			<ProductDescription>{item.description}</ProductDescription>
			<ProductBottomDetails class="product_bottom_details">
			<ProductPrice class="product_price">₹{item.newprice}<PriceSmall>₹{item.oldprice}</PriceSmall><OfferColor>{item.offer}%OFF</OfferColor><ProLink href=""><FiHeart/></ProLink></ProductPrice>
			</ProductBottomDetails>
		</div>
	</Procard>
	</CardDesign>
);
    return(
        <Displaycard className="displaycard">
            {listItems}
        </Displaycard>
    )
}

export default Card1;
