import {useEffect, useState} from 'react'
import Product from './Product.jsx';
export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("../public/product.json")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);
    

    return (
        <>
        <h1>Product List</h1>
        {products.map((product) => (
            <Product product={product} key={product.id} />
        ))}
        </>
    )
}