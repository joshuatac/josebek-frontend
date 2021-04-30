import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductPage } from '../../../actions';
import getParams from '../../../utility/getParams';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { generatePublicUrl } from '../../../urlConfig';
import Card from '../../../components/UI';
/**
 * @author
 * @function ProductPage
 **/

const ProductPage = (props) => {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product);
	const { page } = product;
	useEffect(() => {
		const params = getParams(props.location.search);
		const payload = {
			params,
		};
		dispatch(getProductPage(payload));
	}, []);
	return (
		<div style={{ margin: '0 10px' }}>
			<h3>{page.title}</h3>
			<Carousel renderThumbs={() => {}}>
				{page.banners &&
					page.banners.map((banner, index) => (
						<a
							key={index}
							style={{ display: 'block' }}
							href={banner.navigateTo}
						>
							<img src={generatePublicUrl(banner.img)} alt='' />
						</a>
					))}
			</Carousel>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexWrap: 'wrap',
					margin: '10px 0',
				}}
			>
				{page.products &&
					page.products.map((product, index) => (
						<Card
							style={{
								width: '400px',
								height: '200px',
								margin: '5px',
							}}
							key={index}
						>
							
							<img
								style={{
									width: '100%',
									height: '50%',
									objectFit: 'contain',
									marginTop:'30px'

								}}
								alt=''
								src={generatePublicUrl(product.img)}
							/>
						</Card>
					))}
			</div>
		</div>
	);
};
export default ProductPage;
