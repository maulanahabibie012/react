export default function Product({product}) {
    return (
        <div>
            <h2>{product.is} : {product.name}</h2>
            <p>Harga : {product.price}</p>
        </div>
    );
}