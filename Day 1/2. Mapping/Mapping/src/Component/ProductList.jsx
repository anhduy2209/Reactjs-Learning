import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphone", price: "$199" }
    ]
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h1>Product ID: {product.id}</h1>
                    <h1>Product name: {product.name}</h1>
                    <h1>Product price: {product.price}</h1>
                </div>
            ))}
        </div>
    )
}

export default ProductList