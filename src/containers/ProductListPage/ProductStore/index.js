import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBySlug } from '../../../actions';
import { generatePublicUrl } from '../../../urlConfig';
import { Link } from "react-router-dom";
import Card from "../../../components/UI/index"
import Price from '../../../components/UI/Price';
import Rating from '../../../components/UI/Rating';
import "./style.css";
/**
* @author
* @function ProductStore
**/

const ProductStore = (props) => {

    const product = useSelector((state) => state.product);
const priceRange = product.priceRange;
	const dispatch = useDispatch();
	useEffect(() => {
		const { match } = props;
		dispatch(getProductsBySlug(match.params.slug));
	}, []);

  return(
  <>
{
				Object.keys(product.productsByPrice).map((key, index) => {
				return (
					<Card 
					headerLeft={`${props.match.params.slug} Mobile under ${priceRange[key]}`}
					headerRight={<button>view all</button>}
				className="productPage"
					>
				
						<div className="productWrapper">
							{
								product.productsByPrice[key].map(product => 
									<Link
									to={`/${product.slug}/${product._id}/p`}
									style={{display: 'block'}} className='productContainer'>
									<div className='productImgContainer'>
										<img
											src={generatePublicUrl(product.productPictures[0].img)}
											alt='product'
										/>
									</div>
									<div className='productInfo'>
										<div style={{
											margin: "10px 0"
										}}>{product.name}</div>
										<div>
											<Rating value={4.3} /> &nbsp; &nbsp;
											<span style={{
												color: "#777",
												fontWeight: "500",
												fontSize: "12px"
											}}>3350</span>
										</div>
										<Price value={product.price} />
									</div>
								</Link>
						
									)
							}
						
						</div>
					</Card>
				);
			})}
  </>
   )

 }

export default ProductStore