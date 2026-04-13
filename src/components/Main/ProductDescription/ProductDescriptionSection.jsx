import ProductPriceSection from "./ProductPriceSection.jsx";
import ProductQuantityPanel from "./ProductQuantityPanel.jsx";
import Button from "../../uis/Button.jsx";
import CartIcon from '../../../assets/icon-cart.svg'
import {useState} from "react";
import {useCartStore} from "../../../stores/cart.store.js";
const ProductDescriptionSection = () => {
    const [quantity, setQuantity] = useState(0);
    const {addToCart} = useCartStore()
    const product = {
        id: 1,
        title: "Fall Limited Edition Sneakers",
        price: 125,
        image: "./image-product-1-thumbnail.jpg"
    }

    const handleAddToCart = () => {
        addToCart(product, quantity)
    }
    return (
        <div aria-label={"product information"} aria-labelledby={"product-title"} aria-describedby={"product-description"} className={"flex flex-col gap-4 sm:gap-6 md:gap-8 px-6 sm:px-0"}>
            <p className={"text-grey-500 text-preset-5 leading-preset-5 font-preset-5 uppercase"}>Sneaker Company</p>
            <h1 id={"product-title"} className={"text-preset-2 sm:text-preset-1 leading-preset-2 sm:leading-preset-1 font-preset-1"}>Fall Limited Edition Sneakers</h1>
            <p id={"product-description"} className={"text-preset-4 sm:text-preset-3 leading-preset-4 sm:leading-preset-3 text-grey-500"}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <ProductPriceSection/>
            <div className={"flex flex-col sm:flex-row gap-2"}>
                <ProductQuantityPanel quantity={quantity} setQuantity={setQuantity}/>
                <Button aria-label={"click to add to cart"} onClick={handleAddToCart} disabled={quantity === 0}>
                    <div className={"flex justify-center items-center shrink-0"}>
                        <img src={CartIcon} alt={"cart"}/>
                    </div>
                    <span className={"text-grey-950 text-preset-3 leading-preset-3"}>Add to cart</span>
                </Button>
            </div>
        </div>
    );
};

export default ProductDescriptionSection;