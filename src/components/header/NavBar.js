import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {

    return (

            <header>
                <div className="containerBrand">
                    <Brand/>
                </div>

                <nav className="containerItemList">
                    <ItemListContainer
                    itemUno = "Mouses Wireless"
                    itemDos = "Mouses Wired"
                    itemTres = "Mousepad"
                    itemCuatro = "Bungees"
                    />
                </nav>

                <div className="containerCart">
                    <CartWidget/>
                </div>

            </header>
    )
}

export default NavBar;