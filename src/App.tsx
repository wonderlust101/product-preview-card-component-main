import ProductCard from "./components/ProductCard/ProductCard.tsx";
import ProductImageMobile from './assets/images/image-product-mobile.webp';
import ProductImageDesktop from './assets/images/image-product-desktop.webp';

export default function App() {

    return (
        <>
            <ProductCard productType="Perfume"
                         productName="Gabrielle Essence Eau De Parfum"
                         price={169.99}
                         discountedPrice={149.99}
                         productDetails="A floral, solar and voluptuous interpretation composed by Olivier Polge,
                         Perfumer-Creator for the House of CHANEL."
                         productImage={[ProductImageMobile, ProductImageDesktop]}/>
        </>
    )
}
