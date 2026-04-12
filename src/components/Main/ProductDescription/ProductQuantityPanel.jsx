import MinusIcon from '../../../assets/icon-minus.svg'
import PlusIcon from '../../../assets/icon-plus.svg'
import {useState} from "react";
const ProductQuantityPanel = () => {
    const [quantity, setQuantity] = useState(0)

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const handleDecreaseQuantity = () => {
        if(quantity > 0){
            setQuantity(quantity - 1)

        }
    }
    return (
        <div className={"bg-grey-50 rounded-10 px-4 sm:px-6 md:px-7 py-4 flex items-center justify-between gap-26"}>
            <button onClick={handleDecreaseQuantity} type={"button"} aria-label={"decrease quantity"} className={"flex justify-center items-center shrink-0 w-3 h-3"}>
                <img src={MinusIcon} alt="Minus" />
            </button>
            <span aria-label={"quantity"} className={"text-preset-3 leading-preset-3 font-preset-3 text-grey-950 w-8"}>{quantity}</span>
            <button onClick={handleIncreaseQuantity} type={"button"} aria-label={"increase quantity"} className={"flex justify-center items-center shrink-0 w-3 h-3"}>
                <img src={PlusIcon} alt="Plus"/>
            </button>
        </div>
    );
};

export default ProductQuantityPanel;