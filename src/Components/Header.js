import React from "react";
import Cart from "./Cart";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";


function Header() {
  
  const [{ basket }] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png "
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* <SearchSharpIcon className="header__searchIcon" /> */}
      </div>

      <div className="header__nav">
        <Link to='/login'>
          <div className="header__option">
            <span className="header__option__1">Hello Guest</span>
            <span className="header__option__2">Sign in</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__option__1">Returns</span>
          <span className="header__option__2">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option__1">Your</span>
          <span className="header__option__2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__basket">
            {/* <ShoppingBasketIcon onClick={() => setIsOpen(true)} /> */}
            <button>cart</button>

        

            <span className="header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
