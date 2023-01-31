const minusBtn = document.querySelector(".input__minus");
const plusBtn = document.querySelector(".input__plus");
const userInput = document.querySelector(".input__number");
const addToCartBtn = document.querySelector(".details__button");
let cartNotification = document.querySelector(".header__cart--notification");
const cartIconBtn = document.querySelector(".header__cart");
const menuIcon = document.querySelector(".header__menu");
const cartModal = document.querySelector(".cart-modal");
const productContainer = document.querySelector(".cart-modal__chekout-container");
const productCheckout = document.querySelector(".checkout-product");
const imageContainer = document.querySelector(".gallery__image-container");
const previousGalleryBtn = document.querySelector(".gallery__previous");
const nextGalleryBtn = document.querySelector(".gallery__next");
const imageModal = document.querySelector(".modal-gallery__background")
const iconClosedModalBtn = document.querySelector(".modal-gallery__close");
const iconPreviousModalBtn = document.querySelector(".modal-gallery__previous");
const iconNextModalBtn = document.querySelector(".modal-gallery__next");
const modalBackground = document.querySelector(".modal-navbar__background");
const modalNavbar = document.querySelector(".modal-navbar");
const closeModalNavbarBtn = document.querySelector(".modal-navbar__close-icon");
const modalDetails = document.getElementById("details-products__container");
const modalImageContainer =  document.querySelector(".modal-gallery__image-container");
const link = document.querySelector(".product-link");
const returnLink = document.querySelector(".return-home");


let userInputNumber = 0;
plusBtn.addEventListener("click", () => {
    userInputNumber++;
    userInput.value = userInputNumber;
})
minusBtn.addEventListener("click", () => {
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
})
addToCartBtn.addEventListener("click", () => {
    cartNotification.innerText = userInputNumber;
    cartNotification.style.display = 'block';
    drawProductInModal();
})
cartIconBtn.addEventListener("click", () => {
    cartModal.classList.toggle('show');
    if(userInputNumber == 0){
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    } else {
        drawProductInModal();
    }
    productCheckout.style.display = 'none';
});
function deleteProduct() {
const deleteProductBtn = document.querySelector(".cart-modal__details-delete");
    deleteProductBtn.addEventListener("click", () => {
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
        userInputNumber = 0;
        cartNotification.innerText = userInputNumber;
    })
}

let imgIndex = 1;
const imagesUrls = [
    'images/image-product-1.webp',
    'images/image-product-2.webp',
    'images/image-product-3.webp',
    'images/image-product-4.webp',
]
nextGalleryBtn.addEventListener("click", () => {
    changeNextImage(imageContainer)
})
previousGalleryBtn.addEventListener("click", () => {
    changePreviousImage(imageContainer)
})
imageContainer.addEventListener("click", () => {
    imageModal.style.display = 'grid';
})
iconClosedModalBtn.addEventListener("click", () => {
    imageModal.style.display = 'none';
})
iconPreviousModalBtn.addEventListener("click", () => {
    changePreviousImage(modalImageContainer)
})
iconNextModalBtn.addEventListener("click", () => {
    changeNextImage(modalImageContainer)
})
menuIcon.addEventListener("click", () => {
    modalBackground.style.display = 'block';
    modalNavbar.style.display = 'block';
})
closeModalNavbarBtn.addEventListener("click", () => {
    modalNavbar.style.display = 'none';
    modalBackground.style.display = 'none';
})
link.addEventListener('click', () => {
    modalDetails.style.display = 'block';
})
returnLink.addEventListener('click', () => {
    modalDetails.style.display = 'none';
})

function changeNextImage(imgContainer) {
    if(imgIndex === 4){
        imgIndex = 1;
    } else {
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('images/image-product-${imgIndex}.webp')`;
}
function changePreviousImage(imgContainer) {
    if(imgIndex === 1){
        imgIndex = 4;
    } else {
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('images/image-product-${imgIndex}.webp')`;
}
function drawProductInModal() {
    productContainer.innerHTML = `<div class="cart-modal__chekout-container">
        <div class="cart-modal__details-container">
            <img class="cart-modal__image" src="images/image-product-1-thumbnail.webp" alt="">
            <div>
                <p class="cart-modal__details-product">Autumn Limited Edition...</p>
                <p class="cart-modal__details-price">$125.00 x3 <span>375.00</span> </p>
            </div>
            <img class="cart-modal__details-delete" src="svg/icon-delete.svg" alt="delete">
        </div>
        <button class="cart-modal__delete" id="checkout">Checkout</button>`;
    deleteProduct();
    let priceModal = document.querySelector(".cart-modal__details-price");
    priceModal.innerHTML = `$125.00 ${'x' + userInputNumber} <span>$${userInputNumber*125}.00</span>`;
    const checkoutBtn = document.getElementById("checkout");
    const productCart = document.querySelector(".cart-modal__details-container");
    checkoutBtn.addEventListener('click', () => {
        productCart.style.display = 'none';
        checkoutBtn.style.display = 'none';
        productCheckout.style.display = 'block';
    });
}

let thumbnails = document.querySelectorAll(".gallery__thumbnail");
thumbnails = [...thumbnails];
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", Event=> {
        imageContainer.style.backgroundImage = `url('images/image-product-${Event.target.id}.webp')`;
    })
})

let Modalthumbnails = document.querySelectorAll(".modal-gallery__thumbnail");
Modalthumbnails = [...Modalthumbnails];
Modalthumbnails.forEach(modalthumbnail => {
    modalthumbnail.addEventListener("click", Event=> {
        modalImageContainer.style.backgroundImage = `url('images/image-product-${Event.target.id.slice(-1)}.webp')`;
    })
})

function opcion() {
    let opciones = document.getElementsByName('elecciones');
    for(let i = 0; i < opciones.length; i++) {
        if(opciones[i].checked) {
        console.log(opciones[i].value);
        }
    }
}
