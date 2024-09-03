import React from "react";
import Button from "../Button/Button.tsx";

type ProductCardDetails = {
    productType: string;
    productName: string;
    price: number;
    discountedPrice: number;
    productDetails: string
}

export default function ProductCardDetails({
                                               productType,
                                               productName,
                                               price,
                                               discountedPrice,
                                               productDetails
                                           }: ProductCardDetails): React.JSX.Element {
    return (
        <section className="card__details">
            <p className='card__details--overline'>{productType}</p>
            <h1 className='card__details--titles'>{productName}</h1>
            <p>{productDetails}</p>

            <div className='card__price'>
                <p className="card__price--green-display">${discountedPrice}</p>
                <p className="card__price--line-through"><s>${price}</s></p>
            </div>

            <Button>
                Add to Cart
            </Button>
        </section>
    )
}