import CartIcon from '../../assets/icon-cart.svg'
import Avatar from '../../assets/image-avatar.png'
const HeaderAction = () => {
    return (
        <div className={"flex items-center gap-6 sm:gap-12"}>
            <button type={"button"} className={"flex justify-center items-center shrink-0"}>
                <img src={CartIcon} alt={"cart-icon"}/>
            </button>
            <button type={"button"} className={"flex justify-center items-center w-6 h-6 sm:w-12.5 sm:h-12.5 shrink-0"}>
                <img src={Avatar} alt={"avatar"}/>
            </button>
        </div>
    );
};

export default HeaderAction;