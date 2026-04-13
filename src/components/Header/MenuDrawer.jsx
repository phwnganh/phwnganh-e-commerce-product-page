import CloseIcon from "../../assets/icon-close.svg";

const MenuDrawer = ({onClose}) => {
    return (
        <nav role={"menu"} className={"fixed inset-0 bg-black/75 z-999"}>
            <div className={"flex flex-col gap-14 bg-white py-12 px-20 mr-auto w-2/3 max-w-xs h-full"}>
                <button type={"button"} onClick={onClose} aria-label={"Close the menu drawer"} className={"flex justify-center items-center w-4 h-4"}>
                    <img src={CloseIcon} alt={"close"}/>
                </button>
                <aside aria-label={"menu-site"} className={"flex flex-col gap-6"}>
                    <a href={"/collections"} className={"text-preset-3 leading-preset-3 font-preset-3"}>Collections</a>
                    <a href={"/men"} className={"text-preset-3 leading-preset-3 font-preset-3"}>Men</a>
                    <a href={"/women"} className={"text-preset-3 leading-preset-3 font-preset-3"}>Women</a>
                    <a href={"/about"} className={"text-preset-3 leading-preset-3 font-preset-3"}>About</a>
                    <a href={"/contact"} className={"text-preset-3 leading-preset-3 font-preset-3"}>Contact</a>
                </aside>
            </div>
        </nav>
    );
};

export default MenuDrawer;