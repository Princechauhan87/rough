import React from 'react';

const Product = (props) => {
    console.log(props);
    const { name, price, qty, pimage } = props.data;
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-boader">
                        <img src={image} alt="" className="img-fluid" />
                    </div>
                    <div className="card-body  text-center fw-bold fs-3 fst-italic">
                        {name}
                    </div>
                    <div className="card-footer d-flex justify-content-around">
                        <span>{price}</span>
                        <span>{qty}</span>
                        <span>{price*qty}</span>
                </div>
            </div>
            </div>
        </>
    )
}

export default Product;