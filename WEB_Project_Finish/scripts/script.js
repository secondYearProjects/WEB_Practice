function addCategoryItem(item, menu) {
    let newMenuItem = document.createElement("li");
    let newLink = document.createElement("a");
    newLink.innerHTML = item.title;
    newLink.href = item.link;
    newMenuItem.appendChild(newLink);
    menu.appendChild(newMenuItem);

    if (item.subcat) {
        if (item.subcat.length > 0) {
            let newSub = document.createElement("ul");
            newSub.classList.add("doted");
            newMenuItem.appendChild(newSub);
            addCategoryItems(item.subcat, newSub);
        }
    }
}

function addCategoryItems(items, menu) {
    items.forEach(function (item) {

        addCategoryItem(item, menu);
    });
}

function createShopItem(record) {
    let item = document.createElement("div");
    item.classList.add('shopItem');
    let imageBlock = document.createElement("div");
    imageBlock.classList.add('record');

    let labelImage = document.createElement("img");
    labelImage.classList.add('label');
    labelImage.src = record.label;

    let recordImage = document.createElement("img");
    recordImage.classList.add('recordImage');
    recordImage.src = "icons/record.png";

    imageBlock.appendChild(labelImage);
    imageBlock.appendChild(recordImage);


    let titleBlock = document.createElement("div");
    titleBlock.classList.add('title');
    titleBlock.innerHTML = record.title;

    let linkBuy = document.createElement("a");
    linkBuy.href = record.link;

    let priceBlock = document.createElement("div");
    priceBlock.classList.add('priceBlock');

    let price = document.createElement("p");
    price.classList.add('price');
    price.innerHTML = record.price;

    let cartImage = document.createElement("img");
    cartImage.classList.add('shopCart');
    cartImage.src = "icons/shopping-cart.png";

    priceBlock.appendChild(price);
    priceBlock.appendChild(cartImage);

    linkBuy.appendChild(priceBlock);

    item.appendChild(imageBlock);
    item.appendChild(titleBlock);
    item.appendChild(linkBuy);
    return item;
}

function addShopItems(records) {
    let shopItems = document.getElementById("shopItems");
    records.forEach(function (item) {
        shopItems.appendChild(createShopItem(item));
    });
}

function addPageNumbers(pageNumber, currentPage) {
    let pageNumbers = document.getElementById("pageNumbers");
    pageNumbers.innerHTML = "";
    for (let i = 1; i <= 7; i++) {
        let newPageIndex = document.createElement("li");
        let newLink = document.createElement("a");
        newLink.href = "index.html";
        newLink.innerHTML = String(i);
        newPageIndex.appendChild(newLink);
        if (i == currentPage) {
            newPageIndex.setAttribute("current", "true");
        }
        pageNumbers.appendChild(newPageIndex);
    }
}

function addMenuitems(menuItems, menu, addDelim = false) {
    menu.innerHTML = "";
    menuItems.forEach(function (item) {
        addMenuItem(item.title, item.link, menu, addDelim);
    })
}

function addMenuItem(title, link, menu, addDelim = false) {
    if (addDelim) {
        if (menu.innerHTML != "") {
            let newDelimeter = document.createElement("li");
            newDelimeter.innerHTML = "|";
            menu.appendChild(newDelimeter);
        }
    }
    let newMenuItem = document.createElement("li");
    let newLink = document.createElement("a");
    newLink.innerHTML = title;
    newLink.href = link;
    newMenuItem.appendChild(newLink);
    menu.appendChild(newMenuItem);
    return newMenuItem;
}

function showPath(pathList) {
    let path = document.getElementById("path");
    pathList.forEach(function (item) {
        let newPathItem = document.createElement("li");
        newPathItem.innerHTML = item;
        path.appendChild(newPathItem);
    });
}



function showNext() {
    if (current == totalImages) {
        show(1);
    }
    else show(current + 1);
}

function showPrevious() {
    if (current == 1) {
        show(totalImages);
    }
    else show(current - 1);
}

function show(slideNumber) {
    clearTimeout(slideTimer);
    slideTimer = null;
    let oldImage = document.getElementById("sliderImage");
    oldImage.parentNode.removeChild(oldImage);
    newImage = document.createElement("img");
    newImage.id = "sliderImage";
    current = slideNumber;
    newImage.src = "images/cover" + current + ".jpg";

    slider.appendChild(newImage);
}

function slideShow() {
    if (slideTimer == null) {
        slideTimer = setTimeout(function () { slideTimer = null; showNext(); slideShow(); }, 4000);
    }
}


function hideFeedback() {
    $("#feedbackWrapper").fadeOut("slow", function () {
        $("#feedbackWrapper").hide();
    });
}

function showFeedback() {
    $("#feedbackWrapper").fadeIn("slow", function () {
    });
}