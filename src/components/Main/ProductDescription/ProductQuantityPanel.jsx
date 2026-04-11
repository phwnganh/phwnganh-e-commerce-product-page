import MinusIcon from '../../../assets/icon-minus.svg'
import PlusIcon from '../../../assets/icon-plus.svg'
const ProductQuantityPanel = () => {
    return (
        <div className={"bg-grey-50 rounded-10 px-4 sm:px-6 md:px-7 py-4 flex items-center justify-between gap-26"}>
            <div className={"flex justify-center items-center shrink-0 w-3 h-3"}>
                <img src={MinusIcon} alt="Minus" />
            </div>
            <span className={"text-preset-3 leading-preset-3 font-preset-3 text-grey-950"}>3</span>
            <div className={"flex justify-center items-center shrink-0 w-3 h-3"}>
                <img src={PlusIcon} alt="Plus"/>
            </div>
        </div>
    );
};

export default ProductQuantityPanel;