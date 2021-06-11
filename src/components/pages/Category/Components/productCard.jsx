// import React from 'react';
// import { FiHeart } from 'react-icons/fi';
// import { BsStarFill,BsStarHalf,BsStar } from "react-icons/bs";
// import {Dropdown} from "react-bootstrap";
// import product from "../../../../api/SingleProduct.json";
// import { CardDesign, Linkdec, Procard, Badge, ProductThumb, ProductDescription, ProductBottomDetails, ProductPrice, PriceSmall, ProLink, OfferColor} from '../../../../styles/pages/category-styles';
// import { Button } from '../../../../styles/widgets/widgets';
// const Card2 = () => {
// 	const listItems = product.map((item) =>
// 	<div key={item.id}>
// 		<div class="container">
// 		<div class="row">
// 		  <div class="col-md-6 thumb">
// 			 <img style={{width:'600px',height:'300px',paddingLeft:'50px'}} class="d-block" src={item.thumb} alt="Second slide"/>
// 			 {
// 				 item.src.map(img => (
// 						<img style={{height:'120px',width:'150px',paddingLeft:'40px',paddingTop:'40px'}} src={img} alt="image"/>
// 				 ))
// 			 }
// 		  </div>
// 		  <div class="col-md-6">
// 			<div class="row">
// 			  <h2>{item.product_name}</h2>
// 			</div>
// 			<div class="row">
// 			  <h4>₹{item.newprice} &nbsp;<del>₹{item.oldprice}</del>&nbsp;&nbsp;<span class="text-success">{item.offer}% off</span></h4>
// 			</div>
// 			<div class="row">
// 			  <h3 class="text-warning"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/><BsStar/></h3>
// 			</div>
// 			<div class="row">
// 			  <div class="container">
// 				  <p>{item.description}Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
// 					  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
// 					  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
// 					  It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
// 					  essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
// 					  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
// 			  </div>
// 			</div>
// 			<div class="row mt-2 d-flex">
// 			  <h4>Size: &nbsp; &nbsp;</h4>
// 			  <Dropdown>
//   <Dropdown.Toggle style={{backgroundColor:'plum',borderColor:'plum'}} id="dropdown-basic">
//     Choose Size
//   </Dropdown.Toggle>
//   <Dropdown.Menu>
//   {
// 		item.size.map(size=> (
// 			<div>
// 			<Dropdown.Item href="">{size}</Dropdown.Item>
// 			</div>
// 		))
//   }
    
//   </Dropdown.Menu>
// </Dropdown>
// 			</div>
// 			<div class="row mt-2 d-flex">
// 			<h4>Color: &nbsp; &nbsp;</h4>
// 			<div>
// 				{
// 					item.colors.map(color=> (
// 						<Button style={{background:color,width:'20px',height:'30px',borderRadius:'50%',marginLeft:'10px'}}></Button>
// 					))
// 				}
			 
// 			</div>
// 			</div>
// 			<div style={{paddingTop:'30px'}} class="row mt-2">
// 			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
// 			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button>Add to Cart</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button>Add to Wishlist</Button>
// 			</div>
// 		  </div>
// 		</div>
// 	  </div>
// 	  <div class="container">
// 		<div class="row mt-5">
// 			<h2>Similar Products</h2>
// 		</div>
// 		<div class="d-flex">
// 		<div>
// 		<CardDesign>
//     	<Procard>
// 		<Badge Status="New">New</Badge>
// 		<ProductThumb>
// 			<a href="/products"><img style={{height:'240px',width:'200px',padding:'10px'}} src="https://picsum.photos/seed/picsum/200/300" alt="img"></img></a>
// 		</ProductThumb>
// 		<div>
// 			<h4><Linkdec href="/products">Headphones</Linkdec></h4>
// 			<ProductDescription>User Friendly</ProductDescription>
// 			<ProductBottomDetails>
// 			<ProductPrice>₹400<PriceSmall>₹800</PriceSmall><OfferColor>40%OFF</OfferColor><ProLink href=""><FiHeart/></ProLink></ProductPrice>
// 			</ProductBottomDetails>
// 		</div>
// 	</Procard>
// 	</CardDesign>
// 		</div>
// 		<div>
// 		<CardDesign>
//     	<Procard>
// 		<Badge Status="New">New</Badge>
// 		<ProductThumb>
// 			<a href="/products"><img style={{height:'240px',width:'200px',padding:'10px'}} src="https://picsum.photos/seed/picsum/200/300" alt="img"></img></a>
// 		</ProductThumb>
// 		<div>
// 			<h4><Linkdec href="/products">Headphones</Linkdec></h4>
// 			<ProductDescription>User Friendly</ProductDescription>
// 			<ProductBottomDetails>
// 			<ProductPrice>₹400<PriceSmall>₹800</PriceSmall><OfferColor>40%OFF</OfferColor><ProLink href=""><FiHeart/></ProLink></ProductPrice>
// 			</ProductBottomDetails>
// 		</div>
// 	</Procard>
// 	</CardDesign>
// 		</div>
// 		<div>
// 		<CardDesign>
//     	<Procard>
// 		<Badge Status="New">New</Badge>
// 		<ProductThumb>
// 			<a href="/products"><img style={{height:'240px',width:'200px',padding:'10px'}} src="https://picsum.photos/seed/picsum/200/300" alt="img"></img></a>
// 		</ProductThumb>
// 		<div>
// 			<h4><Linkdec href="/products">Headphones</Linkdec></h4>
// 			<ProductDescription>User Friendly</ProductDescription>
// 			<ProductBottomDetails>
// 			<ProductPrice>₹400<PriceSmall>₹800</PriceSmall><OfferColor>40%OFF</OfferColor><ProLink href=""><FiHeart/></ProLink></ProductPrice>
// 			</ProductBottomDetails>
// 		</div>
// 	</Procard>
// 	</CardDesign>
// 		</div>
// 		<div>
// 		<CardDesign>
//     	<Procard>
// 		<Badge Status="New">New</Badge>
// 		<ProductThumb>
// 			<a href="/products"><img style={{height:'240px',width:'200px',padding:'10px'}} src="https://picsum.photos/seed/picsum/200/300" alt="img"></img></a>
// 		</ProductThumb>
// 		<div>
// 			<h4><Linkdec href="/products">Headphones</Linkdec></h4>
// 			<ProductDescription>User Friendly</ProductDescription>
// 			<ProductBottomDetails>
// 			<ProductPrice>₹400<PriceSmall>₹800</PriceSmall><OfferColor>40%OFF</OfferColor><ProLink href=""><FiHeart/></ProLink></ProductPrice>
// 			</ProductBottomDetails>
// 		</div>
// 	</Procard>
// 	</CardDesign>
// 		</div>
// 		<div>
// 		<CardDesign>
//     	<Procard>
// 		<Badge Status="New">New</Badge>
// 		<ProductThumb>
// 			<a href="/products"><img style={{height:'240px',width:'200px',padding:'10px'}} src="https://picsum.photos/seed/picsum/200/300" alt="img"></img></a>
// 		</ProductThumb>
// 		<div>
// 			{/* <ProductCategory class="product_catagory">{item.category}</ProductCategory> */}
// 			<h4><Linkdec href="/products">Headphones</Linkdec></h4>
// 			<ProductDescription>User Friendly</ProductDescription>
// 			<ProductBottomDetails>
// 			<ProductPrice>₹400<PriceSmall>₹800</PriceSmall><OfferColor>40%OFF</OfferColor><ProLink href=""><FiHeart/></ProLink></ProductPrice>
// 			</ProductBottomDetails>
// 		</div>
// 	</Procard>
// 	</CardDesign>
// 		</div>
// 		</div>
// 		<div class="container mt-5 mb-5">
//     <div class="row">
//         <h2>Ratings & Reviews</h2>
//     </div>
    
//     <div class="row mt-5 mb-5">
//         <div class="media">
//   <img class="mr-3" src="11.jpg" alt="Generic placeholder image"/>
//   <div class="media-body">
//     <h5 class="mt-0">Very nice product. <span class="text-warning"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/><BsStar/> </span></h5>
//     Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
//   </div>
// </div>
//     </div>
    
//     <div class="row mb-5">
//     <div class="media"> <img class="mr-3" src="11.jpg" alt="Generic placeholder image"/>
//       <div class="media-body">
//         <h5 class="mt-0">Best product best material.<span class="text-warning"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/><BsStar/> </span></h5>
//         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. </div>
//     </div>
//   </div>
  
  
//   <div class="row mb-5">
//     <div class="media"> <img class="mr-3" src="./11.jpg" alt="Generic placeholder image"/>
//       <div class="media-body">
//         <h5 class="mt-0"> Bad product.dont take this<span class="text-warning"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/><BsStar/> </span></h5>
//         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. </div>
//     </div>
//   </div>
  
  
//   <div class="row mb-5">
//     <div class="media"> <img class="mr-3" src="./11.jpg" alt="Generic placeholder image"/>
//       <div class="media-body">
//         <h5 class="mt-0">really nice product,value for money.<span class="text-warning"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/><BsStar/> </span></h5>
//         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. 
// 		</div>
//     </div>
//   </div>
    
// </div>
//    </div>
//    </div>
// 	);
//     return(
// 		<div>
// 		{listItems}
// </div>
	  
//     )
// }

// export default Card2;