import CartIcon from '../../assets/icon-cart.svg'
import Avatar from '../../assets/image-avatar.png'
import {useState} from "react";
import NotificationDropdown from "./NotificationDropdown.jsx";
import {useCartStore} from "../../stores/cart.store.js";
const HeaderAction = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {cartItems} = useCartStore()
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const handleOpen = () => {
        setIsOpen(true)
    }
    return (
        <div className={"flex items-center gap-6 sm:gap-12"}>
            <div className={"relative"}>
                <button type={"button"} className={"flex justify-center items-center shrink-0"}>
                    <img src={CartIcon} alt={"cart-icon"}/>
                </button>
                <div className={"absolute -top-1.5 -right-1.5 w-5 h-3 bg-orange-500 text-xs flex justify-center items-center rounded-6 text-white font-bold"}>{totalQuantity}</div>
            </div>

            <div className={"relative"}>
                <button onClick={handleOpen} type={"button"} className={`flex justify-center items-center w-6 h-6 sm:w-12.5 sm:h-12.5 shrink-0 ${isOpen ? "ring-2 ring-orange-500 rounded-full" : ""}`}>
                    <img src={Avatar} alt={"avatar"}/>
                </button>
                {isOpen && <NotificationDropdown/>}
            </div>

        </div>
    );
};

export default HeaderAction;