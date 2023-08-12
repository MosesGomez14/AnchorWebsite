const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="/AnchorWebsite/public/img/logoBlancoNegro.jpeg" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html#" class="link">About Anchor Apparel</a></li>
            <li class="link-item"><a href="gallery.html#" class="link">Gallery</a></li>
            <li class="link-item"><a href="product.html#" class="link">Shirt #1</a></li>
        </ul>
    `;
}

createNav();