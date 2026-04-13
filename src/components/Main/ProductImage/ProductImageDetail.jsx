import CloseIcon from '../../../assets/icon-close.svg'
import PreviousIcon from "../../../assets/icon-previous.svg";
import NextIcon from "../../../assets/icon-next.svg";
const ProductImageDetail = ({productImgs, currentIndex, setCurrentIndex, onClose}) => {
    const productImage = productImgs[currentIndex]

    const handleNext = () => {
        setCurrentIndex(prev => prev === productImgs.length - 1 ? 0 : prev + 1)
    }

    const handlePrevious = () => {
        setCurrentIndex(prev => prev === 0 ? productImgs.length - 1 : prev - 1)
    }
    return (
        <div className={"fixed z-50 inset-0 bg-black/75 flex justify-center items-center"}>
            <div className={"max-w-137.5 w-full mx-auto"}>
                <div className={"flex flex-col gap-6"}>

                    <div className={"relative"}>
                        <button type={"button"} aria-label={"close the modal"} onClick={onClose} className={"absolute flex justify-center items-center w-10 h-10 right-0 top-0"}>
                            <img src={CloseIcon} alt={"close"}/>
                        </button>
                        <img src={productImage.img} alt={productImage.title} className={"rounded-15 w-full"}/>
                        <button type={"button"} onClick={handlePrevious} aria-label={"click to view previous product img"} className={"absolute top-1/2 -left-5 flex justify-center items-center w-10 h-10 shrink-0 bg-white rounded-28"}>
                            <img src={PreviousIcon} alt={"previous"}/>
                        </button>
                        <button type={"button"} onClick={handleNext} aria-label={"click to view next product img"} className={"absolute top-1/2 -right-5 flex justify-center items-center w-10 h-10 shrink-0 bg-white rounded-28"}>
                            <img src={NextIcon} alt={"next"}/>
                        </button>
                    </div>
                    <div className={"flex mt-4 gap-8 justify-center"}>
                        {productImgs.map((img, index) =>
                            <button key={img.id} aria-label={"click to view product image"} aria-labelledby={img.title} type={"button"} onClick={() => setCurrentIndex(index)} className={`${currentIndex === index ? "opacity-75 ring-2 ring-orange-500" : ""} hover:opacity-50 rounded-10 w-22 h-22`}>
                                <img id={img.title} src={img.imgThumbnail} alt={img.title} className={"rounded-10"}/>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductImageDetail;