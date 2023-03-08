import React, { useRef } from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "../../assets/teslaLogo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import NavbarDrawer from "../NavbarDrawer/NavbarDrawer";
import { useDisclosure } from "@chakra-ui/react";
import { NAVBAR_OPTIONS, SHOPPING_OPTIONS } from "../../constants/navbar";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <nav className="navbar-wrapper">
        <div className="logo-wrapper">
          <Logo className="logo" />
        </div>
        <div className="menu-wrapper">
          {NAVBAR_OPTIONS.slice(0, 6).map((option) => (
            <div className="nav-option" key={option.id}>
              {option.option}
            </div>
          ))}
        </div>
        <div className="shop-wrapper">
          {SHOPPING_OPTIONS.map((option) =>
            option?.route !== undefined ? (
              <div className="nav-option" key={option.id}>
                {option.option}
              </div>
            ) : (
              <div key={option.id} className="nav-option">
                <button onClick={onOpen} className="menu-btn">
                  Menu
                </button>
              </div>
            )
          )}
        </div>
        <div className="hamburger-wrapper">
          <AiOutlineMenu onClick={onOpen} className="hamburger" />
        </div>
        <NavbarDrawer isOpen={isOpen} btnRef={btnRef} onClose={onClose} />
      </nav>
    </>
  );
};

export default Navbar;
