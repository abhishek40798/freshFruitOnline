import logo from "../assets/img/logo.png";
import Cart from "../assets/icons/shopping_cart.svg";
import hover_cart from "../assets/icons/shopping_cart_hover.svg";
import Search from "../assets/icons/search.svg";
import herobg from "../assets/img/hero-bg.jpg";
import localShipping from "../assets/icons/local_shipping.svg";
import call from "../assets/icons/call.svg";
import refresh from "../assets/icons/autorenew.svg";
import product1 from "../assets/img/product-img-1.jpg";
import product2 from "../assets/img/product-img-2.jpg";
import product3 from "../assets/img/product-img-3.jpg";

export const images = {
    logo,
    Cart,
    Search,
    hover_cart,
    herobg,
    localShipping,
    call,
    refresh,
    product1,
    product2,
    product3
};

export const colors = {
    primaryColor: "#f28123",
    white: "#FFF",
    black: "#000",
};


export const convertRupeesToDollars = (rupees: number) => {
    const  dollars = Math.floor(rupees / 83);
    return `${dollars}$`;
};