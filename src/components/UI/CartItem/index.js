import React, { useState } from 'react';
import { generatePublicUrl } from '../../../urlConfig';
import './style.css';
/**
 * @author
 * @function CartItem
 **/

const CartItem = (props) => {
	const [qty, setQty] = useState(props.cartItem.qty);

	const { _id, name, price, img } = props.cartItem;

	const onQuantityIncrement = () => {
		setQty(qty + 1);
		props.onQuantityInc(_id, qty + 1);
	};

	const onQuantityDecrement = () => {
		if (qty <= 1) return;
		setQty(qty - 1);
		props.onQuantityInc(_id, qty - 1);
	};
	return (
		<div className='cartItemContainer'>
			<div className='flexRow'>
				<div className='cartProImgContainer'>
					<img src={generatePublicUrl(img)} alt={''} />
				</div>
				<div className='cartItemDetails'>
					<div>
						<p className="cartName">{name}</p>
						<p className="cartPrice"> {price}</p>
					</div>
				</div>

			</div>
			<h5 className="delivery">Delivery in 3- 7days</h5>
			<div className="actionCart">
				<div className='qualityControl'>
					<button onClick={onQuantityDecrement}>-</button>
					<input value={qty} readOnly />
					<button onClick={onQuantityIncrement}> +</button>
				</div>

				<button className='cartActionBtn'>save</button>
				<button
					onClick={() => props.onRemoveCartItem(_id)}
					className='cartActionBtn'
				>
					remove
				</button>
			</div>
		</div>
	);
};

export default CartItem;
