import React, { useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../actions';
import Layout from '../../components/Layout';
import { Breed } from '../../components/MaterialUI';
import Card from '../../components/UI';
import { generatePublicUrl } from '../../urlConfig';
import './style.css';
import { Link } from 'react-router-dom';

/**
 * @author
 * @function OrderPage
 **/

const OrderPage = (props) => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	useEffect(() => {
		dispatch(getOrders());
	}, []);
	console.log(user);
	return (
		<Layout>
			<div style={{ maxWidth: '1160px', margin: '5px auto' }}>
				<Breed
					breed={[
						{ name: 'Home', href: '/' },
						{ name: 'My Account', href: '/account' },
						{ name: 'My Orders', href: '/account/orders' },
					]}
					breedIcon={<IoIosArrowForward />}
				/>
			</div>
			{user.orders.map((order) => {
				return order.items.map((item) => (
					<Card
					className="orderContain"
					>
						<Link
							to={`/order_details/${order._id}`}
							className='orderItemContainer'
						>
							<div className='orderImgContainer'>
								<img
									className='orderImg'
									src={generatePublicUrl(item.productId.productPictures[0].img)}
								/>
							</div>
							<div className='orderRow'>
								<div className='orderName'> {item.productId.name} </div>
								<div className='orderPrice'>{item.payablePrice}</div>
								<div>{order.paymentStatus}</div>
							</div>
						</Link>
					</Card>
				));
			})}
		</Layout>
	);
};

export default OrderPage;
