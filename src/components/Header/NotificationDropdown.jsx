import {useCartStore} from "../../stores/cart.store.js";
import deleteIcon from '../../assets/icon-delete.svg'
import Button from "../uis/Button.jsx";
const NotificationDropdown = () => {
    const {cartItems, total, clearCartItems} = useCartStore()
    return (
        <div className={"absolute z-50 -right-1/2 top-full mt-2 py-6 rounded-10 w-90 max-w-[90vw] shadow-[0px_20px_50px_-20px_#1D2026] bg-white"}>
            <div className={"flex flex-col gap-6"}>
                <h1 className={"text-preset-3 leading-preset-3 font-preset-3 px-3"}>Cart</h1>
                <hr className={"text-grey-100"}/>
                {cartItems.length > 0 ? (
                    <>
                        {cartItems.map((item, index) => (
                            <div key={index} className={"px-6 flex flex-col gap-6 justify-center"}>
                                <div className={"flex items-center gap-4"}>
                                    <img src={item.image} alt={item.title} className={"rounded-sm w-12.5 h-12.5 "}/>
                                    <div className={"flex flex-col"}>
                                        <p className={"text-preset-3 leading-preset-3 text-grey-500"}>{item.title}</p>
                                        <div className={"flex gap-2"}>
                                            <p className={"text-preset-3 leading-preset-3 text-grey-500"}>${item.price}.00 x {item.quantity}</p>
                                            <span className={"text-preset-3 leading-preset-3 text-grey-950 font-preset-3"}>${total}.00</span>
                                        </div>
                                    </div>
                                    <button type={"button"} onClick={clearCartItems} className={"flex justify-center items-center w-3 h-3 shrink-0"}>
                                        <img src={deleteIcon} alt={"delete"}/>
                                    </button>
                                </div>
                                <Button>Checkout</Button>
                            </div>

                        ))}

                    </>
                ) :
                    <div className={"flex flex-col justify-center items-center"}>
                    <p className={"text-preset-3 leading-preset-3 font-preset-3 text-grey-500 my-12"}>Your cart is empty.</p>
                </div>
                }
            </div>
        </div>
    );
};

export default NotificationDropdown;