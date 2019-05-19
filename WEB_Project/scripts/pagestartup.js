let menuItems = [
    { title: "Home", link: "index.html" },
    { title: "Catalog", link: "catalog.html" },
    { title: "Delivery", link: "delivery.html" },
    { title: "Price list", link: "index.html" }
];

let sliderImages = [
    "images/cover1.jpg",
    "images/cover2.jpg",
    "images/cover3.jpg",
    "images/cover4.jpg",
    "images/cover5.jpg",
    "images/cover6.jpg",
];

let mainMenu = document.getElementById("main-menu");
let footerMenu = document.getElementById("footerMenu");


addMenuitems(menuItems, mainMenu, true);
addMenuitems(menuItems, footerMenu);

let topMenuFeedback = addMenuItem("Feedback", "index.html", mainMenu, true);
topMenuFeedback.onclick = function () { showFeedback(); };
topMenuFeedback.innerHTML = "Feedback";
let botMenuFeedback = addMenuItem("Feedback", "index.html", footerMenu);
botMenuFeedback.innerHTML = "Feedback";
botMenuFeedback.style.color = "white";
botMenuFeedback.onclick = function () { showFeedback(); window.scrollTo(0, 0); };

