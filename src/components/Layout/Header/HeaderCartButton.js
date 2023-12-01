import React, {useContext, useEffect, useState} from 'react';
import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../../store/cart-context";

const  HeaderCartButton = (props) => {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

    const cartContext = useContext(CartContext);
    const {items} = cartContext

    useEffect(() => {
        if(items.length === 0) {
            return
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        }
    }, [items])

    const btnClasses = `${classes.button} ${buttonIsHighlighted && classes.bump}`;

    const numberOfItems = cartContext.items.reduce((currentItem, item) => {
        return currentItem + item.amount;
    }, 0)

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    );
};

export default HeaderCartButton;
