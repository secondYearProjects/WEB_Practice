let pathList = ["Home", "Catalog", "Records", "In stock"];

let records = [
    { title: "Queen - Bohemian Rhapsody", price: "60", label: "images/bohemian.jpg", link: "index.html" },
    { title: "KOMISSIYA - СЮДА", price: "30", label: "images/komissiya.jpg", link: "index.html" },
    { title: "JESUS CHRIST GOLF CLUB - surf", price: "28", label: "images/surf.jpg", link: "index.html" },
    { title: "David Bowie - Aladdin Sane", price: "45", label: "images/bowie.jpg", link: "index.html" },
    { title: "Kendrick Lamar - DAMN", price: "38", label: "images/lamar.jpg", link: "index.html" }
];

let shopCategories = [
    { title: "Records", link: "index.html", subcat: [{ title: "In stock", link: "index.html" }, { title: "Custom", link: "index.html" }] },
    { title: "Souvenirs", link: "index.html" },
    { title: "Tapes", link: "index.html" },
];

let pageNumber = 7;
let currentPage = 3;


let categories = document.getElementById("categories");




addPageNumbers(7, 3);
addShopItems(records);
showPath(pathList);





addCategoryItems(shopCategories, categories);