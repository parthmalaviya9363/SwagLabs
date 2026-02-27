import { Page } from "@playwright/test";

export const addToCartLocators = {
    productsText: 'Products',
    addItem1: '#add-to-cart-sauce-labs-backpack',
    addItem2: '#add-to-cart-sauce-labs-bike-light',
    itemCount: '.shopping_cart_badge',
    yourCartText: 'Your Cart',
    checkoutButtonName: 'Checkout',
    checkoutText: 'Checkout: Your Information'
};

export const checkoutLocators = {
    firstName: '#first-name',
    lastName: '#last-name',
    postalCode: '#postal-code',
    continueButtonName: 'continue',
    itemTotal: '.summary_total_label',
    finishButtonName: 'Finish',
    headingText: 'Thank you for your order!'
};

export const loginLocators = {
    swagLabsText: 'Swag Labs',
    usernamePlaceholder: 'Username',
    passwordPlaceholder: 'Password',
    loginButtonName: 'Login',
    productsText: 'Products'
};

export const logoutLocators = {
    backHome: '#back-to-products',
    productsText: 'Products',
    openMenuButtonName: 'Open Menu',
    logoutLink: '#logout_sidebar_link',
    swagLabsText: 'Swag Labs'
};

export default addToCartLocators;
