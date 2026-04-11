import Logo from '../../assets/logo.svg'
const Menu = () => {
    return (
        <nav aria-label={"menu-site"} className={"flex items-center gap-14"}>
            <div className={"flex justify-center items-center"}>
                <img src={Logo} alt="Logo" />
            </div>
            <div className={"hidden sm:flex items-center gap-8"}>
                <a href={"/collections"} className={"text-grey-500 text-preset-4 leading-preset-4"}>Collections</a>
                <a href={"/men"} className={"text-grey-500 text-preset-4 leading-preset-4"}>Men</a>
                <a href={"/women"} className={"text-grey-500 text-preset-4 leading-preset-4"}>Women</a>
                <a href={"/about"} className={"text-grey-500 text-preset-4 leading-preset-4"}>About</a>
                <a href={"/contact"} className={"text-grey-500 text-preset-4 leading-preset-4"}>Contact</a>

            </div>
        </nav>
    );
};

export default Menu;