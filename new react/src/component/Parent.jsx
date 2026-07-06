import React from "react"
import Child from "./child"
import Product from "./product"
const parent = () => {
    const userName = "Prince chauhan"
    const product = {
        name: "Iphone 14",
        price: 120000,
        qty: 40,
        pimage: "https://cdn.pixabay.com/photo/2024/01/09/06/18/smartphone-8496919_1280.jpg"
    }
    return (
        <>
            <h1>This is the Parent Component</h1>
            <Child fname={userName} />
            <Product data={product} />
        </>
    )
}
export default parent;