import React from 'react';
import Layout from '../../components/Layout';
import getParams from '../../utility/getParams';
import ProductPage from './ProductPage';
import ProductStore from './ProductStore';
import DefaultStore from './DefaultStore';
import './style.css';

/**
 * @author
 * @function ProductListPage
 **/

const ProductListPage = (props) => {
	const renderProduct = () => {
		console.log(props);
		const params = getParams(props.location.search);
		let content = null;
		switch (params.type) {
			case 'store':
				content = <ProductStore {...props} />;
				break;
			case 'page':
				content = <ProductPage {...props} />;
				break;
			default:
				content = <DefaultStore {...props} />;
		}
		return content;
	};
	return <Layout>{renderProduct()}</Layout>;
};

export default ProductListPage;
