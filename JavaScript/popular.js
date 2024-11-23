//replace when we have a data base
const allProducts = [
  { name: "Angels' Share", brand: "Kilian", price: "20лв", image: "images/icons/parfum1.png" },
  { name: "Baccarat Rouge 540", brand: "Maison Francis Kurkdjian", price: "30лв", image: "images/perfume-index(delete when db)/maison-francis-kurkdjian-baccarat-rouge-540.webp" },
  { name: "Tom Ford Noir", brand: "Tom Ford", price: "40лв", image: "images/perfume-index(delete when db)/tom-ford-noir.png" },
  { name: "Chanel No.5", brand: "Chanel", price: "50лв", image: "images/perfume-index(delete when db)/chanel-no-5.jpg" },
  { name: "Dior Sauvage", brand: "Dior", price: "60лв", image: "images/perfume-index(delete when db)/dior-svg-edp.png" },
  { name: "Aventus", brand: "Creed", price: "70лв", image: "images/perfume-index(delete when db)/creed-aventus.png" },
  { name: "Le Male", brand: "Jean Paul Gaultier", price: "80лв", image: "images/perfume-index(delete when db)/jpg-le-male.jpg" },
  { name: "Black Orchid", brand: "Tom Ford", price: "90лв", image: "images/perfume-index(delete when db)/tom-ford-black-orchid.png" },
  { name: "Light Blue Intense", brand: "Dolce & Gabbana", price: "100лв", image: "images/perfume-index(delete when db)/dg-light-blue-intense.png" },
  { name: "Aqua di Gio Profondo", brand: "Giorgio Armani", price: "110лв", image: "images/perfume-index(delete when db)/g-armani-adg-profondo.png" },
  { name: "Oud Wood", brand: "Tom Ford", price: "120лв", image: "images/perfume-index(delete when db)/tom-ford-oud-wood.png" },
  { name: "YSL Libre Intense", brand: "YSL", price: "130лв", image: "images/perfume-index(delete when db)/ysl-libre-intense.png" }
];
let showList1 = [];
let showList2 = [];
for(let a = 0; a < 3; a++){
  let random = Math.floor(Math.random() * allProducts.length);
  showList1.push(allProducts[random]);
  allProducts.splice(random, 1);
  
}
for(let a = 0; a < 3; a++){
  let random = Math.floor(Math.random() * allProducts.length);
  showList2.push(allProducts[random]);
  allProducts.splice(random, 1);
  
}
const popularList1 = document.querySelector('.productpop1');

showList1.forEach(product => {
  const productElement = document.createElement('div');
  productElement.classList.add('shell');
  productElement.innerHTML = `
    <a href="BuyPage.html">
        <div class="product">
            <button class="go-button">
                Виж
            </button>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-discription">
                <p class="product-brand">${product.brand}</p>
                <p class="product-name">${product.name}</p>
                <p class="product-subdis">Парфюмна вода</p>
                <p class="product-price">${product.price}</p>
            </div>
        </div>
    </a>
  `;
  popularList1.appendChild(productElement);
});
const popularList2 = document.querySelector('.productpop2');
showList2.forEach(product => {
  const productElement = document.createElement('div');
  productElement.classList.add('shell');
  productElement.innerHTML = `
    <a href="BuyPage.html">
        <div class="product">
            <button class="go-button">
                Виж
            </button>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-discription">
                <p class="product-brand">${product.brand}</p>
                <p class="product-name">${product.name}</p>
                <p class="product-subdis">Парфюмна вода</p>
                <p class="product-price">${product.price}</p>
            </div>
        </div>
    </a>
  `;
  popularList2.appendChild(productElement);
});
