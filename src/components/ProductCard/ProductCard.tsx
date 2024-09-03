import React from "react";
import ProductCardDetails from "./ProductCardDetails.tsx";

type ProductCardType = {
    productType: string;
    productName: string;
    price: number;
    discountedPrice: number;
    productDetails: string
    productImage: string[];
}

export default function ProductCard({
                                        productType,
                                        productName,
                                        price,
                                        discountedPrice,
                                        productDetails,
                                        productImage
                                    }: ProductCardType): React.JSX.Element {

    return (
        <section className="card">
            <picture>
                <source srcSet={productImage[1]} media="(min-width:41.25rem)"/>
                <img src={productImage[0]} alt="Perfume Image" className="card__image"/>
            </picture>

            <ProductCardDetails productType={productType}
                                productName={productName}
                                price={price}
                                discountedPrice={discountedPrice}
                                productDetails={productDetails}/>
        </section>
    )
}