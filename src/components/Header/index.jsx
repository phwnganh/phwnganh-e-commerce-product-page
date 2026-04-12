import Menu from "./Menu.jsx";
import HeaderAction from "./HeaderAction.jsx";

const Header = () => {
    return (
        <header className={"flex flex-col gap-8 px-6 sm:px-0"}>
            <div className={"flex items-center justify-between"}>
                <Menu/>
                <HeaderAction/>
            </div>
            <hr className={"text-grey-100 "}/>
        </header>

    );
};

export default Header;