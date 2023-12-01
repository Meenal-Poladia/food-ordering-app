import React from 'react';
import foodImage from "../../../assets/header.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import CartIcon from "../../Cart/CartIcon";

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1 className={classes.heading}>Meenal's Rasoi</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={foodImage} alt="A table full of food"/>
            </div>
        </>
    );
};

export default Header;
