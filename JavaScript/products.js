// Here we can extract the perfumes when we have data bases
const products = [
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

// number of products the user can see
const productsPerPage = 9;
let currentPage = 1;
function showPage(page) {
  const productListContainer = document.querySelector('.product-show-container');
  productListContainer.innerHTML = ''; 

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = products.slice(startIndex, endIndex);

  productsToShow.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product-show');
      productElement.innerHTML = `
          <div class="shell-perfume-preview">
              <a href="BuyPage.html">
                  <div class="perfume-preview">
                      <div class="image-preview">
                          <img src="${product.image}" alt="${product.name}">
                      </div>
                      <div>
                          <p class="product-brand">${product.brand}</p>
                          <p class="product-name">${product.name}</p>
                          <p class="product-subdis">Парфюмна вода</p>
                          <p class="product-price">от ${product.price}</p>
                      </div>
                  </div>
              </a>
          </div>
      `;
      productListContainer.appendChild(productElement);
  });

  updatePagination(page);
}

function updatePagination(page) {
  const totalPages = Math.ceil(products.length / productsPerPage);
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const pageNumber = document.querySelector('.page-number');

  pageNumber.textContent = page;


  prevButton.classList.toggle('disabled', page === 1);
  nextButton.classList.toggle('disabled', page === totalPages);
}


document.querySelector('.prev').addEventListener('click', () => {
  if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
  }
});

document.querySelector('.next').addEventListener('click', () => {
  const totalPages = Math.ceil(products.length / productsPerPage);
  if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
  }
});


// Зареждаме първата страница при зареждане на сайта
showPage(currentPage);
